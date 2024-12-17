import React, { useState, useContext, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  Modal,
  Button,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { AppContext } from '../context/AppContext';
import * as Location from 'expo-location';
import { Camera } from 'expo-camera';

const AddItem = ({ navigation }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState(null);
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [cameraRef, setCameraRef] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const { addItem } = useContext(AppContext);

  // Request camera and gallery permissions
  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted' && galleryStatus.status === 'granted');
    })();
  }, []);

  const pickImageFromGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (result.assets && result.assets.length > 0) {
      setImage(result.assets[0].uri);
    }
    setShowModal(false);
  };

  const openCamera = () => {
    setIsCameraOpen(true);
    setShowModal(false);
  };

  const takePicture = async () => {
    if (cameraRef) {
      const data = await cameraRef.takePictureAsync();
      setImage(data.uri);
      setIsCameraOpen(false); // Close camera after picture is taken
    }
  };

  const getLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Denied', 'We need location permissions to proceed.');
      return;
    }

    const currentLocation = await Location.getCurrentPositionAsync({});
    const { latitude, longitude } = currentLocation.coords;

    // Use reverse geocoding to get the address
    const geoResults = await Location.reverseGeocodeAsync({ latitude, longitude });
    if (geoResults && geoResults.length > 0) {
      setLocation(geoResults[0].city || geoResults[0].region || geoResults[0].name);
    } else {
      Alert.alert('Error', 'Unable to get location name.');
    }
  };

  const handleSubmit = () => {
    // Dismiss keyboard
    Keyboard.dismiss();

    if (!name || !description || !image || !location) {
      Alert.alert('Error', 'Please fill in all fields, add an image, and enable location.');
      return;
    }

    const newItem = { id: Date.now(), name, description, image, location };
    addItem(newItem);
    Alert.alert('Success', 'Item added successfully!', [
      { text: 'OK', onPress: () => navigation.navigate('ViewAllItems') },
    ]);
    setName('');
    setDescription('');
    setImage(null);
    setLocation(null);
  };

  // Handle when camera permission is not granted
  if (hasCameraPermission === null) {
    return <Text>Requesting camera permission...</Text>;
  }

  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Preserve a Memory</Text>

        <TextInput
          style={styles.input}
          placeholder="Pic Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.textArea}
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
          multiline
        />

        <TouchableOpacity style={styles.imagePicker} onPress={() => setShowModal(true)}>
          <Text style={styles.imagePickerText}>Pick an Image</Text>
        </TouchableOpacity>

        {image && <Image source={{ uri: image }} style={styles.image} />}

        <TouchableOpacity style={styles.locationButton} onPress={getLocation}>
          <Text style={styles.locationButtonText}>Get Location</Text>
        </TouchableOpacity>

        {location && <Text style={styles.locationText}>Location: {location}</Text>}

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Add Item</Text>
        </TouchableOpacity>

        {/* Modal for selecting between Camera or Gallery */}
        <Modal visible={showModal} animationType="slide" transparent={true}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Button title="Open Camera" onPress={openCamera} />
              <Button title="Pick Image from Gallery" onPress={pickImageFromGallery} />
              <Button title="Cancel" onPress={() => setShowModal(false)} />
            </View>
          </View>
        </Modal>

        {/* Camera view */}
        {isCameraOpen && (
          <View style={styles.cameraContainer}>
            <Camera style={styles.camera} ref={(ref) => setCameraRef(ref)}>
              <TouchableOpacity onPress={takePicture} style={styles.takePictureButton}>
                <Text style={styles.takePictureText}>Take Picture</Text>
              </TouchableOpacity>
            </Camera>
          </View>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6200ee',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    maxWidth: 400,
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  textArea: {
    width: '100%',
    maxWidth: 400,
    height: 100,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    fontSize: 16,
    textAlignVertical: 'top',
  },
  imagePicker: {
    backgroundColor: '#6200ee',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
    maxWidth: 400,
    marginBottom: 10,
  },
  imagePickerText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  locationButton: {
    backgroundColor: '#6200ee',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
    maxWidth: 400,
    marginBottom: 10,
  },
  locationButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  locationText: {
    fontSize: 16,
    marginBottom: 10,
    color: '#6200ee',
  },
  submitButton: {
    backgroundColor: '#6200ee',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
    maxWidth: 400,
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    width: 300,
    alignItems: 'center',
  },
  cameraContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    width: '100%',
    height: '100%',
  },
  takePictureButton: {
    position: 'absolute',
    bottom: 30,
    left: '40%',
    backgroundColor: '#6200ee',
    padding: 15,
    borderRadius: 50,
  },
  takePictureText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default AddItem;
