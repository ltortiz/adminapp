import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../api/firebaseConfig';
import theme from '../theme/theme';
import { doc, setDoc } from 'firebase/firestore';

const { width } = Dimensions.get('window');

const RegisterScreen = ({ navigation }) => {
  const [document, setDocument] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Las contraseñas no coinciden');
      return;
    }
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const { uid } = userCredential.user;
      await setDoc(doc(db, 'usuarios', uid), {
        document: document,
        name: name,
        email: email,
        createdAt: new Date(),
      });
      Alert.alert('Registro exitoso', 'Tu cuenta ha sido creada');
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Error en el registro', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Registro</Text>
      <TextInput
        style={styles.input}
        placeholder="Documento"
        value={document}
        onChangeText={setDocument}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={name}
        onChangeText={setName}
      />
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

      <TextInput
        style={styles.input}
        placeholder="Confirmar Contraseña"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />
      ) : (
        <View style={styles.containerButtons}>
          <TouchableOpacity
            style={[styles.button, { borderColor: theme.colors.secondaryContainer, borderWidth: 1 }]}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={[styles.buttonText, { color: theme.colors.secondaryContainer }]}>Volver</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: theme.colors.secondaryContainer }]}
            onPress={handleRegister}
          >
            <Text style={[styles.buttonText, { color: theme.colors.onSecondary }]}>Registrarse</Text>
          </TouchableOpacity>
        </View>
      )}
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
  headerText: {
    fontSize: 24,
    marginBottom: 24,
    textAlign: 'center',
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
  containerButtons: {
    gap: theme.spacing.extraSmall,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    width: width * 0.45,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing.medium,
  },
  buttonText: {
    fontSize: theme.fontSizes.medium
  },
});

export default RegisterScreen;
