import React from 'react'
import { Text, View} from "react-native"

const HelloWorldApp = () => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: 400,
            height: 400,
            backgroundColor:'white',
        }}>
            <Text>Hello, World! This is more of a test tbh</Text>
        </View>
    );
};
export default HelloWorldApp;