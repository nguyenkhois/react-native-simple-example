import React from 'react';
import { Text, View } from 'react-native';

import styles from '../styles';

export default class AboutScreen extends React.Component {
    render(){
        return(
            <View>
                <Text style={styles.aboutSection}>
                    The simple React Native example is using Expo. You can view the online demo on Expo or the source on GitHub.
                </Text>

                <Text style={styles.aboutSection}>
                    You can view more information in the /README.md file.
                </Text>

                <Text style={styles.aboutSection}>
                    Thanks for your visit! (^_^)
                </Text>
            </View>
        );
    }
}