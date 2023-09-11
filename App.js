import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from './components/Header';
import Tasksitems from './components/Tasksitems';
import { AntDesign } from '@expo/vector-icons';
import ReminderForm from './components/ReminderForm';
import { Snackbar } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
var [isHome,setHome]=useState(true);
var [todos,seTodos]=useState(
[
{name:"Samuel Mankho",dob:'Wed Jun 15 2024', msg: `that can be used as a pre-built solution! layground to view and fork react-native-shared-preferences`,id:'1'},
{name:"Kenny Okoje",dob:'Tue Jun 15 2024', msg: `Use this onlplayground to view and fork react-native-shared-preferences example apps and templates on CodeSandbox. Click any example below to run it instantly or find templates that can be used as a pre-built solution!`,id:'2'},
{name:"Karel Jones",dob:'Wed Jun 15 2024', msg: `Use this online react-native-shared-preferences playground to view and fork react-native-shared-preferences example apps and templates on CodeSandbox. Click any example below to run it instantly or find templates that can be used as a pre-built solution!`,id:'3'},
{name:"john",dob:'Mon Jun 15 2024', msg: `Use this onlinelayground to view and fork react-native-shared-preferences example apps and templates on CodeSandbox. Click any example below to run it instantly or find templates that can be used as a pre-built solution!`,id:'4'},
{name:"Dave",dob:'Thu Jun 15 2024', msg: `ences playground to view and forreferences example apps and templates on CodeSandbox. Click any example below to run it instantly or find templates that can be used as a pre-built solution!`,id:'5'},
{name:"Simon",dob:'Fri Jun 15 2024', msg: `nces playground to view and fork react-native-shared-preferences example apps and templates on CodeSandbox. Click any example below to run it instantly or find templates that can be used as a pre-built solution!`,id:'6'},
{name:"Daniel",dob:'Wed Jun 15 2024', msg: `Use this ew-shared-preferences example apps and templates on CodeSandbox. Click any example below to run it instantly or find templates that can be used as a pre-built solution!`,id:'7'},
{name:"Roony Simons",dob:'Thu Jun 15 2024', msg: `und to s example apps and templates on CodeSandbox. Click any example below to run it instantly or find templates that can be used as a pre-built solution!`,id:'8'}
]
);
var [isvisible,showSnack]=useState(false);

return (
<SafeAreaProvider style={styles.container}>
  <View style={styles.container}>
    {/*header*/}
    <Header setHome={setHome} />
    <View style={styles.content}>
      {/*to form*/}
      <View style={styles.list}>

        {isHome && todos ?
        <Tasksitems todos={todos} seTodos={seTodos} /> :
        isHome && todos.length===0 ?
        <Text style={{backgroundColor:'black',color:'white',padding:5,borderRadius:5,
           margin:5}}>No birthdays added yet</Text> : !isHome &&
        <ReminderForm setHome={setHome} seTodos={seTodos} todos={todos}/>
        }
      </View>
    </View>

    <View style={styles.bottomView}>
      <TouchableOpacity style={styles.update}>
        <Text style={{display:'flex',fontSize:16,color:'#dd1c4b',fontWeight:'bold'}}>
          <AntDesign name="setting" size={26} color="red" />
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.update} onPress={()=>showSnack(true)}>
        <Text style={{fontSize:16,color:'#dd1c4b',fontWeight:'bold'}}>
          <AntDesign name="hearto" size={26} color="red" />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>setHome(false)} style={{display:'flex',flexWrap:"wrap"}}><Text style={styles.addbtn}>
          <AntDesign name="plussquareo" size={26} color="white" />
        </Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>setHome(true)} style={{display:'flex',flexWrap:"wrap"}}><Text style={styles.addbtn}><AntDesign name="home" size={26} color="white" /></Text></TouchableOpacity>
    </View>

    {isvisible && <Snackbar visible={isvisible} onDismiss={()=> showSnack(false)}
      duration={2000}
      >
      Hey there! Thanks for the ❤️reaction.
    </Snackbar>}

  </View>
</SafeAreaProvider>

);
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: 'white',
},
content:{
flex:4
},
list:{
display:'flex',
flexDirection:'column'
},
update:{
backgroundColor:'white',
padding:5,
display:'flex',
borderRadius:5,
fontWeight:'bold',
},
item: {
backgroundColor: 'coral',
marginTop:5,
padding:30,
},
itemcontainer: {
backgroundColor: 'yellow',
width:'100%'
},
bottomView: {
display:'flex',
flexDirection:'row',
gap:4,
backgroundColor: 'black',
margin:2,
borderRadius:5,
padding:5
},
addbtn:{
backgroundColor:'#dd1c4b',
fontWeight:'bold',
color:'white',
justifyContent:"center",
borderRadius:5,
padding:6,
}
});