import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView
} from 'react-native';
import { Header, Icon } from 'react-native-elements';

const MyHeader = props => {
    return(
        <Header
         centerComponent = {{text: props.title, style: {color: '#90A589', fontSize: 20, fontWeight: "bold"}}}
         backgroundColor = '#EAF8FE'/>
    );
}

export default MyHeader;