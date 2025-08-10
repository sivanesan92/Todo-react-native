import { useState } from "react";
import { Text, View, FlatList, Button, TouchableOpacity } from "react-native";
import "../global.css";
import Goalitem from "./goalitem";
import Goalinput from "./goalinput"

export default function Index() {

  const [goals, setgoals] = useState([]);
  const [ismodelvisible, setmodelvisible] = useState(false);

  function HandleInput(input) {

    setgoals((prevGoals) => [...prevGoals, input]);
    endaddgoal()
  }

  function removelist(index) {
    const newgoals = goals.filter((el, i) => i != index)
    setgoals(newgoals);


  }

  function startaddgoal() {
    setmodelvisible(true)
  }
  function endaddgoal() {
    setmodelvisible(false)
  }


  return (
    <View className="flex-1 pt-8 mt-20  px-4 bg-violet-400 ">

      <TouchableOpacity
        onPress={startaddgoal}
        className="bg-violet-700 py-3 px-6 rounded-lg items-center mt-4 mb-4 shadow-lg"
      >
        <Text className="text-white text-lg font-bold">Add Goals</Text>
      </TouchableOpacity>
      <Goalinput onaddgoal={HandleInput} visible={ismodelvisible} close={endaddgoal} />

      <View className="border-b border-black-400 px-6 py-4 " />

      <FlatList className="flex-2 "
        data={goals}
        renderItem={(itemdata) => {
          return <Goalitem text={itemdata.item} ondelete={() => { removelist(itemdata.index) }} />
        }} />
    </View>
  );

}

