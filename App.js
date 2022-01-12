import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./src/Screens/Home/Page"
import CartScreen from "./src/Screens/Cart/Page"
import ProfileScreen from "./src/Screens/Profile/Pages"
import FavoriteScreen from "./src/Screens/Favorite/Pages"
import { Colors, widthPercent } from "./src/Components/Utils"
import Ionicons from "react-native-vector-icons/Ionicons"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import EvilIcons from "react-native-vector-icons/EvilIcons"
import AntDesign from "react-native-vector-icons/AntDesign"
import SingleScreen from "./src/Screens/Single/Page"
import {
  createDrawerNavigator, DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

// FontAwesome EvilIcons


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <>

      <NavigationContainer>
        <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
          <Drawer.Screen options={{ headerShown: false }} name="Home" component={Home} />
          {/* <Drawer.Screen name="Article" component={Article} /> */}
        </Drawer.Navigator>
      </NavigationContainer>

    </>

  );
}
const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ flexDirection: "row", marginHorizontal: widthPercent(4), alignItems: "center" }}>
        <AntDesign name='user' size={widthPercent(6)} />
        <Text>
          Profile
        </Text>
      </View>
    </DrawerContentScrollView>
  );
}
const Home = () => {
  return (
    // <NavigationContainer screenOptions={{ headerShown: false }}  >
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />} initialRouteName='Home' screenOptions={{ headerShown: false }} >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Favorite" component={FavoriteScreen} />
    </Tab.Navigator>
    // </NavigationContainer >
  )
}
const MyTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={{
      flexDirection: "row",
      justifyContent: "center"
    }}>
      <View style={{

        flexDirection: 'row',
        backgroundColor: Colors.black,
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        bottom: 20,
        paddingVertical: 20,
        width: widthPercent(92),
        borderRadius: 24,

      }}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
          const renderIcon = (route) => {
            switch (route) {
              case "Home":
                return <Ionicons name='md-home-outline' size={widthPercent(7)} color={Colors.white} />
              case "Cart":
                return <Ionicons name='cart-outline' size={widthPercent(7)} color={Colors.white} />
              case "Profile":
                return <FontAwesome name='user-o' size={widthPercent(7)} color={Colors.white} />
              // EvilIcons
              case "Favorite":
                return <EvilIcons name='heart' size={widthPercent(10)} color={Colors.white} />

              default:
                break;
            }

          }

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityStates={isFocused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1, alignItems: "center" }}
            >
              {renderIcon(label)}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>

  );
}