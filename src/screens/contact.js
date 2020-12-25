// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Contact(){
    return(
       <View style={styles.container}>
           <Text style={{fontSize:32}}>Contact</Text>
         </View>

    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#fff",
        flex:1,
    }
})

export default Contact;