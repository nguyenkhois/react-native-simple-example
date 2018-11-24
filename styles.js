import { StyleSheet } from 'react-native';

import colors from './constants/colors';
import layout from './constants/layout';

export default StyleSheet.create({
    container: {
        //flex: 1,
        height: layout.window.height,
        flexDirection: 'column'        
    },
    topPart: {
        //flex: 1,
        height: 60,
        backgroundColor: colors.mainColor,        
    },
    bodyPart: {
        //flex: 2,
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 110
    },
    bottomPart: {
        //flex: 3,
        flexDirection: 'row',
        height: 50,
        marginTop: 'auto',
        backgroundColor: colors.mainColor,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    header: {
        height: 40,
        marginTop: 'auto',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        //color: '#fff',
        fontWeight: '700',
    },
    inputText: {
        borderRadius: 5,
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1,
        marginBottom: 20,
        fontSize: 20,
        paddingLeft: 10
    },
    listItem: {
        marginBottom: 20,
        fontSize: 20
    },
    mainTitle: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    
    productItemContainer: {
        flexDirection: 'row',
        paddingBottom: 10,
        marginBottom: 20,
        borderColor: '#E8E8E6',
        borderBottomWidth: 1,
    },
    productItemName: {
        fontWeight: '700',
        fontSize: 20,
        marginBottom: 10
    },
    productItemPrice: {
        fontWeight: '700',
        fontSize: 20,
        marginTop: 5
    },
    aboutSection: {
        marginBottom:20
    }
});