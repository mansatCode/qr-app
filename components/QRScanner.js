import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Camera, CameraType } from 'expo-camera'
import Ionicons from '@expo/vector-icons/Ionicons';

const screenDim = Dimensions.get('screen');

const QRScanner = (props) => {
    const handleBarCodeScanned = ({ type, data }) => {
        props.setQrData(data);
    }

    return (
        <View style={{position: 'relative', height: screenDim.height * 1.1, width: screenDim.width * 1.8}}>
            <Camera 
                type={CameraType.back}
                onBarCodeScanned={handleBarCodeScanned}
                style={styles.cameraStyle}
            />
            <TouchableOpacity>
                <Ionicons 
                    style={{position: 'absolute', left: 225, top: 75, zIndex: 4, elevation: 4}} 
                    onPress={props.toggleQRScanner}
                    name="close-circle"              
                    color="white"
                    size={40}  
                />
            </TouchableOpacity>
        </View>
    )
}

export default QRScanner

const styles = StyleSheet.create({
    cameraStyle: {
    position: 'absolute',
    width: Dimensions.get("screen").width * 1.8,
    left: -Dimensions.get("screen").width * 0.4,
    height: Dimensions.get("screen").height * 1.1,
  },
})