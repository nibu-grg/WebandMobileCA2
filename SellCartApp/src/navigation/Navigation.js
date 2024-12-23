import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

// Import screens
import Home from '../screens/Home';
import AddFurniture from '../screens/AddFurniture';
import ViewAllFurniture from '../screens/ViewAllFurniture';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'AddFurniture') {
              iconName = focused ? 'add-circle' : 'add-circle-outline';
            } else if (route.name === 'ViewAllFurniture') {
              iconName = focused ? 'list' : 'list-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="AddFurniture" component={AddFurniture} />
        <Tab.Screen name="ViewAllFurniture" component={ViewAllFurniture} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
