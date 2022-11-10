import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
//   <Icon name="rocket" color="#eee" size={30} />

import dbCoffeeLocal from '../database/dataLocal';
import styles from '../themes/styles';

const ComponentDetail = ({ navigation, route }) => {
    // console.log("🚀 ~ file: ComponentDetail.js ~ line 5 ~ ComponentDetail ~ 😜😜😜😜😜",)

    // sk button Size
    const [btnSize, setBtnSize] = useState(1)  // 0 : S || 1 : M || 2 : L

    //

    let { item } = route.params;
    return (
        <View style={[styles.flex_1, { padding: 20, backgroundColor: '#fff' }]}  >

            {/*  */}
            <View style={[styles.row, { alignItems: 'center' }]}  >
                <TouchableOpacity onPress={() => navigation.navigate('ComponentHome')}>
                    <IconFontAwesome name='angle-left' size={25} color={'#000'} style={{ paddingHorizontal: 10 }} />
                </TouchableOpacity>
                <Text style={[styles.flex_1, { textAlign: 'center', fontSize: 18 }]}  >Detail</Text>
                <IconFontAwesome name='heart-o' size={25} color={'#000'} />
            </View>

            {/*  */}
            <View  style={[  ,{
                borderBottomWidth: 0.5,
            }]}  >
                <Image source={item.img} style={[, { width: '100%', height: 220, borderRadius: 10, marginVertical: 20 }]} />

                <Text style={[, { fontSize: 18, fontWeight: 'bold', marginTop: 10 }]}  >{item.name}</Text>
                <Text style={[, { fontSize: 13, opacity: 0.5, marginTop: 8 }]}  >with {item.nhaSX}</Text>
                <View style={[styles.row, {
                    alignItems: 'center', marginTop: 15,
                    paddingBottom: 20,
                }]}  >
                    <IconFontAwesome name='star' size={25} color="#ff0" />
                    <Text style={[, { fontWeight: 'bold', marginLeft: 10 }]}  >4.8</Text>
                    <Text style={[, { fontSize: 11, opacity: 0.5, marginLeft: 2, }]}  >(230)</Text>
                </View>

                <View  style={[ styles.row ,{
                    position:'absolute',
                    bottom: 20,
                    right: 0,
                }]}>
                    <IconMaterialCommunityIcons  style={[  ,{padding: 5, marginRight: 10, backgroundColor:'#eee', borderRadius: 10}]} name='seed' size={25} color="#f7992d" />
                    <IconMaterialCommunityIcons style={[  ,{padding: 5, backgroundColor:'#eee', borderRadius: 10}]} name='coffee-maker' size={25} color="#f7992d" />
                </View>
            </View>

            {/*  */}
            <View>
                <Text style={[  ,{fontWeight: 'bold', marginTop: 20,}]}>Description</Text>
                <Text style={[  ,{marginTop: 15, 
                    color: '#8a807f',
                }]}>Cappuccino là thức uống có nguồn gốc từ Ý gồm cà phê và sữa khuấy bông. Ở Ý, quốc gia mà đồ uống này phổ biến nhất, theo truyền thống, được thưởng thức vào buổi sáng,... <Text  style={[  ,{color: '#f7992d', fontWeight: 'bold'}]}>Read More</Text></Text>
                <Text style={[  ,{fontWeight: 'bold', marginTop: 15,}]}>Size</Text>

                <View style={[ styles.row ,{marginTop: 10, justifyContent: 'space-around'}]}>
                    <TouchableOpacity onPress={() => { setBtnSize(0)}}>
                        <Text  style={[ styles.btnSize, btnSize === 0? styles.btnSizeClick:null  ,{}]}>S</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { setBtnSize(1)}}>
                        <Text  style={[ styles.btnSize, btnSize === 1? styles.btnSizeClick:null  ,{}]}>M</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { setBtnSize(2)}}>
                        <Text  style={[ styles.btnSize, btnSize === 2? styles.btnSizeClick:null  ,{}]}>L</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* ? */}
            <View style={[ styles.row ,{marginVertical: 25, marginHorizontal: 10, justifyContent:'space-between' }]} >
                <View style={[  ,{}]} >
                    <Text style={[  ,{opacity: 0.5, fontSize: 13,}]} >Price</Text>
                    <Text style={[  ,{paddingVertical: 5, color: '#f7992d', fontWeight: 'bold'}]} >$ {item.money}</Text>
                </View>
                <TouchableOpacity onPress={() => {alert('Đang cập nhật.')}}>
                    <Text style={[  ,{
                        padding: 15, 
                        backgroundColor: '#f08c13',
                        width: 200,
                        color: '#fff',
                        textAlign:'center',
                        fontSize: 18,
                        fontWeight: 'bold',
                        borderRadius: 10,
                    }]} >Buy Now</Text>
                </TouchableOpacity>
            </View>





        </View>
    )
}

export default ComponentDetail;
