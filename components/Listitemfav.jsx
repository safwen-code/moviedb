//v1
import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {getimage} from '../utils/tdbmApi';

const Listitemfav = ({film, onRemove}) => {
  const handleRemove = () => {
    onRemove(film);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          console.log('hi');
        }}
      >
        <Image
          style={styles.image}
          source={{uri: getimage(film.poster_path)}}
        />
        <TouchableOpacity onPress={handleRemove} style={styles.removeButton}>
          <Text style={styles.removeButtonText}>Remove</Text>
        </TouchableOpacity>
        <Text>{film.original_title}</Text>
        <Text>{film.vote_average}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 20,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 10,
    borderRadius: 8,
  },
  removeButton: {
    backgroundColor: '#ff0000',
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  removeButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  rating: {
    fontSize: 14,
    color: '#888888',
  },
});
export default Listitemfav;
