import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

import MealsNavigator from "../navigation/MealsNavigator";

const CategoriesScreen = (props) => {
  console.log(props);
  return (
    <View style={styles.screen}>
      <Text>CategoriesScreen</Text>
      <Button
        title="Go to Meals!"
        onPress={() => {
          props.navigation.navigate("CategoryMeals");
        }}
      />
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
