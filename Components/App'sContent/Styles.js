import {
    StyleSheet,
    Dimensions,
    Platform
} from 'react-native'
// import { Button } from 'react-native-paper';
import Colors from '../GlobalStyles/colors';
const WindowWidth = Dimensions.get('screen').width
const WindowHeight = Dimensions.get('screen').height;
const styles = StyleSheet.create({
    Container: {
        width: WindowWidth,
        height: WindowHeight,
        backgroundColor: Colors.BgColor,
        paddingTop: Platform.OS === "ios"?30:0,
        // alignItems: "center",

    },

    LowerCart: {
        width: WindowWidth,
        height: WindowHeight / 1.1,
        backgroundColor: Colors.BgColor,
        borderRadius: 20,
        borderWidth: 0.9,
        borderColor: Colors.PrimaryColor,
        marginTop:15
    },
    InnerLowerCart: {
        width: WindowWidth/1.1,
        height: WindowHeight / 1.45,
        alignSelf:'center',
        // backgroundColor:'yellow'
    },
    L_Cart_Title: {
        color: Colors.FontColorI,
        fontWeight: 'bold',
        // margin: 25,
        // marginBottom: 10,
        fontSize: 18
    },
    HeaderTitle: {
        color: Colors.FontColorI,
        fontWeight: 'bold',
        fontSize: 30
    },
    ButtonsCart:{
        width:WindowWidth/1.1,
        flexDirection:'row',
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'space-around',
        marginTop:10
    },
    textStyle: {
        fontSize: 16,
        color: Colors.FontColorI,
        marginBottom: 10,
        lineHeight: 22,
      },
      headerStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.FontColorI,
        marginTop: 20,
        marginBottom: 10,
      },
      subHeaderStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.FontColorI,
        marginTop: 10,
        marginBottom: 5,
      },


});

export default styles