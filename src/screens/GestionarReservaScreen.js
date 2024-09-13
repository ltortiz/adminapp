import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';
import theme from '../theme/theme';
import { Ionicons } from 'react-native-vector-icons';

const GestionarReservaScreen = () => {
  const route = useRoute();
  const { item } = route.params;

  const getStatusComponent = () => {
    switch (item.estado) {
      case 1:
        return (
          <View style={[styles.statusComponent, { backgroundColor: theme.colors.success }]}>
            <Text style={styles.statusText}>Reserva Confirmada</Text>
          </View>
        );
      case 2:
        return (
          <View style={[styles.statusComponent, { backgroundColor: theme.colors.errorDos }]}>
            <Text style={styles.statusText}>Reserva Cancelada</Text>
          </View>
        );
      default:
        return null;
    }
  };

  const handleEditPress = () => {
    Alert.alert('Confirmar', '¿Deseas confirmar esta reserva?');
  };

  const handleDeletePress = () => {
    Alert.alert('Eliminar', '¿Deseas eliminar esta reserva?');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Zona:</Text>
        <View style={styles.infoBox}>
          <Text style={styles.infoValue}>{item.zona}</Text>
        </View>
        <Text style={styles.infoText}>Fecha:</Text>
        <View style={styles.infoBox}>
          <Text style={styles.infoValue}>{item.fecha}</Text>
        </View>
        <Text style={styles.infoText}>Usuario:</Text>
        <View style={styles.infoBox}>
          <Text style={styles.infoValue}>{item.usuario}</Text>
        </View>
        <Text style={styles.infoText}>Apto:</Text>
        <View style={styles.infoBox}>
          <Text style={styles.infoValue}>{item.apto}</Text>
        </View>
      </View>

      {item.estado === 0 && (
        <TextInput
          style={styles.textArea}
          placeholder="Digite un comentario u observación para la reserva"
          multiline
          numberOfLines={6}
          textAlignVertical="top"
        />
      )}

      {item.estado === 0 && (
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={[styles.button, styles.editButton]} onPress={handleEditPress}>
            <Ionicons name="checkmark-outline" size={36} color={theme.colors.onPrimary} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.deleteButton]} onPress={handleDeletePress}>
            <Ionicons name="close-outline" size={36} color={theme.colors.onPrimary} />
          </TouchableOpacity>
        </View>
      )}

      {getStatusComponent()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: theme.spacing.medium,
    backgroundColor: theme.colors.background,
  },
  infoContainer: {
    marginBottom: theme.spacing.medium,
  },
  infoBox: {
    backgroundColor: '#D2D2D2',
    borderRadius: 8,
    padding: theme.spacing.medium,
    marginBottom: theme.spacing.small,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#a3a3a3',
  },
  infoText: {
    fontSize: theme.fontSizes.large,
    fontFamily: theme.fonts.semibold,
    fontWeight: '900',
    fontStyle: 'italic',
    marginBottom: theme.spacing.small,
    color: theme.colors.success,
  },
  infoValue: {
    fontSize: theme.fontSizes.medium,
    fontFamily: theme.fonts.semibold,
    fontWeight: '900',
    color: theme.colors.onSurface,
  },
  textArea: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: theme.spacing.small,
    marginBottom: theme.spacing.medium,
    height: 100,
    borderWidth: 1,
    borderColor: '#a3a3a3',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: theme.spacing.medium,
    marginBottom: theme.spacing.medium,
  },
  button: {
    width: 96,
    height: 96,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: theme.spacing.small,
  },
  editButton: {
    backgroundColor: theme.colors.success,
  },
  deleteButton: {
    backgroundColor: theme.colors.error,
  },
  statusComponent: {
    borderRadius: 8,
    padding: theme.spacing.medium,
    alignItems: 'center',
    marginBottom: theme.spacing.medium,
  },
  statusText: {
    fontSize: theme.fontSizes.medium,
    color: theme.colors.onSurface,
    fontWeight: 'bold',
  },
});

export default GestionarReservaScreen;
