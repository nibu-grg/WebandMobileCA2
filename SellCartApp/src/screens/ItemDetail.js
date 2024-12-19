import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ItemDetail = ({ route, navigation }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Item Details</Text>
      
      <Text style={styles.name}>Name: {item.name}</Text>
      
      <Image source={{ uri: item.image }} style={styles.image} />
      
      {/* Location Display */}
      <Text style={styles.location}>Location: {item.location}</Text>
      
      <Text style={styles.text}>Description: {item.description}</Text>

      <TouchableOpacity
        style={styles.goBackButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.goBackText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6200ee',
    marginBottom: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 8,
    marginBottom: 20,
  },
  location: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
  },
  goBackButton: {
    backgroundColor: '#6200ee',
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  goBackText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ItemDetail;
