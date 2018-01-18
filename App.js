/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
    Text,
    View,
    Image,
    Dimensions,
    FlatList,
    StyleSheet,
} from 'react-native';

const photos = [
    {id: 1, user: 'Rafael'},
    {id: 2, user: "Jorge"},
    {id: 3, user: 'Irineu'},
];

const {width} = Dimensions.get('screen');

export default class App extends React.Component {
    render() {
        return (
            <FlatList style={styles.container}
                      keyExtractor={item => item.id}
                      data={photos}
                      renderItem={({item}) =>
                          <View>
                              <View style={styles.postHeader}>
                                  <Image source={require('./resources/images/instaPic.jpg')}
                                         style={styles.profilePicture}/>
                                  <Text>{item.user}</Text>
                              </View>
                              <Image source={require('./resources/images/instaPic.jpg')}
                                     style={styles.postPicture}/>
                          </View>
                      }/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    postHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
    },
    profilePicture: {
        width: 40,
        height: 40,
        marginRight: 10,
        borderRadius: 20,
    },
    postPicture: {
      width: width,
      height: width,
    },
});
