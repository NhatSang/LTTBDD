import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
    return ( 
        <View style = { styles.container } >
        <LinearGradient
        // Background Linear Gradient
        colors = {
            ['rgba(0, 204, 249, 0)', 'rgba(0, 204, 249, 0.58)','rgba(0, 204, 249, 0.7)','rgba(0, 204, 249, 0.36)','rgba(0, 204, 249, 1)']
        }
        style = { styles.background }
        />
        <Image source ={require('./assets/Ellipse 8.png')} style={{width:140,height:140}} />
        <Text style={styles.title}> Grow Your Bussiness </Text>
        <Text style={styles.title2}> We will help you to  grow your bussiness using online server </Text>
        <View style = {styles.containerBtn}>
            <Button title='LOGIN' color='rgba(227, 192, 0, 1)' style={styles.btn}/>
            <Button title='SIGN UP' color='rgba(227, 192, 0, 1)' style={styles.btn}/>
        </View> 
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 640,
    },
    containerBtn:{
        flex:0,
        height:48,
        width:360,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    title:{
        width:189,
        height:58,
        textAlign:'center',
        fontSize:25,
        fontWeight:'700',
        lineHeight:29.3
    },
    title2:{
        width:302,
        height:36,
        textAlign:'center',
        fontSize:15,
        fontWeight:'700',
        lineHeight:17.58
    },
    btn:{
        width:119,
        height:48,
    }
});