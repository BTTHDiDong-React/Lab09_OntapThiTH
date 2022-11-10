import { View, Text, StatusBar, TextInput, ImageBackground, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
//   <Icon name="rocket" color="#eee" size={30} />

import styles from '../themes/styles';
import dbCoffeeLocal from '../database/dataLocal';

let dbNameCoffee = [
    'Cappuccino', 'Machiato', 'Latte', 'Mocha'
]

const ComponentHome = ({ navigation }) => {

    const [db, setDb] = useState([])
    
    useEffect(() => {
      setDb(dbCoffeeLocal)
        
    }, [])
    

    let item1 = {
        id: 1,
        name: 'Cappuccino',
        nhaSX: 'Chocolate',
        img: require('../images/img_coffee_1.jpg'),
        money: 4.52
    }

    const renderItem = ({item}) => {
        // console.log("🚀 ~ file: ComponentHome.js ~ line 33 ~ renderItem ~ item", item)
        return (
            <View style={[, {
                width: '47%',
                backgroundColor: '#fff',
                marginRight: 20,
                borderRadius: 10,
                marginBottom: 15,
            }]} >
                <View style={[, {
                    alignItems: 'center'
                }]} >
                    <Image source={item.img} style={[, {
                        width: "100%",
                        height: 150,
                        borderRadius: 10,
                    }]} />
                </View>
                <View style={[, { paddingHorizontal: 15, padding: 10 }]} >
                    <Text style={[, {
                        fontSize: 18,
                        fontWeight: 'bold',
                    }]}  >{item.name}</Text>
                    <Text style={[, {
                        opacity: 0.7,
                        fontSize: 13
                    }]} >with {item.nhaSX}</Text>
                    <View style={[styles.row, {
                        justifyContent: 'space-between',
                        marginTop: 10,
                    }]} >
                        <Text style={[, {
                            fontWeight: 'bold'
                        }]}  >$ {item.money}</Text>
                        <TouchableOpacity 
                            onPress={() => navigation.navigate('ComponentOrder', {item: item})}
                        >
                            <IconFontAwesome style={[, {
                                padding: 5,
                                paddingHorizontal: 7,
                                backgroundColor: '#f7992d',
                                borderRadius: 5,
                            }]} name="plus" color="#fff" size={14} />
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        )
    }

    return (
        <View style={[styles.flex_1, {
            backgroundColor: '#eee'
        }]}>
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

                {/* bang hieu */}
                <View style={[, {
                    marginTop: 20,
                    marginHorizontal: 20,
                    // backgroundColor: '#e4ed64',
                }]}  >
                    <ImageBackground
                        source={require('../images/bg_home_1.jpg')} resizeMode="cover" style={[, {

                            paddingVertical: 15,
                            paddingHorizontal: 20,
                        }]}  >
                        <Text style={[, {
                            padding: 5,
                            backgroundColor: '#f73d2d',
                            width: 55,
                            textAlign: 'center',
                            color: '#fff',
                            borderRadius: 10,
                        }]} >Promo</Text>
                        <View style={[, {
                            width: 150,
                            height: 20,
                            backgroundColor: '#1e1e1e',
                            marginTop: 15
                        }]} >
                            <Text style={[, {
                                // backgroundColor:'#1e1e1e',
                                color: '#fff',
                                fontSize: 27,
                                fontWeight: 'bold',
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                            }]} >Buy one get</Text>
                        </View>

                        <View style={[, {
                            width: 120,
                            height: 20,
                            backgroundColor: '#000',
                            marginTop: 15
                        }]} >
                            <Text style={[, {
                                // backgroundColor:'#1e1e1e',
                                color: '#fff',
                                fontSize: 27,
                                fontWeight: 'bold',
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                            }]} >one FREE</Text>
                        </View>
                    </ImageBackground>
                </View>

                {/* ds nuoc uong */}
                <View style={[styles.row, {
                    marginTop: 20,
                    marginLeft: 20,
                }]}  >
                    <Text style={[styles.colorMenuDS1, {
                        padding: 7,
                        paddingHorizontal: 10,
                        borderRadius: 10,
                        marginRight: 15
                    }]} >{dbNameCoffee[0]}</Text>
                    <Text style={[styles.colorMenuDS2, {
                        padding: 7,
                        paddingHorizontal: 10,
                        borderRadius: 10,
                        marginRight: 15
                    }]} >{dbNameCoffee[1]}</Text>
                    <Text style={[styles.colorMenuDS2, {
                        padding: 7,
                        paddingHorizontal: 10,
                        borderRadius: 10,
                        marginRight: 15
                    }]} >{dbNameCoffee[2]}</Text>
                    <Text style={[styles.colorMenuDS2, {
                        padding: 7,
                        paddingHorizontal: 10,
                        borderRadius: 10,
                        marginRight: 15
                    }]} >{dbNameCoffee[3]}</Text>



                </View>

                {/* Grid View */}
                <View style={[, {
                    marginTop: 20,
                    marginHorizontal: 20,
                    marginBottom: 330
                }]} >
                    {/* Item */}
                    {/*                     
                    <View style={[, {
                        width: '47%',
                        backgroundColor: '#fff',
                        marginRight: 20,
                        borderRadius: 10,
                    }]} >
                        <View style={[, {
                            alignItems: 'center'
                        }]} >
                            <Image source={item.img} style={[, {
                                width: "100%",
                                height: 150,
                                borderRadius: 10,
                            }]} />
                        </View>
                        <View style={[, { paddingHorizontal: 15, padding: 10 }]} >
                            <Text style={[, {
                                fontSize: 18,
                                fontWeight: 'bold',
                            }]}  >{item.name}</Text>
                            <Text style={[, {
                                opacity: 0.7,
                                fontSize: 13
                            }]} >with {item.nhaSX}</Text>
                            <View   style={[ styles.row ,{
                                justifyContent:'space-between',
                                marginTop: 10,
                            }]} >
                                <Text style={[, {
                                    fontWeight: 'bold'
                                }]}  >$ {item.money}</Text>
                                <TouchableOpacity > 
                                <IconFontAwesome style={[, {
                                    padding: 5,
                                    paddingHorizontal: 7,
                                    backgroundColor: '#f7992d',
                                    borderRadius: 5,
                                }]} name="plus" color="#fff" size={14} />
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                    
                    <View style={[, {
                        width: '47%',
                        backgroundColor: '#fff',
                        marginRight: 20,
                        borderRadius: 10,
                    }]} >
                        <View style={[, {
                            alignItems: 'center'
                        }]} >
                            <Image source={item.img} style={[, {
                                width: "100%",
                                height: 150,
                                borderRadius: 10,
                            }]} />
                        </View>
                        <View style={[, { paddingHorizontal: 15, padding: 10 }]} >
                            <Text style={[, {
                                fontSize: 18,
                                fontWeight: 'bold',
                            }]}  >{item.name}</Text>
                            <Text style={[, {
                                opacity: 0.7,
                                fontSize: 13
                            }]} >with {item.nhaSX}</Text>
                            <View   style={[ styles.row ,{
                                justifyContent:'space-between',
                                marginTop: 10,
                            }]} >
                                <Text style={[, {
                                    fontWeight: 'bold'
                                }]}  >$ {item.money}</Text>
                                <TouchableOpacity > 
                                <IconFontAwesome style={[, {
                                    padding: 5,
                                    paddingHorizontal: 7,
                                    backgroundColor: '#f7992d',
                                    borderRadius: 5,
                                }]} name="plus" color="#fff" size={14} />
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                     */}

                    <FlatList
                        data={dbCoffeeLocal}
                        key={item => item.id}
                        numColumns={2}
                        renderItem={renderItem} />
                </View>

            </View>

        </View>
    )
}

export default ComponentHome;