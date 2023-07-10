//v1
import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {getimage} from '../utils/tdbmApi';

const Testfilmlte = ({film, navigation, Listfav, setListfav, addfavorie}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('detail', {
            idFilm: film.id,
            Listfav,
            setListfav,
          });
        }}
      >
        <Image
          style={styles.image}
          source={{uri: getimage(film.poster_path)}}
        />
        <Text>{film.original_title}</Text>
        <Text>{film.vote_average}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    margin: 5,
    backgroundColor: 'gray',
  },
});
export default Testfilmlte;
