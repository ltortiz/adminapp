import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import theme from '../theme/theme';
import CustomButton from '../components/CustomButton';

const DetalleScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { item } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{item.title || 'Título'}</Text>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.description}>{item.description}</Text>
      <CustomButton
        onPress={() => navigation.goBack()}
        title="Cerrar"
        backgroundColor={theme.colors.primary}
        textColor={theme.colors.onPrimary}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: theme.spacing.medium,
    backgroundColor: theme.colors.background,
  },
  title: {
    fontSize: theme.fontSizes.extraLarge,
    fontFamily: theme.fonts.semibold,
    fontWeight: '900',
    fontStyle: 'italic',
    marginBottom: theme.spacing.medium,
    color: theme.colors.success,
    textAlign: 'left',
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 8,
    marginBottom: theme.spacing.medium,
  },
  description: {
    fontSize: theme.fontSizes.medium,
    color: theme.colors.onSurface,
    lineHeight: theme.spacing.extraLarge,
    textAlign: 'left',
    marginBottom: theme.spacing.large,
  },
});

export default DetalleScreen;
