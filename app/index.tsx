import { SetStateAction, useState } from "react";
import { Button, Text, TextInput, View ,StyleSheet} from "react-native";
import "../global.css";

export default function Index() {
 const[input,setinput]=useState(" ");

 function HandleInput(){
  console.log(input);
  
 }

  return (
    <View className=" p-10 flex-1">
      <View className="flex-row justify-center">
        <TextInput  className='border-2 w-70 border-fill' placeholder="type something..." onChangeText={setinput}/>
        <Button title="add" onPress={HandleInput}/>
       
        </View>
        
         <View>
          
      </View>
    </View>
    
    
  );

}
const styles=StyleSheet.create({
  container:{
    flex:1,
  },
  TextInput:{
    marginTop:50,
    borderColor:'black',
    borderRadius:10,
    borderWidth: 1,

  }
}
)
