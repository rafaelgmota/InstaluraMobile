import React from 'react';
import {
    Text,
    View,
    Image,
    Dimensions,
    StyleSheet,
} from 'react-native';

const {width} = Dimensions.get('screen');

export default class Post extends React.Component {
    render() {
        const {post} = this.props;
        return (
            <View>
                <View style={styles.postHeader}>
                    <Image source={{uri: post.urlPerfil}}
                           style={styles.profilePicture}/>
                    <Text>{post.loginUsuario}</Text>
                </View>
                <Image source={{uri: post.urlFoto}}
                       style={styles.postPicture}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
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