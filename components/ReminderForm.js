import { Text, TouchableOpacity } from "react-native";

const ReminderForm = ({setHome}) => {
    return ( 
        <TouchableOpacity onPress={()=>setHome(true)}>
            <Text style={{backgroundColor:'red',fontSize:25}}>go home</Text>
        </TouchableOpacity>
     );
}
 
export default ReminderForm;