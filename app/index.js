import {  useState } from "react";
import { View, FlatList } from "react-native";
import "../global.css";
import Goalitem from "./goalitem";
import Goalinput from "./goalinput"

export default function Index() {
 
  const [goals, setgoals] = useState([]);

  function HandleInput(input) {

      setgoals((prevGoals) => [...prevGoals, input]);
      
  }
  

  return (
    <View className=" pt-8 mt-20 px-4">

      <Goalinput onaddgoal={HandleInput} />

      <View className="border-b border-gray-400 px-6 " />

      <FlatList className="flex-4"
        data={goals}
        renderItem={(itemdata) => {
          return <Goalitem  text={itemdata.item}/>
        }} />
    </View>
  );

}

