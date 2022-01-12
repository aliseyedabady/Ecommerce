import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors, widthPercent} from '../Utils';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation, useRoute} from '@react-navigation/native';

const Index = ({children}) => {
  const navigation = useNavigation();
  const [show, setshow] = useState(false);
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
        {!show && (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Octicons
              size={widthPercent(6)}
              color={Colors.gray}
              name="three-bars"
            />
          </TouchableOpacity>
        )}

        {show && (
          <TextInput
            style={{
              backgroundColor: Colors.white,
              flex: 1,
              paddingVertical: widthPercent(2),
              borderRadius: 15,
              paddingHorizontal: widthPercent(2),
            }}
          />
        )}
        <TouchableOpacity
          onPress={() => {
            setshow(!show);
          }}
          style={{
            marginLeft: widthPercent(2),
          }}>
          <AntDesign
            size={widthPercent(6)}
            color={Colors.gray}
            name="search1"
          />
        </TouchableOpacity>
      </View>
      {children}
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({});
