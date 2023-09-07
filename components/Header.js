import { View,StyleSheet,Text, Image,TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';

const Header = () => {
    return ( 
        <View style={styles.header}>

            <View style={styles.birthday}>
            <Image
                style={styles.tinyLogo}
                source={require('../assets/confetti.png')}
            />
            </View>
            <View style={styles.apptext}>
            
                <Text style={styles.title}>Birthday Reminder</Text>
                <Text style={styles.caption}>May <Text style={{color:'#ffbf41',fontWeight:'bold'}}>God</Text> give you <Text style={{color:'#ffbf41',fontWeight:'bold'}}>peace</Text> on your special day</Text>
                <TouchableOpacity style={{display:'flex',flexWrap:"wrap"}}><Text style={styles.addbtn}><AntDesign name="plussquareo" size={24} color="white" /></Text></TouchableOpacity>
            </View>
 
        </View>
     );
}
 
export default Header;

const styles=StyleSheet.create({
    birthday:{
        justifyContent:"center",
        paddingLeft:5,
        width:'30%'
    },
    addbtn:{
        backgroundColor:'#dd1c4b',
        fontWeight:'bold',
        color:'white',
        justifyContent:"center",
        borderRadius:5,
        padding:6,
    },
    apptext:{
        display:"flex",
        width:'70%',
        justifyContent:"center",
        height:'100%'
    },
    header:{
        height:180,
        backgroundColor: 'black',
        paddingTop:25,
        display:"flex",
        flexDirection:'row',
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        overflow:"hidden",
        
    },
    tinyLogo: {
        width: 80,
        height: 80,
        
      },
    title:{
        color:'white',
        fontSize:25,
        fontWeight:'bold',
        paddingLeft:2,
        backgroundColor:'#dd1c4b'
    },
    caption:{
        color:'#F0EAD6'
    }
});