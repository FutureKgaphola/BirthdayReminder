import React, { useState } from "react";
import { Image, Linking, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Iconicon from "react-native-vector-icons/Ionicons";
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import { Button } from "react-native-paper";
import * as ImagePicker from 'expo-image-picker';
import Activityprogress from "./Activityprogress";

const ReminderForm = ({ setHome }) => {
  const [image, setImage] = useState(null);
  const[isSaving,setSave]=useState('save');
  const[isDisabled,setDisable]=useState(false);
  var uploading=()=>{
    
    try{
      setSave('adding remider...');
      setDisable(true);
    }catch(err){
      setSave('save');
      setDisable(false);
    }finally{
      setSave('save');
      setDisable(false);
    }
  };
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0,
    });

    if (result.canceled === false) {
      setImage(result.assets[0].uri);
    } else {
      return;
    }
  };
  return (
    <View style={styles.card}>

      <View style={styles.containerinput}>
        <Iconicon name="person-circle-outline" size={24} color={"black"} />
        <TextInput
          style={{ marginLeft: 2 }}
          placeholder="friend's name"
          keyboardType="default"
          cursorColor={"black"}
        />
      </View>
      <View style={styles.containerinput}>
        <Iconicon name="calendar" size={24} color={"black"} />
        <TextInput
          style={{ marginLeft: 2 }}
          placeholder="birth date"
          keyboardType="default"
          cursorColor={"black"}
        />
      </View>

      <View style={styles.containerinput}>
        <Iconicon name="bookmarks" size={24} color={"black"} style={{ alignSelf: "center" }} />
        <TextInput
          style={{ marginLeft: 2, marginRight: 2 }}
          multiline
          numberOfLines={4}
          placeholder="extra notes"
          keyboardType="default"
          cursorColor={"black"}
        />
      </View>
      <View style={styles.btncontainers}>
        <TouchableOpacity style={styles.modalbtn}
        ><Text style={styles.modalText}><MaterialCommunityIcons name="clock" size={24} color="white" /> time</Text></TouchableOpacity>
        <TouchableOpacity style={styles.modalbtn}
          onPress={pickImage}
        ><Text style={styles.modalText}><Entypo name="folder-images" size={24} color="white" /> pick image</Text></TouchableOpacity>
        {image && <Image source={{ uri: image }} style={{ width: 40, height: 40, borderRadius: 180, alignSelf: "center" }} />}
      </View>

      <TouchableOpacity
      disabled={isDisabled}
       onPress={()=>uploading()}
       style={{ backgroundColor: 'black', borderRadius: 5, marginTop: 10, marginBottom: 10 }}>
        <Text style={styles.BigText}>{isSaving==="save" ? <MaterialCommunityIcons name="content-save" size={20} color="white" /> :
        <Activityprogress/>}{isSaving}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  containerinput: {
    display: "flex",
    flexDirection: "row",
    borderWidth: 2,
    borderRadius: 5,
    elevation: 3,
    backgroundColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    padding: 5,
    margin: 5,
  },
  modalText: {
    color: 'white',
    fontSize: 20
  },
  BigText:
  {
    color: 'white',
    fontSize: 25,
    alignSelf: "center"
  },
  btncontainers: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,

  },
  card: {
    elevation: 3,
    backgroundColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    margin: 15,
  },
  modalbtn: {
    backgroundColor: 'black',
    padding: 4,
    display: 'flex',
    borderRadius: 5,
    fontWeight: 'bold',
    marginTop: 8
  }
});
export default ReminderForm;
