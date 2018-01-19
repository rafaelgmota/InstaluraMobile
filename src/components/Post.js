import React from 'react';
import {
    Text,
    View,
    Image,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

const {width} = Dimensions.get('screen');

export default class Post extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            post: this.props.post,
        };

        this.like = this.like.bind(this);
    }

    like() {
        const updatedPost = {
            ...this.state.post,
            likeada: !this.state.post.likeada,
        };
        this.setState({post: updatedPost});
    }

    loadLike(liked) {
        return liked ? require('../../resources/images/s2-checked.png')
            : require('../../resources/images/s2.png');
    }

    render() {
        const {post} = this.state;
        return (
            <View>
                <View style={styles.postHeader}>
                    <Image source={{uri: post.urlPerfil}} style={styles.profilePicture}/>
                    <Text>{post.loginUsuario}</Text>
                </View>
                <Image source={{uri: post.urlFoto}} style={styles.postPicture}/>

                <View style={styles.footer}>
                    <TouchableOpacity onPress={this.like}>
                        <Image source={this.loadLike(post.likeada)} style={styles.likeImage}/>
                    </TouchableOpacity>
                </View>
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
    footer: {
        margin: 10,
    },
    likeImage: {
        width: 40,
        height: 40,
    },
});