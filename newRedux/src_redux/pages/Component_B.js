import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Button,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

const Component_B = (props) => {
  const dispatch = useDispatch();
  const myColor = useSelector(
    (herhangibirisim) => herhangibirisim.backgroundColor,
  );

  const name = useSelector((news) => news.userName);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "yellow" }}>
      <TouchableOpacity
        style={{ flex: 1 }}
        onpress={() => dispatch({ type: "sari" })}>
        <Text>{name}</Text>
        <Button title="kare" onPress={() => dispatch({ type: "kare2" })} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Component_B;
