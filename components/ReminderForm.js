import React, { useState } from "react";
import {
  Pressable,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Iconicon from "react-native-vector-icons/Ionicons";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import Activityprogress from "./Activityprogress";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Platform } from "react-native";
import uuid from "react-native-uuid";
import { Snackbar } from "react-native-paper";

const ReminderForm = (props) => {
  const { setHome, seTodos, todos } = props;
  const [isvisible, showSnack] = useState(false);
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [image, setImage] = useState(null);
  const [isSaving, setSave] = useState("save");
  const [isDisabled, setDisable] = useState(false);
  const [dob, setdob] = useState("*Day Mon DD YYYY");
  const [extra, setExtra] = useState("");
  const [name, setName] = useState("");
  const [iserr, setError] = useState("");
  var uploading = () => {
    try {
      if (
        name !== "" &&
        dob !== "" &&
        dob !== "*Day Mon DD YYYY" &&
        extra !== ""
      ) {
        setSave("adding remider...");
        setDisable(true);
        seTodos([
          ...todos,
          { name: name, dob: dob, msg: extra, id: uuid.v4() },
        ]);
        setTimeout(() => {
          setError("");
          setName("");
          setExtra("");
          setdob("*Day Mon DD YYYY");
          setHome(true);
        }, 2000);
        setError("");
      } else {
        setError("");
        showSnack(true);
      }
    } catch (err) {
      setError(String(err));
      setSave("save");
      setDisable(false);
      showSnack(true);
    }
  };
  const toggleDatepicker = () => {
    setShowPicker(!showPicker);
  };
  const onChange = ({ type }, selectedDate) => {
    if (type == "set") {
      const currdate = selectedDate;
      setDate(currdate);
      if (Platform.OS === "android") {
        toggleDatepicker();
        setdob(currdate.toDateString());
      }
    } else {
      toggleDatepicker();
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
          onChangeText={(e) => setName(e)}
          value={name}
          style={{ marginLeft: 2 }}
          placeholder="*friend's name"
          keyboardType="default"
          cursorColor={"black"}
        />
      </View>
      <View style={styles.containerinput}>
        <Iconicon name="calendar" size={24} color={"black"} />
        {!showPicker && (
          <Pressable onPress={toggleDatepicker}>
            <TextInput
              style={{ marginLeft: 2 }}
              placeholder="*birth date"
              keyboardType="default"
              cursorColor={"black"}
              editable={false}
              onChange={setdob}
              value={dob}
            />
          </Pressable>
        )}
      </View>

      <View style={styles.containerinput}>
        <Iconicon
          name="bookmarks"
          size={24}
          color={"black"}
          style={{ alignSelf: "center" }}
        />
        <TextInput
          onChangeText={(e) => setExtra(e)}
          style={{ marginLeft: 2, marginRight: 2 }}
          multiline
          value={extra}
          numberOfLines={4}
          placeholder="*extra notes"
          keyboardType="default"
          cursorColor={"black"}
        />
      </View>
      <View style={styles.btncontainers}>
        <TouchableOpacity style={styles.modalbtn} onPress={pickImage}>
          <Text style={styles.modalText}>
            <Entypo name="folder-images" size={24} color="white" /> pick image
          </Text>
        </TouchableOpacity>
        {image && (
          <Image
            source={{ uri: image }}
            style={{
              width: 40,
              height: 40,
              borderRadius: 180,
              alignSelf: "center",
            }}
          />
        )}
      </View>

      <TouchableOpacity
        disabled={isDisabled}
        onPress={() => uploading()}
        style={{
          backgroundColor: "black",
          borderRadius: 5,
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        <Text style={styles.BigText}>
          {isSaving === "save" ? (
            <MaterialCommunityIcons
              name="content-save"
              size={20}
              color="white"
            />
          ) : (
            <Activityprogress />
          )}
          {isSaving}
        </Text>
      </TouchableOpacity>
      {showPicker && (
        <DateTimePicker
          mode="date"
          display="calendar"
          value={date}
          onChange={onChange}
          timeZoneName={"Africa/Johannesburg"}
        />
      )}

      {isvisible && (
        <Snackbar
          visible={isvisible}
          onDismiss={() => showSnack(false)}
          duration={2000}
        >
          {iserr !== "" ? iserr : "Please fill the form first."}
        </Snackbar>
      )}
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
    color: "white",
    fontSize: 20,
  },
  BigText: {
    color: "white",
    fontSize: 25,
    alignSelf: "center",
  },
  btncontainers: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
  },
  card: {
    elevation: 3,
    borderRadius: 5,
    backgroundColor: "#FAF9F6",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    margin: 15,
    padding: 5,
  },
  modalbtn: {
    backgroundColor: "black",
    padding: 4,
    display: "flex",
    borderRadius: 5,
    fontWeight: "bold",
    marginTop: 8,
  },
});
export default ReminderForm;
