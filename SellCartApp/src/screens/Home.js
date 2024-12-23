import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      {}
      <Text style={styles.title}>The Furniture Market</Text>
      
      {}
      <Text style={styles.subtitle}>
      Giving Furniture a Second Chance, and Your Home a New Story!
      </Text>
      
      {}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://i.pinimg.com/originals/64/ca/e4/64cae4a7acdcc8063741be1c1060e3db.jpg' }}
          style={styles.image}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#6200ee',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 22,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'center',
    flexWrap: 'wrap', 
    marginTop: 20,
  },
  image: {
    width: 120, 
    height: 120,
    borderRadius: 12,
    margin: 10, 
    backgroundColor: '#ddd',
  },
});

export default Home;
