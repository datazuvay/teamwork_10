import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";

const Component_A = () => {
  const dispatch = useDispatch();
  const myNumber = useSelector((isim) => isim.number);
  const myColor = useSelector((renk) => renk.backgroundColor);
  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity
        style={{ backgroundColor: myColor, flex: 1 }}
        onPress={() => dispatch({ type: "green" })}></TouchableOpacity>

      <Text style={{ backgroundColor: "orange", height: 50 }}>
        number:{myNumber}
      </Text>
      <TouchableOpacity
        style={{ backgroundColor: myColor, flex: 1 }}
        onPress={() => dispatch({ type: "black" })}>
        <Text>Component_A</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Component_A;
