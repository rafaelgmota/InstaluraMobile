import React from 'react';
import {
    FlatList,
    StyleSheet,
} from 'react-native';
import Post from "./src/components/Post";

const path = 'https://instalura-api.herokuapp.com';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            posts: [],
        };
    }

    componentDidMount() {
        fetch(`${path}/api/public/fotos/rafael`)
            .then(response => response.json())
            .then(json => this.setState({posts: json}));
    }

    render() {
        return (
            <FlatList style={styles.container}
                      keyExtractor={item => item.id}
                      data={this.state.posts}
                      renderItem={({item}) =>
                          <Post post={item}/>
                      }/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
});
