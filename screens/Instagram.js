import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import * as Permissions from "expo-permissions";
import {BarCodeScanner} from "expo-barcode-scanner";

export default class Instagram extends React.Component{
    constructor(){
        super()
        this.state = {
            hasCameraPermissions : null,
            scanned : false,
            scannedData : "",
            buttonState : "normal"
        }
    }

    getCameraPermissions=async()=>{
        const {status} = await Permissions.askAsync(Permissions.CAMERA)
        this.setState({
            hasCameraPermissions : status === 'granted',
            buttonState : "clicked",
            scanned : false
        })
    }
    handleBarCodeScanned=async({type,data})=>{
        this.setState({
            scanned : true,
            scannedData : data,
            buttonState : "normal"
        })
    }

  render(){
      const hasCameraPermissions = this.state.hasCameraPermissions
      const scanned = this.state.scanned
      const buttonState = this.state.buttonState
      if(buttonState==="clicked" && hasCameraPermissions){
          return(
              <BarCodeScanner style = {StyleSheet.absoluteFillObject} onBarCodeScanned = {scanned ? undefined : this.handleBarCodeScanned}/>
          )
      }
      else if(buttonState === "normal"){

        return(
        <View style={styles.container}> 
            <Text style={styles.displayText}>{hasCameraPermissions === true ? this.state.scannedData : "Request Camera Permissions"}</Text>
            <TouchableOpacity onPress={this.getCameraPermissions} style={styles.styleButton}>
                <Text style={styles.buttonText}>
                    Scan QR
                </Text>
                </TouchableOpacity>
        </View>
        )

      }
  }
}

const styles = StyleSheet.create({

    container : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    },

    displayText : {
        fontSize : 20,
        //add
    },

    styleButton : {
        backgroundColor : "blue",
        padding : 10,
        margin : 10,
        borderRadius : 20
    },

    buttonText : {
        fontWeight : "bold",
        fontSize : 20,
        color : "white"
    }

})