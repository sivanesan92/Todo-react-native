import { SetStateAction, useState } from "react";
import { Button, Text, TextInput, View ,StyleSheet, TouchableOpacity} from "react-native";
import "../global.css";

export default function Index() {
 const[input,setinput]=useState(" ");

 function HandleInput(){
  console.log(input);
  setinput("");
  
 }

  return (
    <View className=" p-5">
      <View className="flex-row justify-center item-center">
        <TextInput  className='w-[70%] border-2 border-gray-500 rounded-r-none rounded-full  mr-1 pl-5 font-bold-700 ' placeholder="type something..." onChangeText={setinput} value={input}/>
        
        <TouchableOpacity className="border-2 bg-blue-400 border-gray-500 w-[20%] rounded-r-full justify-center items-center"
         onPress={HandleInput}>
          <Text className="text-xl">add</Text>   
        </TouchableOpacity>
       
        </View>
        
         <View>
          
      </View>
    </View>
    
    
  );

}
const styles=StyleSheet.create({
  Button:{
    justifyContent:'center',
    alignContent:"center",
    width:50,
  
  
  }
}
)
