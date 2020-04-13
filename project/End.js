import React from 'react'
import { View, Text } from 'react-native';

class End extends React.Component {

    render() {
        return (
            <View
                style={{
                    backgroundColor: "#20263f",
                    padding: 50,
                    height: "100%",
                    paddingTop: "75%",
                    alignItems: "center"
                }}
            >
               <Text
                style={{
                    color:'#fff',
                    fontSize:40
                }}
               > Form Successfully</Text>
               <Text
                style={{
                    color:'#00e08b',
                    fontSize:40
                }}
               > Submitted</Text>
            </View>
        );
    }
}

export default End;