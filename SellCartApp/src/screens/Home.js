import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Memory Organizer</Text>
      
      {/* Subtitle */}
      <Text style={styles.subtitle}>
        Cherish and organize your precious memories effortlessly. Keep your favorite moments alive in one place.
      </Text>
      
      {/* Images */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://th.bing.com/th/id/OIP.pHQpYsobUSr4u5HN6_2aAwHaD4?rs=1&pid=ImgDetMain' }}
          style={styles.image}
        />
        <Image
          source={{ uri: 'https://image.freepik.com/free-photo/portrait-two-young-friends-taking-selfie-while-standing-outdoors-street_58466-14618.jpg' }}
          style={styles.image}
        />
        <Image
          source={{ uri: 'https://th.bing.com/th/id/R.c739f9ec5fc588cb9fa416854f813ebf?rik=MInDGCxBtH7vrQ&pid=ImgRaw&r=0' }}
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
    justifyContent: 'center', // Center all content vertically
    alignItems: 'center', // Center all content horizontally
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
    justifyContent: 'center', // Align images in the center
    alignItems: 'center', // Ensure images are vertically aligned
    flexWrap: 'wrap', // Allow wrapping of images if the screen is small
    marginTop: 20,
  },
  image: {
    width: 120, // Adjust width for better responsiveness
    height: 120, // Adjust height to maintain aspect ratio
    borderRadius: 12,
    margin: 10, // Add spacing between images
    backgroundColor: '#ddd',
  },
});

export default Home;
