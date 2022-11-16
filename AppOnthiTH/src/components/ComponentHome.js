import { View, Text, Button, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons'
// <Icon name="rocket" color="#eee" size={30} />
import styles from '../themes/styles';
import data from '../database/data'

const ComponentHome = ({ navigation }) => {

    //
    let { item_z, listCoffee } = data;
    // console.log("🚀 ~ file: ComponentHome.js ~ line 14 ~ ComponentHome ~ listCoffee", listCoffee)

    const [dbCoffee, setDbCoffee] = useState([])

    useEffect(() => {
        setDbCoffee(listCoffee);
    }, [])

    //
    const renderItem = ({item}) => {
        return (
            <View style={[, {
                margin: 10, backgroundColor: '#F8DEDE',
                height: 240, width: '45%',
                borderRadius: 10,
            }]}  >
                <Image style={[, {
                    width: '100%',
                    height: 150,
                    borderRadius: 10,
                }]} source={item.imgURL} />
                <View style={[styles.row, {}]}>
                    <Text style={[styles.flex_1, {
                        fontSize: 15, fontWeight: 'bold', padding: 5,
                    }]}>{item.name}</Text>
                    <Text style={[, {
                        padding: 10, fontSize: 16, fontWeight: 'bold', color: '#fc6c23',
                    }]}>$ {item.price}</Text>
                </View>
                <View style={[styles.row, { margin: 5,}]} >
                    <IconFontAwesome name='star' size={15} color='#fc6c23' />
                    <Text style={[, { marginLeft: 3, fontSize: 11, }]} >{item.star} ( {item.review} Reviews )</Text>
                </View>

                <TouchableOpacity style={[, {
                    width: 50,
                    height: 40,
                    alignItems:'center',

                    position: 'absolute',
                    bottom: 0,
                    right: 0,

                    borderTopLeftRadius:10,
                }]} >
                    <IconMaterialCommunityIcons style={[, {
                        backgroundColor: '#fc6c23',
                        padding: 10, paddingHorizontal: 15,
                        borderTopLeftRadius:10,
                        borderBottomRightRadius:10,
                    }]} name='shopping' size={20} color='#000' />
                </TouchableOpacity>
                
                <TouchableOpacity style={[, {
                    position: 'absolute',
                    top: 5,
                    right: 5,
                }]} >
                    <IconFontAwesome style={[, {
                        padding:5,
                        backgroundColor: '#ffcd82',
                        borderRadius: 20,
                        borderWidth:0.5,
                        borderColor: '#fc6c23',
                        paddingTop: 7,
                        paddingLeft: 7,
                    }]} name='heart-o' size={20} color='#fc6c23' />
                </TouchableOpacity>

            </View>
        )
    }
    

    return (
        <View style={[styles.flex_1, {
            backgroundColor: '#EBDBCC',
        }]}>
            {/*  */}
            <View style={[styles.row, {
                backgroundColor: '#F8E7D7',
                alignItems: 'center',
                padding: 5,
                paddingHorizontal: 10,
            }]}>
                <IconMaterialCommunityIcons name='menu' size={30} color='#000' />
                <View style={[styles.flex_1, styles.viewCenter, styles.row, {}]} >
                    <IconMaterialIcons name='location-on' size={25} color='#D4A055' />
                    <View style={[, { marginLeft: 5 }]} >
                        <Text style={[, { fontSize: 13 }]} >Sukrabad, Dhaka</Text>
                        <Text style={[, { fontSize: 13, marginTop: -5 }]} >Bangladesh <IconMaterialCommunityIcons name='menu-down' size={20} color='#D4A055' /></Text>
                    </View>
                </View>
                <IconMaterialCommunityIcons name='message-badge-outline' size={30} color='#000' />
                <IconMaterialIcons style={{ marginLeft: 10, }} name='notifications-none' size={30} color='#000' />
            </View>

            {/*  */}

            <Image style={[, {
                width: '95%',
                height: 200,
                margin: 10,
                marginTop: 20,
                borderRadius: 10,
            }]} source={require('../images/bg_2.jpg')} />

            {/*  */}

            <View style={[styles.row, { marginLeft: 10, marginTop: 10, }]} >
                <Text style={[, {
                    padding: 5, paddingHorizontal: 10, marginRight: 10, backgroundColor: '#F8DEDE',
                    borderRadius: 10, borderWidth: 1, borderColor: '#D4A055',
                }]} >All Coffee</Text>
                <Text style={[, {
                    padding: 5, paddingHorizontal: 10, marginRight: 10, backgroundColor: '#F8DEDE',
                    borderRadius: 10, borderWidth: 1, borderColor: '#D4A055',
                }]} >Hot Coffee</Text>
                <Text style={[, {
                    padding: 5, paddingHorizontal: 10, marginRight: 10, backgroundColor: '#F8DEDE',
                    borderRadius: 10, borderWidth: 1, borderColor: '#D4A055',
                }]} >Hot Teas</Text>
                <Text style={[, {
                    padding: 5, paddingHorizontal: 10, marginRight: 10, backgroundColor: '#F8DEDE',
                    borderRadius: 10, borderWidth: 1, borderColor: '#D4A055',
                }]} >Cool Coffee</Text>
            </View>
            {/* flatlist  */}

            <View style={[styles.flex_1, { marginTop: 20, }]}  >

                {/* item */}
                {/* <View style={[, {
                    margin: 10, backgroundColor: '#F8DEDE',
                    height: 240, width: '45%',
                    borderRadius: 10,
                }]}  >
                    <Image style={[, {
                        width: '100%',
                        height: 150,
                        borderRadius: 10,
                    }]} source={require("../images/img_coffee_1.jpg")} />
                    <View style={[styles.row, {}]}>
                        <Text style={[styles.flex_1, {
                            fontSize: 15, fontWeight: 'bold', padding: 5,
                        }]}>{item_z.name}</Text>
                        <Text style={[, {
                            padding: 10, fontSize: 16, fontWeight: 'bold', color: '#fc6c23',
                        }]}>$ {item_z.price}</Text>
                    </View>
                    <View style={[styles.row, { margin: 5,}]} >
                        <IconFontAwesome name='star' size={15} color='#fc6c23' />
                        <Text style={[, { marginLeft: 3, fontSize: 11, }]} >{item_z.star} ( {item_z.review} Reviews )</Text>
                    </View>

                    <TouchableOpacity style={[, {
                        width: 50,
                        height: 40,
                        alignItems:'center',

                        position: 'absolute',
                        bottom: 0,
                        right: 0,

                        borderTopLeftRadius:10,
                    }]} >
                        <IconMaterialCommunityIcons style={[, {
                            backgroundColor: '#fc6c23',
                            padding: 10, paddingHorizontal: 15,
                            borderTopLeftRadius:10,
                            borderBottomRightRadius:10,
                        }]} name='shopping' size={20} color='#000' />
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={[, {
                        position: 'absolute',
                        top: 5,
                        right: 5,
                    }]} >
                        <IconFontAwesome style={[, {
                            padding:5,
                            backgroundColor: '#ffcd82',
                            borderRadius: 20,
                            borderWidth:0.5,
                            borderColor: '#fc6c23',
                            paddingTop: 7,
                            paddingLeft: 7,
                        }]} name='heart-o' size={20} color='#fc6c23' />
                    </TouchableOpacity>

                </View> */}

                <FlatList
                    data={dbCoffee}
                    keyExtractor={item => item.id}
                    numColumns={2}
                    renderItem={renderItem}
                />


            </View>

            <Button title='abc' onPress={() => navigation.navigate('ComponentPayment')} />
        </View>
    )
}
////             style={[  , {}]}                     ///

export default ComponentHome;