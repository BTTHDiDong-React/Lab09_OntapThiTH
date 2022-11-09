import { View, Text, StatusBar, TextInput } from 'react-native'
import React from 'react'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
//   <Icon name="rocket" color="#eee" size={30} />

import styles from '../themes/styles';

const ComponentItem = ({ navigation }) => {
    return (
        <View style={[styles.flex_1, {}]}>
            <StatusBar />
            <View style={[, {
                position: 'absolute',
                top: 0,
                left: 0,
                backgroundColor: '#1e1e1e',
                width: '100%',
                height: '30%',
            }]} ></View>
            <View style={[styles.flex_1, {}]} >
                <View style={[, {
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 20,
                    marginHorizontal: 20,
                }]} >
                    <View>
                        <Text style={[, { color: '#eee', opacity: 0.5, fontSize: 12 }]}>Location</Text>
                        <Text style={[, { color: '#fff', fontWeight: 'bold', }]}>Bilzen, Tanjungbalai <IconMaterialCommunityIcons name="menu-down" color="#eee" size={20} /></Text>
                    </View>
                    <IconFontAwesome style={[, {
                        backgroundColor: '#fff',
                        padding: 5,
                        paddingHorizontal: 7,
                        borderRadius: 10,
                        alignItems: 'center',
                    }]} name="user-secret" color="#11f721" size={30} />
                </View>

                {/* Search */}
                <View style={[styles.row, {
                    marginTop: 20,
                    marginHorizontal: 20,
                    backgroundColor: '#383838',
                    // justifyContent:'space-between'
                    borderRadius: 10,
                }]} >
                    <IconFontAwesome name="search" color="#eee" size={22} style={[, { padding: 10 }]} />
                    <TextInput placeholder='Search coffee' color={'#fff'} style={[styles.flex_1, { color: '#fff', marginRight: 5 }]} />
                    <IconFontAwesome name="code-fork" color="#eee" size={22} style={[, { paddingHorizontal: 15, padding: 10, backgroundColor: '#ff763b', borderTopRightRadius: 10, borderBottomRightRadius: 10 }]} />

                </View>

                <View style={[, {
                    marginTop: 20,
                    marginHorizontal: 20,
                    backgroundColor: '#e4ed64',
                    paddingVertical: 15,
                    paddingHorizontal: 20,
                }]}  >
                    <Text style={[, {
                        padding: 5,
                        backgroundColor: '#fc5442',
                        width: 55,
                        textAlign: 'center',
                    }]} >Promo</Text>
                    <Text style={[, {
                        backgroundColor:'#1e1e1e',
                        color: '#fff',
                        fontSize: 20,
                        fontWeight: 'bold',
                         width: '60%'
                    }]} >Buy one get one FREE</Text>
                </View>

            </View>

            <Text>ComponentItem</Text>
        </View>
    )
}

export default ComponentItem;