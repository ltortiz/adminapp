import React, { useState } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Dimensions } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../api/firebaseConfig';
import theme from '../theme/theme';

const { width } = Dimensions.get('window');

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('leidy@correo.com');
  const [password, setPassword] = useState('123456');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate('TabNav');
    } catch (error) {
      console.log(error.message);
      Alert.alert('Error', 'Valide la información ingresada');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Admin App</Text>
      <Image style={styles.logo} source={require('../../assets/logo.png')} />
      <Text style={[styles.subtitle]}>Inicio de sesión</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>Inicio de Sesión</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.linkText}>¿No tienes una cuenta? Regístrate aquí</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background
  },
  title: {
    marginBottom: theme.spacing.extraLarge,
    textAlign: 'center',
    color: theme.colors.text,
    fontSize: theme.fontSizes.extraExtraLarge,
    fontFamily: theme.fonts.semibold
  },
  logo: {
    width: 119,
    height: 119,
    marginBottom: theme.spacing.extraLarge,
  },
  subtitle: {
    marginBottom: 20,
    textAlign: 'center',
    color: theme.colors.text,
    fontSize: theme.fontSizes.medium,
    fontFamily: theme.fonts.semibold
  },
  input: {
    width: width * 0.9,
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: theme.spacing.medium,
    paddingHorizontal: theme.spacing.medium,
    marginBottom: theme.spacing.medium,
    borderColor: theme.colors.outline,
    backgroundColor: "#FFFFFF",
  },
  button: {
    width: width * 0.9,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.secondaryContainer,
    marginTop: theme.spacing.medium,
  },
  buttonText: {
    fontSize: theme.fontSizes.medium,
    color: theme.colors.onPrimary,
  },
  linkText: {
    fontFamily: theme.fonts.italic,
    fontSize: theme.fontSizes.medium,
    marginTop: theme.spacing.extraLarge,
    color: theme.colors.onSurface,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
