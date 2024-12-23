import React from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://th.bing.com/th/id/R.b027a9cf5d9b89f18928323c6b7ef918?rik=ra5c2%2bvtm69j8A&riu=http%3a%2f%2fwww.theinhome.com%2ffurniture-consignment%2fconsignment-furniture-6.jpg&ehk=9vncC3xuOaPZe%2bKu%2fMIoCFGoal6VoO%2fVCe6L8veIzQc%3d&risl=&pid=ImgRaw&r=0' }}
        style={styles.image}
      />
      <View style={styles.overlay}>
        <Text style={styles.appName}>The Furniture Market</Text>
        <Text style={styles.description}>Discover pre-loved furniture with a new purpose</Text>
        <ActivityIndicator size="large" color="#fff" style={styles.loader} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -150 }, { translateY: -50 }],
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  appName: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  loader: {
    marginTop: 10,
  },
});

export default SplashScreen;
