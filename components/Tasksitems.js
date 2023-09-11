import { useCallback, useState } from "react";
import {
  Modal,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking,
  RefreshControl
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRef } from "react";

const Tasksitems = (props) => {
  const [refreshing, setRefreshing] =useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  const yourRef = useRef(null);
  const [modalVisible, setModalVisible] = useState(false);
  var phoneNumber = "+27781517686";
  var whatsappMsg = `Hi friend.🌏🍰\n\nA wish for you on your birthday, whatever
     you ask may you receive, whatever you seek may you find, whatever
     you wish may it be fulfilled on your birthday and always. Happy birthday!🍰`;
  var todos = props.todos;
  var setTodo = props.seTodos;
  var handle_delete = (id) => {
    setTodo((todos) => todos.filter((task) => task.id !== id));
  };
  return (
    <View style={styles.tochview}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 2,
              alignItems: "center",
            }}
          >
            <Image
              style={styles.dialogimage}
              source={require("../assets/lady.jpg")}
            />
            <Text style={styles.HeaderMsg}>{"Daniel Simons"}</Text>
            <Text
              style={{
                color: "#ffbf41",
                fontWeight: "bold",
                alignSelf: "center",
              }}
            >
              {"22 March 2023"}
            </Text>
          </View>

          <View style={styles.btncontainers}>
            <TouchableOpacity
              style={styles.modalbtn}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.modalText}>
                <MaterialCommunityIcons
                  name="close-circle-outline"
                  size={20}
                  color="red"
                />
                Not now
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalbtn}
              onPress={() => Linking.openURL(`tel:${phoneNumber}`)}
            >
              <Text style={styles.modalText}>
                <MaterialCommunityIcons
                  name="phone-dial"
                  size={20}
                  color="red"
                />
                Phone
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalbtn}
              onPress={() =>
                Linking.openURL(
                  `whatsapp://send?phone=${phoneNumber}&text=${whatsappMsg}`
                )
              }
            >
              <Text style={styles.modalText}>
                <MaterialCommunityIcons name="whatsapp" size={20} color="red" />
                Whatsapp
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <FlatList
      refreshing={refreshing}
      onRefresh={()=>{onRefresh}}
      onen
        ref={yourRef}
        onContentSizeChange={() => yourRef.current.scrollToEnd()}
        onLayout={() => yourRef.current.scrollToEnd()}
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 2,
                alignItems: "center",
              }}
            >
              <Image
                style={styles.tinyLogo}
                source={require("../assets/lady.jpg")}
              />
              <Text style={styles.HeaderMsg}>{item.name}</Text>
              <Text
                style={{
                  color: "#ffbf41",
                  fontWeight: "bold",
                  alignSelf: "center",
                }}
              >
                {item.dob}
              </Text>
            </View>
            <Text style={styles.messge}>{item.msg}</Text>

            <View style={styles.btncontainers}>
              <TouchableOpacity
                style={styles.delete}
                onPress={() => handle_delete(item.id)}
              >
                <Text>Delete</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.update}
                onPress={() => setModalVisible(true)}
              >
                <Text>Celebrate</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Tasksitems;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "black",
    margin: 5,
    padding: 30,
    borderRadius: 5,
  },
  centeredView: {
    display: "flex",
    justifyContent: "center",
    marginTop: "90%",
    backgroundColor: "white",
    margin: 10,
    padding: 10,
    borderRadius: 5,
    borderColor: "black",
    zIndex: 3,
  },
  tinyLogo: {
    width: 30,
    height: 30,
    marginBottom: 2,
    borderRadius: 150,
    marginRight: 5,
  },
  dialogimage: {
    width: 90,
    height: 90,
    marginBottom: 2,
    borderRadius: 150,
    marginRight: 5,
  },
  messge: {
    color: "white",
  },
  HeaderMsg: {
    color: "white",
    fontSize: 17,
    backgroundColor: "#dd1c4b",
    padding: 5,
    borderRadius: 5,
  },
  btncontainers: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
  },
  tochview: {
    marginBottom: 10,
  },
  update: {
    backgroundColor: "white",
    padding: 4,
    borderRadius: 5,
    fontWeight: "bold",
    display: "flex",
  },
  delete: {
    backgroundColor: "white",
    padding: 4,
    display: "flex",
    borderRadius: 5,
    fontWeight: "bold",
  },
  modalbtn: {
    backgroundColor: "black",
    padding: 4,
    display: "flex",
    borderRadius: 5,
    fontWeight: "bold",
    marginTop: 8,
  },
  modalText: {
    color: "white",
    fontWeight: "bold",
  },
});
