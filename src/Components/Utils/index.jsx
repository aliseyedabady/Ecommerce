import {Dimensions} from 'react-native';
export const Colors = {
  themeColor: '#F2F2F2',
  blackText: '#1F1F1F',
  lightText: '#CECECE',
  black: '#020202',
  white: '#fff',
  gray: '#101010',
  light: '#F5F5F5',
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const widthPercent = width => {
  return width * (windowWidth / 100);
};
