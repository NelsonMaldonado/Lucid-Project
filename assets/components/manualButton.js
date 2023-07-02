import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { Button } from "@react-native-material/core"

const MyButton = () => {
  const handlePress = () => {
    const now = new Date()
    formattedTime = now.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
    })
    console.log(now)
  }

  return (
    <View>
      <Button onPress={handlePress} title="SLEEP"></Button>
      <Text style={styles.texto}>Now</Text>
    </View>
  )
}

export default MyButton

const styles = StyleSheet.create({
  texto: {
    fontSize: 30,
    color: "white",
    backgroundColor: "#4CAF50",
    paddingHorizontal: 16,
    marginVertical: 8,
    borderRadius: 30,
    textAlign: "center",
  },
})
