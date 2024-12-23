import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { AppProvider } from './src/context/AppContext';
import Home from './src/screens/Home';
import AddFurniture from './src/screens/AddFurniture';
import ViewAllFurniture from './src/screens/ViewAllFurniture';
import FurnitureDetail from './src/screens/FurnitureDetail';
import SplashScreen from './src/screens/SplashScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const ViewAllFurnitureStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="ViewAllFurniture" component={ViewAllFurniture} />
    <Stack.Screen name="FurnitureDetail" component={FurnitureDetail} />
  </Stack.Navigator>
);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading time of 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  if (isLoading) {
    return <SplashScreen />; // Show Splash Screen during loading
  }

  return (
    <AppProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = 'home';
              } else if (route.name === 'AddFurniture') {
                iconName = 'add-circle';
              } else if (route.name === 'ViewFurniture') {
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
          <Tab.Screen name="AddFurniture" component={AddFurniture} />
          <Tab.Screen name="ViewFurniture" component={ViewAllFurnitureStack} />
        </Tab.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
