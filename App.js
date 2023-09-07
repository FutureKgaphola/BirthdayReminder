import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, FlatList, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from './components/Header';
import Tasksitems from './components/Tasksitems';
import { AntDesign } from '@expo/vector-icons';
import ReminderForm from './components/ReminderForm';

export default function App() {
  var [isHome,setHome]=useState(true);
  var [todos,seTodos]=useState(
    [
      {name:"Samuel",dob:'15 Jun 2024', msg: `that can be used as a pre-built solution! layground to view and fork react-native-shared-preferences`,id:'1'},
      {name:"Kenny",dob:'15 Nov 2023', msg: `Use this onlplayground to view and fork react-native-shared-preferences example apps and templates on CodeSandbox. Click any example below to run it instantly or find templates that can be used as a pre-built solution!`,id:'2'},
      {name:"Karel Jubert",dob:'25 Dec 2023', msg: `Use this online react-native-shared-preferences playground to view and fork react-native-shared-preferences example apps and templates on CodeSandbox. Click any example below to run it instantly or find templates that can be used as a pre-built solution!`,id:'3'},
      {name:"john",dob:'11 Dec 2023', msg: `Use this onlinelayground to view and fork react-native-shared-preferences example apps and templates on CodeSandbox. Click any example below to run it instantly or find templates that can be used as a pre-built solution!`,id:'4'},
      {name:"Dave",dob:'11 April 2023', msg: `ences playground to view and forreferences example apps and templates on CodeSandbox. Click any example below to run it instantly or find templates that can be used as a pre-built solution!`,id:'5'},
      {name:"Simon",dob:'23 Dec 2023', msg: `nces playground to view and fork react-native-shared-preferences example apps and templates on CodeSandbox. Click any example below to run it instantly or find templates that can be used as a pre-built solution!`,id:'6'},
      {name:"Daniel",dob:'11 Dec 2023', msg: `Use this ew-shared-preferences example apps and templates on CodeSandbox. Click any example below to run it instantly or find templates that can be used as a pre-built solution!`,id:'7'},
      {name:"Roony Simons",dob:'13 Sept 2023', msg: `und to s example apps and templates on CodeSandbox. Click any example below to run it instantly or find templates that can be used as a pre-built solution!`,id:'8'}
    ]
  );
  return (
    <View style={styles.container}>
      {/*header*/}
      <Header setHome={setHome}/>
      <View style={styles.content}>
        {/*to form*/}
        <View style={styles.list}>
        
          {isHome && todos ? <Tasksitems todos={todos} seTodos={seTodos}/> :
          isHome && todos.length===0 ?
           <Text style={{backgroundColor:'black',color:'white',padding:5,borderRadius:5,
           margin:5}}>No birthdays added yet</Text> : !isHome && <ReminderForm setHome={setHome}/>
          }
        </View>
      </View>
    
      <View style={styles.bottomView}>
        <TouchableOpacity style={styles.update}>
        <Text style={{display:'flex',fontSize:16,color:'#dd1c4b',fontWeight:'bold'}}>settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.update}>
        <Text style={{display:'flex',fontSize:16,color:'#dd1c4b',fontWeight:'bold'}}>ideas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.update}>
        <Text style={{fontSize:16,color:'#dd1c4b',fontWeight:'bold'}}>calender</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setHome(false)} style={{display:'flex',flexWrap:"wrap"}}><Text style={styles.addbtn}><AntDesign name="plussquareo" size={24} color="white" /></Text></TouchableOpacity>
      </View>
      
    </View>
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
    padding:4,
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
    margin:5,
    bottom:0,
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
