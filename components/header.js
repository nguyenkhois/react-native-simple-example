import React from 'react';
import { View, Text, StatusBar } from 'react-native';

import styles from '../styles';

export default class Header extends React.Component {
    
    render(){
        return(
            <View style={styles.topPart}>
                <StatusBar
                    barStyle="dark-content"
                />

                <View style={styles.header}>
                    <Text style={styles.headerText}>THE SIMPLE EXAMPLE</Text>
                </View>
            </View>
        );
    }
}