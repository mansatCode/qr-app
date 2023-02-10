import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {

  function openQRScanner() {
    console.log("Scanning QR");
  }

  return (
    <View style={styles.container}>
      <Text>QR Code Scanner Demo</Text>
      <TouchableOpacity style={{padding: 10, backgroundColor: "red", borderRadius: 10}} onPress={openQRScanner}>
        <Text>Scan QR</Text>
      </TouchableOpacity>
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
