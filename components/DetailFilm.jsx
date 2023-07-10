import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {getFilmDetail, getimage} from '../utils/tdbmApi';
import {connect} from 'react-redux';
import {getFilm, addfavorie, listfavorie} from '../Actions/movieaction';
import moment from 'moment';
import StarRating from 'react-native-star-rating-widget';

const DetailFilm = ({
  navigation,
  Listfav,
  route,
  film,
  getFilm,
  addfavorie,
  listfavorie,
}) => {
  // const [film, setfilm] = useState();
  const [loading, setloading] = useState(true);

  //id film
  // const {idFilm, Listfav} = route.params;
  const {idFilm} = route.params;
  console.log(idFilm);
  //console.log('hi detail film', route);
  useEffect(() => {
    // getFilmDetail(idFilm).then(data => {
    //   setfilm(data);
    //   setloading(false);
    // });
    getFilm(idFilm);
    setloading(false);
    listfavorie();
  }, []);

  //create a spinner for loading data
  const displaydata = () => {
    // Si Loading is true,  affiche spinner
    if (loading) {
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
  };

  //affiche detail film
  const filmdetailHundler = () => {
    //console.log(film);
    if (film != undefined) {
      return (
        <ScrollView style={styles.scrollview_container}>
          <TouchableOpacity
            onPress={() => {
              addfavorie(film);
              // const updatedListfav = [...Listfav, film];
              console.log('deatil');
              console.log('listfav', Listfav);
              navigation.navigate('listfavories', {
                filmfav: film,
                // Listfav: updatedListfav,
              });
            }}
          >
            <Image
              style={styles.favorite_container}
              source={require('../Images/favorie.png')}
            />
          </TouchableOpacity>

          <Image
            style={styles.image}
            source={{uri: getimage(film.backdrop_path)}}
          />

          <Text style={styles.default_text}>
            {film.title}
            <StarRating
              style={{alignItems: 'flex-end'}}
              rating={film.vote_average}
              starSize={15}
            />{' '}
          </Text>

          <Text style={styles.default_text}>
            Sorti le {moment(new Date(film.release_date)).format('DD/MM/YYYY')}
          </Text>
          <Text style={styles.default_text}>
            Genre(s) :{' '}
            {film.genres
              .map(function (genre) {
                return genre.name;
              })
              .join(' / ')}
          </Text>

          <Text style={styles.description_text}>{film.overview}</Text>
        </ScrollView>
      );
    }
  };
  return (
    <View style={styles.main_container}>
      {displaydata()}
      {filmdetailHundler()}
    </View>
  );
};

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
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
  scrollview_container: {
    flex: 1,
  },
  image: {
    height: 169,
    marginTop: 20,
    margin: 5,
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666',
    margin: 5,
    marginBottom: 15,
  },
  default_text: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
  },
  stylecon: {
    flexDirection: 'row',
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
  film: state.film,
  Listfav: state.Listfav,
});
export default connect(mapStateToProps, {getFilm, addfavorie, listfavorie})(
  DetailFilm,
);
