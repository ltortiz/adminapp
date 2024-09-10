import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Card from '../components/CardComponent';
import theme from '../theme/theme';

const data = [
  { id: '1', icon: 'reader-outline', title: 'PQRS', badgeValue: '5' },
  { id: '2', icon: 'calendar-outline', title: 'Reservas', badgeValue: '3' },
  { id: '3', icon: 'megaphone-outline', title: 'Anuncios' },
  { id: '4', icon: 'people-outline', title: 'Residentes' },
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Acceso Rápido</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Card icon={item.icon} title={item.title} badgeValue={item.badgeValue} />
        )}
        keyExtractor={(item) => item.id}
        numColumns={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.large,
    backgroundColor: theme.colors.background,
  },
  text: {
    color: theme.colors.text,
    fontSize: theme.fontSizes.large,
    marginBottom: theme.spacing.medium,
    fontFamily: theme.fonts.semibold
  },
});

export default HomeScreen;
