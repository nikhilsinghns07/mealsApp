import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors';

const MealsNavigator = createStackNavigator({
  Categories: {
    screen : CategoriesScreen
  },
  CategoryMeals: {
    screen: CategoryMealsScreen
  },
  MealDetail: {
    screen : MealDetailScreen
  }
},

{ 
  
  defaultNavigationOptions : {
    headerStyle: {
      backgroundColor : Colors.primaryColor
    }
  } 
},

);

export default createAppContainer(MealsNavigator);
