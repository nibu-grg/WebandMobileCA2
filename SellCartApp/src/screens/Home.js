import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://cdn.pixabay.com/photo/2017/01/22/19/44/shopping-2003173_960_720.png',
        }}
        style={styles.image}
      />
      <Text style={styles.title}>Welcome to SellCart</Text>
      <Text style={styles.description}>
        Your one-stop solution to buy and sell items. Add your items, explore the marketplace, and shop seamlessly!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
  },
});

export default Home;
