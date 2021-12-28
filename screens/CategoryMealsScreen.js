import React from 'react';
import { View, Text, Button, StyleSheet ,FlatList} from 'react-native';
import { CATEGORIES , MEALS } from '../data/dummy-data';
import Colors from '../constants/Colors';
import MealItem from '../components/MealItem';

const CategoryMealScreen = props => {
  const renderMealItem = itemData => {
    return(
    <MealItem 
    title={itemData.item.title} 
    image={itemData.item.imageUrl}
    duration={itemData.item.duration}
    complexity={itemData.item.complexity}
    affordability={itemData.item.affordability}
    onSelect={() => {
      props.navigation.navigate({routeName : 'MealDetail' , params:{
        mealId : itemData.item.id,
      }})
    }}/>
    )
  }
  const catId = props.navigation.getParam('categoryId')
  
  const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0)
  return (
    <View style={styles.screen}>
      <FlatList 
      data={displayedMeals} 
      keyExtractor={(item,index) => item.id}
      renderItem={renderMealItem}
      style={{width : '100%'}}
      />
    </View>
  );

};

CategoryMealScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam('categoryId')
  const selectedCategories = CATEGORIES.find(cat => cat.id === catId)
  return {
    headerTitle : selectedCategories.title,
    headerStyle: {
      backgroundColor : Colors.primaryColor
    }
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryMealScreen;
