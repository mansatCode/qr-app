import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, {useState, useEffect} from 'react';
import QRScanner from './components/QRScanner';
import { Camera } from 'expo-camera';
import QRScanner_2 from './components/QRScanner_2';

export default function App() {
  const [displayCamera, setDisplayCamera] = useState(false);
  const [qrData, setQrData] = useState(null);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  // What happens when we scan the bar code
  useEffect(() => {
    if (qrData == null) return;
    setDisplayCamera(false); // Hide camera

    // ON SCAN, DO SOMETHING LIKE OPEN PAYMENT PAGE?
    // Don't necessarily have to use the qrData if we're dummying payments
    console.log("QR Data: ", qrData);
  }, [qrData])

  function toggleQRScanner() {
    setDisplayCamera(prevCameraState => !prevCameraState);
  }

  return (
    <View style={styles.container}>
      <Text>QR Code Scanner Demo</Text>
      <TouchableOpacity style={{padding: 30,backgroundColor: "#f194ff", borderRadius: 10, marginTop: 10}} onPress={toggleQRScanner}>
        <Text>Scan QR</Text>
      </TouchableOpacity>

      <QRScanner_2 />
      {/* {displayCamera && <QRScanner setQrData={setQrData} toggleQRScanner={toggleQRScanner}/>} */}
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
});
