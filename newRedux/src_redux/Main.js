import React from "react";
import { SafeAreaView, View, Text } from "react-native";

import Component_A from "./pages/Component_A";
import Component_B from "./pages/Component_B";

import reducer from "./context/reducer";
import initialState from "./context/store";

import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(reducer, initialState);

const Main = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <Component_A />
        <Component_B />
      </SafeAreaView>
    </Provider>
  );
};

export default Main;
