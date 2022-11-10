import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons'
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
//   <Icon name="rocket" color="#eee" size={30} />

import styles from '../themes/styles';
import dbCoffee from '../database/dataLocal'

const ComponentOrder = ({ route, navigation }) => {
    // console.log("🚀 ~ file: ComponentOrder.js ~ line 35 ~ ComponentOrder ~ ComponentOrder")
    //
    let { item } = route.params;

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
    // let soLuong = 1;
    const [soLuong, setSoLuong] = useState(1);

    const btnMinus = () => {
        if (soLuong === 1) {
            setMoneyOrder(item.money);
            setSoLuong(1);

        }
        else {
            let newSoLuong = soLuong - 1;

            setMoneyOrder(item.money * newSoLuong);
            setSoLuong(newSoLuong);
        }
    }
    const btnPlus = () => {
        let newSoLuong = soLuong + 1;

        setMoneyOrder(item.money * newSoLuong);
        setSoLuong(newSoLuong);
    }

    //
    const [moneyOrder, setMoneyOrder] = useState(0);
    useEffect(() => {
        // add gia tri tien cua sp
        setMoneyOrder(item.money)
    }, [])


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
                <View style={[, {}]} >
                    <Text style={[, {
                        fontWeight: 'bold',
                        fontSize: 18,
                        marginTop: 25,
                    }]} >Deliver Address</Text>
                    <Text style={[, {
                        fontWeight: 'bold',
                        marginTop: 15,
                    }]} >Jl. Kpg Sutoyo</Text>
                    <Text style={[, {
                        marginTop: 8,
                        opacity: 0.5,
                        fontSize: 12,
                    }]} >Kpg. Sutoyo No. 620, Bilzen, Tanjungbalai.</Text>
                    <View style={[styles.row, {
                        marginTop: 10,
                    }]}  >
                        <Text style={[, {
                            fontSize: 12,
                            opacity: 0.8,
                            borderRadius: 10,
                            borderWidth: 0.5,
                            padding: 4,
                            paddingHorizontal: 8,
                            marginRight: 10,
                        }]} ><IconFontAwesome name='edit' size={12} color={'#000'} /> Edit Address</Text>
                        <Text style={[, {
                            fontSize: 12,
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
                <View style={[styles.flex_1, styles.row, {
                    marginTop: 20,
                    borderTopWidth: 0.5,
                    paddingVertical: 15,
                    alignItems: 'center'
                }]} >
                    <Image source={item.img} style={{ width: 75, height: 75, borderRadius: 15 }} />
                    <View style={[styles.flex_1, { marginHorizontal: 10 }]} >
                        <Text style={[, { fontWeight: 'bold' }]} >{item.name}</Text>
                        <Text style={[, { opacity: 0.5, fontSize: 13, marginTop: 4 }]} >with {item.nhaSX}</Text>
                    </View>

                    <TouchableOpacity onPress={() => btnMinus()}>
                        <IconMaterialCommunityIcons name='minus-circle-outline' size={25} color={'#000'} />
                    </TouchableOpacity>
                    <Text style={[, { padding: 8, fontSize: 16, }]} >{soLuong}</Text>
                    <TouchableOpacity onPress={() => btnPlus()} >
                        <IconMaterialIcons name='add-circle-outline' size={25} color={'#000'} />
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
            <View style={[styles.flex_1, {
                margin: 20,
            }]} >
                {/* Footer */}
                <View style={[styles.row, {
                    padding: 10,
                    alignItems: 'center',
                    borderRadius: 5,
                    borderWidth: 0.2,
                }]} >
                    <IconMaterialCommunityIcons style={[, {}]} name='sale' size={25} color={'#f7992d'} />
                    <Text style={[styles.flex_1, {
                        marginHorizontal: 15,
                        fontWeight: '700',
                    }]} >1 Discount is Applied</Text>
                    <IconFontAwesome style={[, {}]} name='angle-right' size={25} color={'#000'} />
                </View>

                {/*  */}
                <View style={[, {
                    marginTop: 20,
                    marginHorizontal: 20
                }]} >
                    <Text style={[, {
                        fontWeight: 'bold',
                    }]} >Payment Summary</Text>
                    <View style={[styles.row, {
                        marginTop: 15,
                        justifyContent: 'space-between',
                    }]} >
                        <Text style={[, {}]} >Price</Text>
                        <Text style={[, {
                            fontWeight: 'bold',
                        }]} >$ {moneyOrder}</Text>
                    </View>
                    <View style={[styles.row, {
                        marginTop: 15,
                        justifyContent: 'space-between',
                    }]} >
                        <Text style={[, {}]} >Delivery Fee</Text>
                        <Text style={[, { fontWeight: 'bold', }]} ><Text style={{ textDecorationLine: 'line-through', color: '#636363' }}>$2.0 </Text>$1.0</Text>
                    </View>
                    <View style={[styles.row, {
                        marginTop: 15,
                        justifyContent: 'space-between',
                        borderTopWidth: 0.3,
                        paddingTop: 10,
                    }]}  >
                        <Text style={[, {}]} >Total Payment</Text>
                        <Text style={[, { fontWeight: 'bold' }]} >$ {moneyOrder + 1}</Text>
                    </View>


                </View>


                {/*  */}
                <View>
                    <View style={[styles.row, {
                        // justifyContent:'center',
                        alignItems: 'center',
                        marginTop: 20,
                        paddingVertical: 10,
                    }]} >
                        <IconMaterialCommunityIcons style={[, {}]} name='cash' size={25} color='#f7992d' />
                        <View style={[styles.row, { marginLeft: 10, backgroundColor: '#eee', borderRadius: 10, }]} >
                            <Text style={[styles.colorMenuDS1, { padding: 3, paddingHorizontal: 7, borderRadius: 10, textAlign: 'center' }]}  >Cash</Text>
                            <Text style={[, { padding: 3, paddingHorizontal: 7, borderRadius: 10, textAlign: 'center', fontSize: 13 }]} >$ {moneyOrder + 1}</Text>
                        </View>
                        <View style={styles.flex_1}></View>
                        <IconMaterialCommunityIcons style={[, {}]} name='dots-horizontal-circle' size={25} color={'gray'} />
                    </View>
                    <TouchableOpacity style={[styles.viewCenter, {
                        backgroundColor: '#f7992d',
                        marginTop: 15,
                        marginBottom: 20,
                        padding: 15,
                        borderRadius: 10,
                    }]}
                        onPress={() => { alert(`Đang cập nhật.`) }}
                    >
                        <Text style={[, {
                            color: '#fff',
                            fontWeight: 'bold',
                            fontSize: 20,
                        }]} >Order</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    )
}

export default ComponentOrder;