import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import AnunciosScreen from '../screens/AnunciosScreen';
import AnunciosDetalleScreen from '../screens/AnunciosDetalleScreen';
import TabNavigator from './TabNavigator';
import Icon from 'react-native-vector-icons/MaterialIcons';
import theme from '../theme/theme';
import { StyleSheet } from 'react-native';
const Stack = createNativeStackNavigator();


const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="TabNav" component={TabNavigator} options={{ headerShown: false }} />

        <Stack.Screen
          name="Anuncios"
          component={AnunciosScreen}
          options={({ navigation }) => ({
            headerLeft: () => (
              <Icon
                name="arrow-back"
                size={theme.fontSizes.extraLarge}
                color={theme.colors.onSurface}
                style={styles.icon}
                onPress={() => navigation.goBack()}
              />
            ),
            title: 'Anuncios',
          })}
        />

        <Stack.Screen
          name="Detalle"
          component={AnunciosDetalleScreen}
          options={({ navigation }) => ({
            headerLeft: () => (
              <Icon
                name="arrow-back"
                size={theme.fontSizes.extraLarge}
                color={theme.colors.onSurface}
                style={styles.icon}
                onPress={() => navigation.goBack()}
              />
            ),
            title: 'Detalle',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginLeft: theme.spacing.medium,
    marginRight: theme.spacing.small,
  },
  headerTitle: {
    fontSize: theme.fontSizes.large,
    color: theme.colors.onSurface,
    fontFamily: theme.fonts.semibold,
  },
  header: {
    backgroundColor: theme.colors.onPrimary,
    elevation: 0,
    shadowOpacity: 0,
  },
});

export default AppNavigator;
