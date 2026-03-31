import { Text, StyleSheet, View, Pressable } from "react-native"
import React from "react";

const HomeScreen = () => {

  const pingBackend = async () => {
    const response = await fetch("http://192.168.31.150:3000");
    const data = await response.text();
    console.log(data);
  }
  return (
    <View>
      <Text>Home Screen</Text>
      <Pressable style={styles.btn} onPress={pingBackend}>
        <Text style={{color:"white"}}>Ping Backend</Text>
      </Pressable>
    </View>
  );
}

export default HomeScreen

const styles = StyleSheet.create({
  btn:{
    backgroundColor: "black",
    color: "white",
    borderRadius: 10,
    padding: 5
  }
})
