import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons'
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
    /// so luong SP
    let soLuong = 1;


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

                {/*  */}
                <View   style={[  ,{ }]} >
                    <Text  style={[  ,{
                        fontWeight:'bold',
                        fontSize: 18,
                        marginTop: 25,
                    }]} >Deliver Address</Text>
                    <Text  style={[  ,{
                        fontWeight: 'bold',
                        marginTop: 15,
                    }]} >Jl. Kpg Sutoyo</Text>
                    <Text  style={[  ,{
                        marginTop: 8,
                        opacity: 0.5,
                        fontSize: 12,
                    }]} >Kpg. Sutoyo No. 620, Bilzen, Tanjungbalai.</Text>
                    <View  style={[ styles.row ,{
                        marginTop: 10,
                    }]}  >
                        <Text  style={[  ,{
                            fontSize:12,
                            opacity: 0.8,
                            borderRadius: 10,
                            borderWidth: 0.5,
                            padding: 4,
                            paddingHorizontal: 8,
                            marginRight: 10,
                        }]} ><IconFontAwesome name='edit' size={12} color={'#000'} /> Edit Address</Text>
                        <Text  style={[  ,{
                            fontSize:12,
                            opacity: 0.8,
                            borderRadius: 10,
                            borderWidth: 0.5,
                            padding: 4,
                            paddingHorizontal: 8,
                            marginRight: 10,
                        }]} ><IconMaterialCommunityIcons name='note-text-outline' size={12} color={'#000'} /> Add Note</Text>
                    </View>
                </View>

                {/*  */}
                <View   style={[ styles.flex_1, styles.row ,{
                    marginTop: 20,
                    borderTopWidth:0.5,
                    paddingVertical: 15,
                    alignItems: 'center'
                }]} >
                    <Image source={item.img} style ={{width:75, height:75, borderRadius: 15}}/>
                    <View  style={[ styles.flex_1 ,{marginHorizontal: 10}]} >
                        <Text  style={[  ,{fontWeight: 'bold'}]} >{item.name}</Text>
                        <Text  style={[  ,{opacity: 0.5, fontSize: 13, marginTop: 4}]} >with {item.nhaSX}</Text>
                    </View>
                    <IconMaterialCommunityIcons name='minus-circle-outline' size={25} color={'#000'}/>
                    <Text  style={[  ,{padding: 8, fontSize: 16,}]} >{soLuong}</Text>
                    <IconMaterialIcons name='add-circle-outline' size={25} color={'#000'}/>
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