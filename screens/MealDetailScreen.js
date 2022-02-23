import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { MEALS } from "../screens/data/dummy-data";
import HeaderButton from "../components/HeaderButton";

const MealDetailScreen = (props) => {
  const mealId = props.navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <View style={styles.screen}>
      <Text>{selectedMeal.title}</Text>
    </View>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return {
    headerTitle: selectedMeal.title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => {
            console.log("Marked as favorite");
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
