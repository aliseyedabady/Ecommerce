import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Layout from '../../../Components/Layout/Info';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {widthPercent, Colors} from '../../../Components/Utils';

const index = ({route}) => {
  console.log('route : ', route);
  const {data} = route.params;
  return (
    <Layout title={data.title}>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Image
          source={data.image}
          style={{
            width: widthPercent(90),
            height: widthPercent(80),
          }}
        />
      </View>
      <View>
        <Text
          style={{
            color: Colors.blackText,
            fontSize: widthPercent(7),
            fontWeight: '600',
          }}>
          {data.title}
        </Text>
        <Text
          style={{
            marginTop: widthPercent(3),
            color: Colors.gray,
          }}>
          {data.message}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: widthPercent(3),
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              padding: widthPercent(2),
              backgroundColor: Colors.black,
              borderRadius: widthPercent(1),
            }}>
            <AntDesign
              name="minus"
              size={widthPercent(4)}
              color={Colors.white}
            />
          </TouchableOpacity>
          <Text style={{marginHorizontal: widthPercent(2)}}>01</Text>
          <TouchableOpacity
            style={{
              padding: widthPercent(2),
              backgroundColor: Colors.black,
              borderRadius: widthPercent(1),
            }}>
            <AntDesign
              name="plus"
              size={widthPercent(4)}
              color={Colors.white}
            />
            {/* minus */}
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: widthPercent(3),
          }}>
          <Text style={{marginRight: widthPercent(3)}}>Delivered In</Text>
          <AntDesign
            name="clockcircleo"
            size={widthPercent(4)}
            style={{marginRight: widthPercent(1.8)}}
          />
          <View>
            <Text>28 Min</Text>
          </View>
        </View>
      </View>
    </Layout>
  );
};

export default index;

const styles = StyleSheet.create({});
