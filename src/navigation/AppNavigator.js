import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import AnunciosScreen from '../screens/AnunciosScreen';
import ReservasScreen from '../screens/ReservasScreen';
import GestionarReservaScreen from '../screens/GestionarReservaScreen';
import AnunciosDetalleScreen from '../screens/AnunciosDetalleScreen';
import TabNavigator from './TabNavigator';
import RegisterScreen from '../screens/RegisterScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import theme from '../theme/theme';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';

const Stack = createNativeStackNavigator();


const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="TabNav" component={TabNavigator} options={({ navigation }) => ({
          title: '',
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Image source={{ uri: "https://cdn-icons-png.flaticon.com/256/149/149071.png" }} style={styles.image} />
            </TouchableOpacity>
          ),
        })} />

        <Stack.Screen name="Profile" component={ProfileScreen} options={({ navigation }) => ({
          headerLeft: () => (
            <Icon
              name="arrow-back"
              size={theme.fontSizes.extraLarge}
              color={theme.colors.onSurface}
              style={styles.icon}
              onPress={() => navigation.goBack()}
            />
          ),
          title: 'Mi Perfil',
        })} />

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

        <Stack.Screen
          name="Reservas"
          component={ReservasScreen}
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
            title: 'Reservas',
          })}
        />

        <Stack.Screen
          name="GestionarReserva"
          component={GestionarReservaScreen}
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
            title: 'Gestionar Reserva',
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
  image: {
    width: 32,
    height: 32
  },
});

export default AppNavigator;
