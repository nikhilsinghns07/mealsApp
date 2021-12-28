import React from 'react';
import { View, Text, Button, StyleSheet, FlatList,TouchableOpacity } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constants/Colors';
import CategoryGridTitle from '../components/CategoryGridTitle';

const CategoriesScreen = (props) => {
  
  const renderGridItem = (itemData) => {
    return <CategoryGridTitle 
    title={itemData.item.title}
    onSelect={() => {
      props.navigation.navigate({
        routeName : 'CategoryMeals' ,
        params : {categoryId : itemData.item.id}
      })
    }}
    color={itemData.item.color} 
    />
  }

  return (
    <FlatList
    data={CATEGORIES} 
    renderItem={renderGridItem}
    numColumns={2}/>
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle : 'Meal Categories',
  headerStyle: {
    backgroundColor : Colors.primaryColor
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

});


export default CategoriesScreen;
