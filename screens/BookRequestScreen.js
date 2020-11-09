import React, { Component } from 'react';
import { Text, View, TextInput, KeyboardAvoidingView, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import MyHeader from '../Components/MyHeader';
import firebase from 'firebase';
import db from '../config';

export default class RequestBookScreen extends Component {
    constructor() {
        super();
        this.state = {
            userId: firebase.auth().currentUser.email,
            bookName: '',
            reasonToRequest: '',
            description: ''
        }
    }

    createUniqueId() {
        return Math.random().toString(36).substring(7);
    }

    addRequest = (bookName, reasonToRequest) => {
        var userId = this.state.userId
        var randomRequestId = this.createUniqueId()
        db.collection('requested_books').add({
            "user_id": userId,
            "book_name": bookName,
            "reason_to_request": reasonToRequest,
            "request_id": randomRequestId,
        })

        this.setState({
            bookName: '',
            reasonToRequest: ''
        })

        return Alert.alert("Book Requested Successfully")
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <MyHeader title='REQUEST BOOK' />
                <KeyboardAvoidingView style={styles.keyboardStyle}>
                    <TextInput
                        style={styles.formTextInput}
                        placeholder={'ENTER BOOK NAME'}
                        onChangeText={(text) => {
                            this.setState({
                                bookName: text
                            })
                        }}
                        value={this.state.bookName} />
                    <TextInput style={[styles.formTextInput, { height: 300 }]}
                        multilinenumberOfLines={8}
                        placeholder={'WHY DO YOU NEED THE BOOK?'}
                        onChangeText={(text) => {
                            this.setState({
                                description: text
                            })
                        }}
                        value={this.state.description}
                    />
                    <TouchableOpacity style={styles.button}
                        onPress={() => {
                            this.addRequest(this.state.bookName, this.state.reasonToRequest)
                        }}                    >
                        <Text> REQUEST </Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>

        );
    }
}



const styles = StyleSheet.create({
    keyBoardStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    formTextInput: {
        width: "75%",
        height: 35,
        alignSelf: 'center',
        borderColor: '#ffab91',
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 20,
        padding: 10,
    },
    button: {
        width: "75%",
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: "#ff5722",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16,
        marginTop: 20
    },
}
)
