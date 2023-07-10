//version 1
import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Text} from 'react-native';

const TestSearch = ({Textsearch, setTextsearch, handleSearch}) => {
  const SearchHundel = text => {
    //console.log(Textsearch);
    setTextsearch(text);
    handleSearch(Textsearch);
  };
  return (
    <>
      <TextInput
        style={styles.textinput}
        placeholder="search movies"
        value={Textsearch}
        onChangeText={text => SearchHundel(text)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  main_container: {},
  textinput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 8,
    margin: 10,
  },
});
export default TestSearch;
