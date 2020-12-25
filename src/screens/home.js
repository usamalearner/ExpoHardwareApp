// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import About from './about';

function Home(props){
    return(
       <View style={styles.container}>
           <Text style={{fontSize:32}}>Home</Text>
           <Button title="Open Camera" onPress={()=>props.navigation.navigate("Camera")}/>
           <Button title="Image Picker" onPress={()=>props.navigation.navigate("ImagePickerExample")}/>
           <Button title="Open Maps" onPress={()=>props.navigation.navigate("Map")}/>
           <Button title="Go to About" onPress={()=>props.navigation.navigate("About",{name:"syed usama ali"})}/>
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

export default Home;