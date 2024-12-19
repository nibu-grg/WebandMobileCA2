import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { AppProvider } from './src/context/AppContext';
import AddItem from './src/screens/AddItem';
import ViewAllItems from './src/screens/ViewAllItems';
import ItemDetail from './src/screens/ItemDetail';
import Home from './src/screens/Home';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Stack for View All Items and Item Details
const ViewAllItemsStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="ViewAllItems" component={ViewAllItems} />
    <Stack.Screen name="ItemDetail" component={ItemDetail} />
  </Stack.Navigator>
);

const App = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = 'home';
              } else if (route.name === 'AddItem') {
                iconName = 'add-circle';
              } else if (route.name === 'ViewItems') {
                iconName = 'list';
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#6200ee',
            tabBarInactiveTintColor: 'gray',
            headerShown: false,
          })}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="AddItem" component={AddItem} />
          <Tab.Screen name="ViewItems" component={ViewAllItemsStack} />
        </Tab.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
