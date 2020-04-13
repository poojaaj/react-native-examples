import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#555",
        padding: 50,
        height: "100%",
        paddingTop: "45%"
      }}
    >
      <Text style={{ textAlign: "right", fontSize: 28, color: "#0fa" }}>
        ENTER THE
      </Text>
      <Text style={{ textAlign: "right", fontSize: 28, color: "#FFFFFF" }}>
        DETAILS
      </Text>
      <View
        style={{
          flexDirection: "row"
          // justifyContent: "space-between",
          // alignItems: "center"
        }}
      >
        <TextInput
          placeholder="FirstName "
          placeholderTextColor="#C0C0C0"
          style={{
            backgroundColor: "#555",
            width: "100%",
            borderBottomColor: "black",
            borderBottomWidth: 1,
            padding: 20,
            color: "#C0C0C0"
          }}
        />
      </View>
      <View
        style={{
          flexDirection: "row"
          // justifyContent: "space-between",
          // alignItems: "center"
        }}
      >
        <TextInput
          placeholder="LastName"
          placeholderTextColor="#C0C0C0"
          style={{
            width: "100%",
            borderBottomColor: "black",
            borderBottomWidth: 1,
            padding: 20
          }}
        />
      </View>
      <View
        style={{
          flexDirection: "row"
          // justifyContent: "space-between",
          // alignItems: "flex-start"
        }}
      >
        <TextInput
          placeholder="Email"
          placeholderTextColor="#C0C0C0"
          style={{
            width: "100%",
            borderBottomColor: "black",
            borderBottomWidth: 1,
            padding: 20
          }}
        />
      </View>
      <View
        style={{
          flexDirection: "row"
          // justifyContent: "space-between",
          // alignItems: "center"
        }}
      >
        <TextInput
          placeholder="Phone"
          placeholderTextColor="#C0C0C0"
          style={{
            width: "100%",
            borderBottomColor: "black",
            borderBottomWidth: 1,
            padding: 20
          }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Button
          color="#0fa"
          title="NEXT"
          style={{
            width: "40%",
            borderBottomColor: "black",
            borderBottomWidth: 2,
            padding: 30,
            backgroundColor: "#0fa",
            color: "#0fa"
          }}
        />
        <Button
          color="#0fa"
          title="CLEAR"
          style={{
            width: "40%",
            borderBottomColor: "black",
            borderBottomWidth: 2,
            padding: 10
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1
  }
});
