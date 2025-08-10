import { Pressable, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Goalitem(props) {

    return (
        <View className="flex-row justify-between items-center bg-violet-700  px-6 rounded-lg m-3">
            {/* Goal Text */}
            <Text className="py-4 text-xl text-white">{props.text}</Text>

            {/* Delete Icon */}
            <Pressable onPress={props.ondelete} android_ripple={{ color: '#ffffff44', borderless: true }}>
                <MaterialIcons name="delete" size={24} color="orange" />
            </Pressable>
        </View>


    )
}
