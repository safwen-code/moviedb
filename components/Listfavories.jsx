import React, {useState, useEffect} from 'react';
import {View, FlatList, StyleSheet, Text, Image} from 'react-native';
import Listitemfav from './Listitemfav';
import {getimage} from '../utils/tdbmApi';

const Listfavories = ({route, navigation, Listfav, setListfav}) => {
  useEffect(() => {
    if (route.params !== undefined) {
      const {filmfav} = route.params;
      setListfav(prevListfav => [...prevListfav, filmfav]);
    }
  }, [route.params, setListfav]);
  const handleRemove = film => {
    console.log(film.id);
    // Perform removal logic here
    const updatedList = Listfav.filter(item => item.id !== film.id);
    setListfav(updatedList);
  };
  return (
    <View style={styles.Flat}>
      {Listfav != undefined && Listfav.length >= 0 ? (
        <FlatList
          data={Listfav}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <Listitemfav
              film={item}
              navigation={navigation}
              onRemove={handleRemove}
            />
          )}
        />
      ) : (
        <>
          <Text>no data</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  Flat: {
    flex: 2,
    margin: 10,
  },
  columnWrapper: {
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 10,
    margin: 10,
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  rating: {
    fontSize: 16,
    color: '#888888',
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Listfavories;
