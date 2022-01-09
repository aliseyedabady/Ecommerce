import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import Layout from '../../../Components/Layout';
import {Colors, widthPercent} from '../../../Components/Utils';
import Carousel from 'react-native-snap-carousel';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
// Entypo EvilIcons
const index = ({navigation}) => {
  const [state, setstate] = useState('Popular');
  return (
    <Layout style={{}}>
      <View
        style={{
          marginTop: widthPercent(8),
        }}>
        <Text
          style={{
            color: Colors.blackText,
            fontSize: widthPercent(8),
            fontWeight: '700',
          }}>
          Delicious Seafood
        </Text>
        <Text
          style={{
            color: Colors.lightText,
            fontSize: widthPercent(4),
            fontWeight: '500',
            marginTop: widthPercent(4),
          }}>
          We made Heathy seafood for you
        </Text>
      </View>
      <View>
        <ScrollView horizontal={true}>
          <View
            style={{
              flexDirection: 'row',
              // marginTop: widthPercent(8),
              paddingVertical: widthPercent(5),
            }}>
            {['Popular', 'Prawns', 'Fish', 'Cream'].map(element => {
              return (
                <TouchableOpacity
                  onPress={() => setstate(element)}
                  style={{
                    backgroundColor:
                      element == state ? Colors.black : Colors.light,
                    paddingVertical: widthPercent(3),
                    paddingHorizontal: widthPercent(6),
                    marginRight: widthPercent(4),
                    borderRadius: widthPercent(7),
                  }}>
                  <Text
                    style={{
                      color: element == state ? Colors.white : Colors.black,
                    }}>
                    {element}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
        <View
          style={{
            flexDirection: 'row',
            marginTop: widthPercent(20),
          }}>
          {[
            {
              title: 'Fired Prawns',
              text: 'Lorem Ipsum is simply',
              price: '$12.00',
              image: require('./1.png'),
              message:
                "I use React Navigation with Redux in React Native. Navigation is working fine, but on one screen the goBack() function doesn't work. Can you tell we why?",
            },
            {
              title: 'Fired Prawns',
              text: 'Lorem Ipsum is simply',
              price: '$12.00',
              image: require('./2.png'),
              message:
                'Im trying to figure how to retrieve min/max values, min/max dates from a datasets but ALSO the date value that corresponds to each min/max value.',
            },
          ].map(item => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate('Single', {data: item})}
                style={{
                  backgroundColor: Colors.white,
                  flex: 1,
                  marginHorizontal: widthPercent(2),
                  borderRadius: widthPercent(6),
                  padding: widthPercent(4),
                  paddingTop: widthPercent(20),
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'absolute',
                    bottom: 140,
                    left: 15,
                  }}>
                  <Image
                    source={item.image}
                    style={{
                      width: widthPercent(36),
                      height: widthPercent(36),
                    }}
                  />
                </View>
                <View>
                  <Text
                    style={{
                      color: Colors.blackText,
                      fontSize: widthPercent(4),
                      fontWeight: '600',
                    }}>
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      color: Colors.lightText,
                      fontSize: widthPercent(3),
                      marginTop: widthPercent(2),
                    }}>
                    {item.text}
                  </Text>
                  <Text
                    style={{
                      marginTop: widthPercent(2.8),
                      fontWeight: '600',
                    }}>
                    {item.price}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: widthPercent(4),
                  }}>
                  <TouchableOpacity
                    style={{
                      width: widthPercent(6),
                      height: widthPercent(6),
                      backgroundColor: Colors.black,
                      borderRadius: widthPercent(3),
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <AntDesign
                      name="plus"
                      color={Colors.white}
                      size={widthPercent(4)}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      width: widthPercent(6),
                      height: widthPercent(6),
                      backgroundColor: '#F9F7F8',
                      borderRadius: widthPercent(3),
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <EvilIcons name="heart" size={widthPercent(6)} />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
        <View>
          <View
            style={{
              backgroundColor: Colors.white,
              flexDirection: 'row',
              marginTop: widthPercent(10),
              borderRadius: widthPercent(6),
              paddingVertical: widthPercent(2),
              paddingHorizontal: widthPercent(4),
            }}>
            <View>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  style={{
                    width: widthPercent(7),
                    height: widthPercent(7),
                    backgroundColor: '#F9F7F8',
                    borderRadius: widthPercent(3.5),
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <EvilIcons name="heart" size={widthPercent(6)} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: widthPercent(6),
                    height: widthPercent(6),
                    backgroundColor: Colors.black,
                    borderRadius: widthPercent(3),
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: widthPercent(2),
                  }}>
                  <AntDesign
                    name="plus"
                    color={Colors.white}
                    size={widthPercent(4)}
                  />
                </TouchableOpacity>
              </View>
              <View>
                <Text
                  style={{
                    color: Colors.blackText,
                    fontSize: widthPercent(4),
                    fontWeight: '600',
                    marginTop: widthPercent(4),
                  }}>
                  Crayfish as food Beer
                </Text>
                <Text
                  style={{
                    color: Colors.lightText,
                    fontSize: widthPercent(3),
                    marginTop: widthPercent(2),
                  }}>
                  {'Lorem Ipsum is simply'}
                </Text>
                <Text
                  style={{
                    marginTop: widthPercent(2.8),
                    fontWeight: '600',
                  }}>
                  $22.00
                </Text>
              </View>
            </View>
            <View>
              <Image
                style={{
                  width: widthPercent(40),
                  height: widthPercent(40),
                }}
                source={require('./3.png')}
              />
            </View>
          </View>
        </View>
      </View>
    </Layout>
  );
};

export default index;

const styles = StyleSheet.create({});
