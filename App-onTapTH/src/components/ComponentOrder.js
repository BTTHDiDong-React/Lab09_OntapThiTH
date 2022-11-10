import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
//   <Icon name="rocket" color="#eee" size={30} />

import styles from '../themes/styles';
import dbCoffee from '../database/dataLocal'

const ComponentOrder = ({ route, navigation }) => {
    console.log("🚀 ~ file: ComponentOrder.js ~ line 35 ~ ComponentOrder ~ ComponentOrder")


    //
    const [chooseDeliver, setChooseDeliver] = useState(styles.btnOrder_1);
    const [choosePickUp, setChoosePickUp] = useState(null)

    const setDeliver_PickUp = (val) => {    // 1 : Deliver || 0 : pick Up

        if (val === 1) {
            setChooseDeliver(styles.btnOrder_1);
            setChoosePickUp(null);
        }
        else {
            setChooseDeliver(null);
            setChoosePickUp(styles.btnOrder_1);
        }

    }


    // console.log("🚀 ~ file: ComponentOrder.js ~ line 5 ~ ComponentOrder ~ route", route)

    let { item } = route.params;
    // console.log("🚀 ~ file: ComponentOrder.js ~ line 8 ~ ComponentOrder ~ item", item)
    return (
        <View style={[styles.flex_1, {
            backgroundColor: '#fff'
        }]} >
            <View style={[styles.flex_1, {
                marginTop: 15,
                marginHorizontal: 20
            }]} >
                <View style={[styles.row, {}]} >
                    <TouchableOpacity
                        onPress={() => { navigation.goBack() }}
                    >
                        <IconFontAwesome style={[, {
                            paddingHorizontal: 10,
                        }]} name="angle-left" color="#000" size={30} />

                    </TouchableOpacity>
                    <Text style={[styles.flex_1, {
                        fontSize: 19,
                        textAlign: 'center',
                        fontWeight: 'bold',
                        marginTop: 4,
                        marginRight: 20
                    }]} >Order</Text>
                </View>
                {/*  */}
                <View style={[styles.row, {
                    backgroundColor: '#eee',
                    marginTop: 20,
                    borderRadius: 10,
                    padding: 3,
                    // justifyContent: 'space-around',
                }]} >
                    <TouchableOpacity style={[styles.flex_1, {

                    }]}
                        onPress={() => setDeliver_PickUp(1)}
                    >
                        <Text style={[chooseDeliver, {
                            padding: 7,
                            paddingHorizontal: 10,
                            textAlign: 'center',

                        }]} >Deliver</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.flex_1, {}]}
                        onPress={() => setDeliver_PickUp(0)}
                    >
                        <Text style={[choosePickUp, {
                            padding: 7,
                            paddingHorizontal: 10,
                            textAlign: 'center',

                        }]} >Pick Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={[, {
                width: '100%',
                height: 2,
                backgroundColor: '#000',
                opacity: 0.4,
            }]} >

            </View>
            <View style={[styles.flex_1, {}]} >

            </View>

            <Text>ComponentOrder</Text>
        </View>
    )
}

export default ComponentOrder;