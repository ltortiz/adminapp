import React from 'react';
import { View, StyleSheet, BackHandler, Alert } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import SocialScreen from '../screens/SocialScreen';
import ManageScreen from '../screens/ManageScreen';
import ExploreScreen from '../screens/ExploreScreen';
import theme from '../theme/theme';
import { useFocusEffect } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        Alert.alert(
          'Salir',
          '¿Estás seguro que quieres salir de la aplicación?',
          [
            { text: 'Cancelar', style: 'cancel', onPress: () => null },
            { text: 'Salir', onPress: () => BackHandler.exitApp() },
          ],
          { cancelable: true }
        );
        return true; // Bloquea la acción de volver atrás
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [])
  );

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: theme.colors.onPrimary,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          height: 68,
          bottom: 0,
          paddingTop: 10
        },
        tabBarLabelStyle: {
          fontSize: theme.fontSizes.small,
          color: theme.colors.secondaryContainer,
          marginBottom: 12,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case "Home":
              iconName = focused ? 'home' : 'home-outline';
              break;
            case "Social":
              iconName = focused ? 'chatbox-ellipses' : 'chatbox-ellipses-outline';
              break;
            case "Gestionar":
              iconName = focused ? 'business' : 'business-outline';
              break;
            case "Explorar":
              iconName = focused ? 'grid' : 'grid-outline';
              break;
          }
          return (
            <View style={[styles.iconContainer, { backgroundColor: focused ? theme.colors.onSecondaryContainer : theme.colors.onSecondary }]}>
              <Ionicons name={iconName} size={size} color={color} />
            </View>
          );
        },
        tabBarActiveTintColor: theme.colors.onSecondary,
        tabBarInactiveTintColor: theme.colors.secondaryContainer,
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false, tabBarLabel: 'Home' }}
      />

      <Tab.Screen
        name="Social"
        component={SocialScreen}
        options={{ headerShown: false, tabBarLabel: 'Social' }}
      />

      <Tab.Screen
        name="Gestionar"
        component={ManageScreen}
        options={{ headerShown: false, tabBarLabel: 'Gestionar' }}
      />

      <Tab.Screen
        name="Explorar"
        component={ExploreScreen}
        options={{ headerShown: false, tabBarLabel: 'Explorar' }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: theme.spacing.small,
    padding: theme.spacing.extraSmall,
  },
});

export default TabNavigator;
