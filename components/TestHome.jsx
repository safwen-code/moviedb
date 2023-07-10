import React, {useState, useEffect} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import Testfilmlte from './TestfilmIte';
import TestSearch from './TestSearch';
import {getMovie} from '../Actions/movieaction';
import {connect} from 'react-redux';

const TestHome = ({navigation, Listfav, setListfav, movies, getMovie}) => {
  // const [movies, setMovies] = useState([]);

  // useEffect hook to fetch movie data done
  useEffect(() => {
    // Fetch movie data here
    // fetchMovies();
    getMovie();
  }, [getMovie]);
  // console.log('list movies', movies);

  const [Textsearch, setTextsearch] = useState('');
  const [filteredFilms, setFilteredFilms] = useState(movies); // Initialize with original film list
  //console.log(Textsearch);
  // get most rated movie
  const fetchMovies = async () => {
    const cleapi = 'ca7772cab3600a541ec81c6af24f6645';

    // Make API request or fetch data from your desired source
    let apiUrl =
      'https://api.themoviedb.org/3/movie/top_rated?api_key=' + cleapi;
    const response = await fetch(apiUrl);
    const data = await response.json();
    // Set the movie data in the state
    setMovies(data.results);
    setFilteredFilms(data.results);
    //console.log(movies);
  };

  //search by title
  const handleSearch = text => {
    if (movies.length > 0) {
      const filtered = movies.filter(film =>
        film.original_title.toLowerCase().includes(text.toLowerCase()),
      );
      setFilteredFilms(filtered);
    }
  };

  return (
    <View style={{flex: 1}}>
      <View style={styles.search}>
        <TouchableOpacity onPress={() => navigation.navigate('listfavories')}>
          <Image
            style={styles.favorite_container}
            source={require('../Images/favorite.png')}
          />
        </TouchableOpacity>

        <TestSearch
          Textsearch={Textsearch}
          setTextsearch={setTextsearch}
          handleSearch={handleSearch}
        />
        <View style={styles.Flat}>
          <FlatList
            data={
              movies.length > 0 && Textsearch == '' ? movies : filteredFilms
            }
            // data={movies}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <Testfilmlte
                navigation={navigation}
                film={item}
                Listfav={Listfav}
                setListfav={setListfav}
              />
            )}
            columnWrapperStyle={styles.columnWrapper}
            numColumns={2} // Set the number of columns to 2
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  search: {
    flex: 1,

    height: '100px',
    justifyContent: 'space-around',
  },
  Flat: {
    flex: 2,

    margin: 10,
  },
  columnWrapper: {
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  favorite_container: {
    margin: 10,
    width: 30,
    height: 30,
    alignSelf: 'flex-end',
  },
});
const mapStateToProps = state => ({
  movies: state.movies,
});
export default connect(mapStateToProps, {getMovie})(TestHome);
