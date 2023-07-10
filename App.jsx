/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import Store from './store';

import TestHome from './components/TestHome';
import DetailFilm from './components/DetailFilm';
import Listfavories from './components/Listfavories';

const Stack = createNativeStackNavigator();
const App = () => {
  const [Listfav, setListfav] = useState('');
  return (
    <>
      <Provider store={Store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home">
              {props => (
                <TestHome
                  {...props}
                  Listfav={Listfav}
                  setListfav={setListfav}
                />
              )}
            </Stack.Screen>
            <Stack.Screen name="detail" component={DetailFilm} />
            <Stack.Screen name="listfavories">
              {props => (
                <Listfavories
                  {...props}
                  Listfav={Listfav}
                  setListfav={setListfav}
                />
              )}
            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/* <Home /> */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default App;
