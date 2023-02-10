import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, {useState, useEffect} from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function App() {

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  const [displayCamera, setDisplayCamera] = useState(false);

  const requestCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })()
  }

  // Request camera permission
  useEffect(() => {
    requestCameraPermission();
  }, []);

  // What happens when we scan the bar code
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    console.log("Scanned")
  }

  // Check permissions and return the screens
  if (hasPermission === null) {
    return(
      <View style={styles.container}>
        <Text>Requesting for camera permission</Text>
      </View>
    )
  }

  if (hasPermission === false) {
    return(
      <View style={styles.container}>
        <Text style={{margin:10}}>No access to camera</Text>
        <Button title={'Allow Camera'} onPress={() => requestCameraPermission()} />
      </View>
    )
  }

  function openQRScanner() {
    console.log("Opening camera");
    setScanned(false);
    setDisplayCamera(!displayCamera);
  }

  return (
    <View style={styles.container}>
      <Text>QR Code Scanner Demo</Text>
      <TouchableOpacity style={{padding: 30,backgroundColor: "#f194ff", borderRadius: 10, marginTop: 10}} onPress={openQRScanner}>
        <Text>Scan QR</Text>
      </TouchableOpacity>

      <View style={styles.barcodebox}>
        {displayCamera && <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 400, width: 400 }} />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  cameraBox: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    width: 300,
    overflow: 'hidden',
    borderRadius: 30,
    backgroundColor: 'tomato'
  }
});
