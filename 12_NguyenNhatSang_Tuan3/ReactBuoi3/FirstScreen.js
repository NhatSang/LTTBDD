import { StyleSheet, Text, View, Image, Button, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function FistScreen() {
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
            <TouchableOpacity style={styles.btn}>
                <Text style={{fontSize:20,fontWeight:'700'}}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
                <Text style={{fontSize:20,fontWeight:'700'}}>SIGN UP</Text>
            </TouchableOpacity>
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
        width:169,
        height:58,
        textAlign:'center',
        fontSize:25,
        fontWeight:'700',
        lineHeight:29.3,
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
        display:'flex',
        width:119,
        height:48,
        backgroundColor:'rgba(227, 192, 0, 1)',
        alignItems:'center',
        justifyContent:'center',
    }
});