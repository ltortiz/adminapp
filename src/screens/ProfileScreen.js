import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useAuth } from '../context/AuthContext';
import theme from '../theme/theme';

const ProfileScreen = ({ navigation }) => {
  const { user, logout } = useAuth();
  const imagenProfile = 'https://cdn-icons-png.flaticon.com/256/149/149071.png';

  return (
    <View style={styles.container}>
      <Image source={{ uri: imagenProfile }} style={styles.image} />
      <Text style={styles.name}>{user.name || 'Nombre no disponible'}</Text>
      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Documento:</Text>
          <Text style={styles.infoValue}>{user.document || 'No disponible'}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Correo:</Text>
          <Text style={styles.infoValue}>{user.email || 'No disponible'}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => {
        logout();
        navigation.navigate('Login');
      }} >
        <Text style={styles.buttonText}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing.large,
    backgroundColor: theme.colors.background,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: theme.spacing.large,
  },
  name: {
    fontSize: theme.fontSizes.extraLarge,
    fontFamily: theme.fonts.bold,
    marginBottom: theme.spacing.large,
  },
  infoContainer: {
    width: '100%',
    marginBottom: theme.spacing.large,
  },
  infoItem: {
    backgroundColor: theme.colors.onSecondary,
    padding: theme.spacing.medium,
    marginBottom: theme.spacing.medium,
    borderRadius: theme.spacing.medium,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  infoLabel: {
    fontSize: theme.fontSizes.medium,
    fontFamily: theme.fonts.bold,
    marginBottom: theme.spacing.extraSmall,
  },
  infoValue: {
    fontSize: theme.fontSizes.medium,
    color: '#333',
  },
  button: {
    width: '100%',
    height: 40,
    borderRadius: theme.spacing.small,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    marginTop: theme.spacing.medium,
  },
  buttonText: {
    fontSize: theme.fontSizes.medium,
    color: theme.colors.onPrimary,
  },
});

export default ProfileScreen;
