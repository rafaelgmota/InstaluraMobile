import React from 'react';
import {
    FlatList,
    StyleSheet,
} from 'react-native';
import Post from "./src/components/Post";

const photos = [
    {id: 1, user: 'Rafael'},
    {id: 2, user: "Jorge"},
    {id: 3, user: 'Irineu'},
];

export default class App extends React.Component {
    render() {
        return (
            <FlatList style={styles.container}
                      keyExtractor={item => item.id}
                      data={photos}
                      renderItem={({item}) =>
                          <Post item={item}/>
                      }/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
});
