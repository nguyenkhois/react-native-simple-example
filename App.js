import React from 'react';
import { View, ScrollView, AppRegistry } from 'react-native';
import { NativeRouter, Route} from "react-router-native";

import Header from './components/header';
import Footer from './components/footer';

import HomeScreen from './screens/homeScreen';
import FetchAPIScreen from './screens/fetchAPIScreen';
import AboutScreen from './screens/aboutScreen';

import styles from './styles';

export default class App extends React.Component {
    render() {
        return (
            <NativeRouter>
                <View style={styles.container}>
                    <Header />

                    <View style={styles.bodyPart}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <Route exact path="/" component={HomeScreen} />
                            <Route path="/fetch" component={FetchAPIScreen} />
                            <Route path="/about" component={AboutScreen} />
                        </ScrollView>
                    </View>

                    <Footer />
                </View>
            </NativeRouter>
            
        );
    }
}

AppRegistry.registerComponent("MyApp", () => App);