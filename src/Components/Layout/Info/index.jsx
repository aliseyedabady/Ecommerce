import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors, widthPercent} from '../../Utils/index';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation, useRoute} from '@react-navigation/native';

const Index = ({children, title}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.themeColor,
        paddingTop: widthPercent(12),
        paddingHorizontal: widthPercent(5),
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: widthPercent(2),
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={widthPercent(5)} />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: widthPercent(5),
          }}>
          {title}
        </Text>
      </View>
      {children}
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({});
