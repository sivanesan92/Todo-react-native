import { Text, TextInput, View, TouchableOpacity } from "react-native";
import {  useState } from "react";


export default function Goalinput(props){
     const [input, setinput] = useState("");

     function addgoals(){
        props.onaddgoal(input);
        setinput("");
     }
    
    return(
        <View className="flex-2 flex-row mb-10  justify-center item-center"
      >
        <TextInput className='w-[70%] h-25 border-2  border-gray-500 rounded-r-none rounded-lg mr-1 pr-8 pl-5  font-bold-700 text-lg '
          placeholder="type something..."
          onChangeText={setinput} value={input} />

        <TouchableOpacity className="border-2 bg-blue-700 border-gray-500 w-[20%] rounded-r-lg justify-center items-center"
          onPress={addgoals}>
          <Text className="text-xl text-white">Add</Text>
        </TouchableOpacity>

      </View >
    )

}