import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Peliculas from '../Screens/peliculas';
import Series from '../Screens/series';
import Proximamente from '../Screens/proximamente';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
export default function Navigation() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'peli') {
            iconName = focused ? 'film' : 'film';
          } else if (route.name === 'serie') {
            iconName = focused ? 'tv' : 'tv';
          } else if (route.name === 'proximo') {
            iconName = focused ? 'hourglass-o' : 'hourglass-o';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="peli"
        component={Peliculas}
        options={{title: 'Peliculas'}}
      />
      <Tab.Screen name="serie" component={Series} options={{title: 'Series'}} />
      <Tab.Screen
        name="proximo"
        component={Proximamente}
        options={{title: 'Proximamente'}}
      />
    </Tab.Navigator>
  );
}
