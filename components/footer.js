import React from 'react';
import { View, Text } from 'react-native';
import { Link } from "react-router-native";

import styles from '../styles';

export default class Footer extends React.Component {
    
    render(){
        return(
            <View style={styles.bottomPart}>
                <Link to="/" underlayColor="#f0f4f7">
                    <Text>Basic</Text>
                </Link>

                <Link to="/fetch" underlayColor="#f0f4f7">
                    <Text>Fetch API</Text>
                </Link>

                <Link to="/about" underlayColor="#f0f4f7">
                    <Text>About</Text>
                </Link>
            </View>
        );
    }
}