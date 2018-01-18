/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    Dimensions,
    FlatList
} from 'react-native';

const photos = [
    {id: 1, user: 'Rafael'},
    {id: 2, user: "Jorge"},
    {id: 3, user: 'Irineu'}
];

const {width} = Dimensions.get('screen');

export default class App extends Component {
    render() {
        return (
            <FlatList style={{marginTop: 20}}
                      keyExtractor={item => item.id}
                      data={photos}
                      renderItem={({item}) =>
                          <View>
                              <Text>{item.user}</Text>
                              <Image source={require('./resources/images/instaPic.jpg')}
                                     style={{width: width, height: width}}/>
                          </View>
                      }/>
        );
    }
}
