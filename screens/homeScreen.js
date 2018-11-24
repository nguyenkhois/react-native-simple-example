import React from 'react';
import { Text, View, TextInput, FlatList } from 'react-native';

import styles from '../styles';

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            userInput: ''
        };
    }

    handleSubmitEditing = () => {
        this.setState({
            todos: [
                ...this.state.todos,
                this.state.userInput
            ],
            userInput: ''
        });

        console.log('The local state here', this.state); // Using for testing
    }

    render() {
        const { todos, userInput } = this.state;
        
        return (
            <View>

                <TextInput
                    style={styles.inputText}
                    keyboardType="default"
                    returnKeyType="done"
                    onChangeText={(userInput) => this.setState({ userInput })}
                    onSubmitEditing={this.handleSubmitEditing}
                    value={userInput}
                    placeholder="Type your text here"
                    blurOnSubmit={false}
                />

                <FlatList
                    data={todos}
                    renderItem={({ item }) => 
                        <View>
                            <Text style={styles.listItem}>{item}</Text>
                        </View>                        
                    }
                    keyExtractor={(item, index) => index.toString()}
                />

            </View>
        );
    }
}