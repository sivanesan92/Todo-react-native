import { Text, TextInput, View, TouchableOpacity, Modal, Image } from "react-native";
import { useState } from "react";


export default function Goalinput(props) {
  const [input, setinput] = useState("");

  function addgoals() {
    props.onaddgoal(input);
    setinput("");
  }

  return (
    <Modal visible={props.visible} animationType="fade">
      <View className=" flex-1   justify-center items-center bg-violet-400" >
        <Image className="w-[100] h-[100] m-10" source={require("../assets/images/Goal.png")} />
        <TextInput
          className='w-[90%] h-[55px] border-2 border-white rounded-lg mr-1 pr-8 pl-5 font-bold  text-xl text-white-200 '
          placeholder="type something..."
          placeholderTextColor="white"
          onChangeText={setinput} value={input}
          style={{ color: 'white' }}
        />

        <View className="flex-row mt-4">
          <TouchableOpacity
            className=" mr-16  bg-violet-600  w-[25%] h-[45px] rounded-lg justify-center items-center"
            onPress={addgoals}>
            <Text className="text-xl text-white">Add</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className=" bg-pink-600  w-[25%] h-[45px] rounded-lg justify-center items-center"
            onPress={props.close}>
            <Text className="text-xl text-white">CLOSE</Text>
          </TouchableOpacity>
        </View>


      </View >
    </Modal>


  )

}