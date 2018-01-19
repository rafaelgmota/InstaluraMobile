import React from 'react';
import {
    Text,
    View,
    Image,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    TextInput,
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

        const {likers, likeada} = this.state.post;
        let newList = [];
        if (!likeada) {
            newList = likers.concat({login: 'DummyUser'});
        } else {
            newList = likers.filter(lk => lk.login !== 'DummyUser');
        }

        const updatedPost = {
            ...this.state.post,
            likeada: !this.state.post.likeada,
            likers: newList,
        };
        this.setState({post: updatedPost});
    }

    loadLike(liked) {
        return liked ? require('../../resources/images/s2-checked.png')
            : require('../../resources/images/s2.png');
    }

    showLikes(likers) {
        if (!likers)
            return;

        return (
            <Text style={styles.likes}>
                {`${likers.length} ${likers.length > 1 ? "curtidas" : "curtida"}`}
            </Text>
        );
    }

    showComment(post) {
        if (!post.comentario)
            return;

        return (
            <View style={styles.comment}>
                <Text style={styles.commentTitle}>{post.loginUsuario}</Text>
                <Text>{post.comentario}</Text>
            </View>
        );
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
                    <TouchableOpacity style={styles.likeImage} onPress={this.like}>
                        <Image source={this.loadLike(post.likeada)} style={styles.likeImage}/>
                    </TouchableOpacity>
                </View>
                {this.showLikes(post.likers)}
                {this.showComment(post)}

                {post.comentarios.map(c =>
                    <View key={c.id} style={styles.comment}>
                        <Text style={styles.commentTitle}>{c.login}</Text>
                        <Text>{c.texto}</Text>
                    </View>
                )}

                <View style={styles.newComment}>
                    <TextInput style={styles.input} placeholder="Adicione um comentário..."/>
                    <Image style={styles.sendImage} source={require('../../resources/images/images.png')}/>
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
    likes: {
        fontWeight: 'bold',
        margin: 5,
    },
    comment: {
        flexDirection: 'row',
    },
    commentTitle: {
        fontWeight: 'bold',
        marginRight: 5,
    },
    newComment: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    input: {
        height: 40,
        flex: 1, //To fill available space
    },
    sendImage: {
        height: 30,
        width: 30,
    },
});