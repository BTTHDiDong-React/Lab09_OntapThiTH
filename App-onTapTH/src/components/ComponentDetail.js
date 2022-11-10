import { View, Text } from 'react-native'
import React from 'react'

const ComponentDetail = ({ navigation, route }) => {
    console.log("🚀 ~ file: ComponentDetail.js ~ line 5 ~ ComponentDetail ~ 😜😜😜😜😜",)

    let { item } = route.params;
    return (
        <View>
            <Text>ComponentDetail</Text>
        </View>
    )
}

export default ComponentDetail;
