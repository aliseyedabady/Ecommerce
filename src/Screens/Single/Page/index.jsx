import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
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
      </View>
    </Layout>
  );
};

export default index;

const styles = StyleSheet.create({});
