import React from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      {}
      <Image
        source={{ uri: 'https://th.bing.com/th?id=OIP.-5ouA9RTw3KwPhX27qAxrQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2' }} 
        style={styles.logo}
      />
      {}
      <Text style={styles.appName}>Memory Organizer</Text>
      {}
      <ActivityIndicator size="large" color="#6200ee" style={styles.loader} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6200ee',
    marginBottom: 20,
  },
  loader: {
    marginTop: 10,
  },
});

export default SplashScreen;
