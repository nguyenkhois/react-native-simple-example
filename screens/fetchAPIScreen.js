import React from 'react';
import { View, Text, Image } from 'react-native';

import { APIConfig } from '../appConfig';

import styles from '../styles';

export default class FetchAPIScreen  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productList: [],
            categoryList: [],
            errorInfo: '',
        };
    }

    async componentDidMount(){
        await fetch(APIConfig.products)
            .then(response => response.json())
            .then(data => {
                this.setState({ productList: data });
            })
            .catch(error => this.setState({ errorInfo: error }));
    }

    render() {
        if (this.state.productList.length > 0){
            return (

                <View>
                    {this.state.productList.map((product, index) => 
                        <View key={index} style={styles.productItemContainer}>
                            <Image source={{uri: APIConfig.imageURL + product.image.url}}
                                style={{width: 87, height: 87, marginRight: 10}} />
                            
                            <View>
                                <Text style={styles.productItemName}>
                                    {product.name}
                                </Text>
                                <Text>
                                    {product.description}
                                </Text>
                                <Text style={styles.productItemPrice}>
                                    {product.price} :-
                                </Text>
                            </View>
                            
                        </View>
                    )}

                    {this.state.categoryList.map((category, index) =>
                        <Text key={index}>
                            {category.name}
                        </Text>
                    )}
                </View>

            );
        } else {
            return (
                <Text>
                    {JSON.stringify(this.state.errorInfo)}
                </Text>
            );
        }        
    }
}
