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
        //height: layout.window.height - 50,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 110
    },
    bottomPart: {
        //flex: 3,
        flexDirection: 'row',
        height: 50,
        backgroundColor: 'steelblue',
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
        marginTop: 20,
        marginBottom: 20,
        fontSize: 20,
        paddingLeft: 10
    },
    listItem: {
        marginBottom: 20,
        fontSize: 20
    }
});