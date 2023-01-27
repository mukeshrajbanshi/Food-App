// import React from "react";
// import { Button, TouchableOpacity, Text, Image } from "react-native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createAppContainer } from "react-navigation";
// import { NavigationContainer } from "@react-navigation/native";
// import RestaurantsScreen from "./components/Restaurants";
// import DishesScreen from "./components/Dishes";
// import CartScreen from "./components/Cart";

// const Stack = createNativeStackNavigator();

// const RootStack = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Restaurants"
//           component={RestaurantsScreen}
//           options={{ title: "Food Shop" }}
//         ></Stack.Screen>
//         <Stack.Screen
//           name="Dishes"
//           component={DishesScreen}
//           options={{ title: "Dishes" }}
//         ></Stack.Screen>
//         <Stack.Screen
//           name="Cart"
//           component={CartScreen}
//           options={{
//             title: "Cart",
//             headerStyle: {
//               elevation: 0,
//               shadowOpacity: 0,
//             },
//           }}
//         ></Stack.Screen>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default createAppContainer(RootStack);
import React from "react";
import { Button, TouchableOpacity, Text, Image } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import RestaurantsScreen from "./components/Restaurants";
import DishesScreen from "./components/Dishes";
import CartScreen from "./components/Cart";

const RootStack = createStackNavigator({
  Restaurants: {
    screen: RestaurantsScreen,
    navigationOptions: {
      title: "Food Shop"
    }
  },
  Dishes: {
    screen: DishesScreen,
    navigationOptions: {
      title: "Dishes"
    }
  },
  Cart: {
    screen: CartScreen,
    navigationOptions: {
      title: "Cart",
      headerStyle: {
        elevation: 0,
        shadowOpacity: 0
      }
    }
  }
});

export default createAppContainer(RootStack);
