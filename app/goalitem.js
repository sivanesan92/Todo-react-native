import {Text, View  } from "react-native";

export default function Goalitem(props){
    
    return(
        <View>
            <Text
            className="m-3 p-4 bg-violet-600 text-lg text-white rounded-lg" >
            {props.text}</Text>
        </View>
       
    )
}
