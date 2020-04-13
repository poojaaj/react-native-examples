import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phone: ''
        }
    }

    render() {
        return (
            <View
                style={{
                    backgroundColor: "#20263f",
                    padding: 50,
                    height: "100%",
                    paddingTop: "45%"
                }}
            >
                <Text style={{ textAlign: "right", fontSize: 40, color: "#00e08b" }}>
                    ENTER THE
              </Text>
                <Text style={{ textAlign: "right", fontSize: 40, color: "#FFFFFF" }}>
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
                            width: "100%",
                            borderBottomColor: "black",
                            borderBottomWidth: 1,
                            padding: 20,
                            color: "#C0C0C0",
                            fontSize: 25
                        }}
                        onChangeText={(text) => this.setState({ firstName: text })}
                        value={this.state.firstName}
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
                            color: "#C0C0C0",

                            borderBottomWidth: 1,
                            padding: 20,
                            fontSize: 25
                        }}
                        onChangeText={(text) => this.setState({ lastName: text })}
                        value={this.state.lastName}
                    />
                </View>
                <View
                    style={{
                        flexDirection: "row"
                    }}
                >
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor="#C0C0C0"
                        style={{
                            width: "100%",
                            borderBottomColor: "black",
                            borderBottomWidth: 1,
                            padding: 20,
                            fontSize: 25,
                            color: "#C0C0C0",

                        }}
                        onChangeText={(text) => this.setState({ email: text })}
                        value={this.state.email}
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
                            padding: 20,
                            fontSize: 25,
                            color: "#C0C0C0",

                        }}
                        onChangeText={(text) => this.setState({ phone: text })}
                        value={this.state.phone}
                    />
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: "10%"
                    }}
                >
                    <View
                        style={{ width: 90 }}>
                        <Button
                            color="#00e08b"
                            title="Next"
                            style={{
                                fontSize: 25,
                                borderBottomColor: "black",
                                borderBottomWidth: 2
                            }}
                            onPress={() => this.props.navigation.navigate('End')}
                        />
                    </View>
                    <View style={{ width: 90 }}>
                        <Button
                            color="#00e08b"
                            title="Clear"

                            style={{
                                fontSize: 25,
                                borderBottomColor: "black",
                                borderBottomWidth: 2
                            }}
                            onPress={() => this.setState({
                                firstName: '',
                                lastName: '',
                                email: '',
                                phone: ''
                            })}
                        />
                    </View>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1
    }
});

export default Home;