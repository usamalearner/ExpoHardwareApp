// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function About({route}){
    const { name } = route.params;
    return(
       <View style={styles.container}>
           <Text style={{fontSize:32}}>About</Text>
           <Text style={{fontSize:32}}>{name}</Text>
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

export default About;