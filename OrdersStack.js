import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import CreateProductScreen from './CreateProductScreen'
import CreateRestaurantScreen from './CreateRestaurantScreen'
import EditProductScreen from './EditProductScreen'
import EditRestaurantScreen from './EditRestaurantScreen'
import RestaurantDetailScreen from './RestaurantDetailScreen'
import RestaurantsScreen from './RestaurantsScreen'
import OrdersScreen from '../orders/OrdersScreen'
import EditOrderScreen from '../orders/EditOrderScreen'

const Stack = createNativeStackNavigator()

export default function RestaurantsStack () {
  return (
    <Stack.Navigator>
      <Stack.Screen
      name='EditOrderScreen'
      component={EditOrderScreen}
      options={{
        title: 'Edit Order'
      }} />
      <Stack.Screen
      name='OrdersScreen'
      component={OrdersScreen}
      options={{
        title: 'Restaurant Orders'
      }} />

    </Stack.Navigator>
  )
}
