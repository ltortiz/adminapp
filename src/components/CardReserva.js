import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import theme from '../theme/theme';

const getStatusColor = (estado) => {
  switch (estado) {
    case 0:
      return theme.colors.disable;
    case 1:
      return theme.colors.success;
    case 2:
      return theme.colors.errorDos;
    default:
      // return theme.colors.default;
  }
};

const CardReserva = ({ zona, usuario, apto, fecha, estado, onPress }) => (
  <TouchableOpacity style={styles.largeCard} onPress={onPress}>
    <View style={styles.cardContent}>
      <View style={styles.textContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.largeTitle}>
            {zona}
          </Text>
          <View style={[styles.statusCircle, { backgroundColor: getStatusColor(estado) }]} />
        </View>
        <Text style={styles.secondaryText}>
          {usuario} - <Text style={styles.boldText}>{apto}</Text>
        </Text>
        <Text style={styles.italicText}>{fecha}</Text>
      </View>
      <Icon
        name="chevron-forward"
        size={32}
        color={theme.colors.onSurface}
        style={styles.chevron}
      />
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  largeCard: {
    marginRight: theme.spacing.extraSmall,
    marginLeft: theme.spacing.extraSmall,
    marginBottom: theme.spacing.medium,
    padding: theme.spacing.medium,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: 'white',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    width: "95%",
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  textContainer: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  largeTitle: {
    fontSize: theme.fontSizes.large,
    lineHeight: theme.fontSizes.extraLarge,
    fontFamily: theme.fonts.semibold,
    fontWeight: '900',
    marginRight: theme.spacing.small,
    color: theme.colors.onSurface,
  },
  statusCircle: {
    width: 16,
    height: 16,
    borderRadius: 50,
  },
  secondaryText: {
    fontSize: theme.fontSizes.medium,
    lineHeight: theme.fontSizes.large,
    marginTop: theme.spacing.medium,
    fontFamily: theme.fonts.regular,
    color: theme.colors.onSurface,
  },
  boldText: {
    fontWeight: 'bold',
  },
  italicText: {
    fontSize: theme.fontSizes.small,
    lineHeight: theme.fontSizes.small,
    fontStyle: 'italic',
    color: theme.colors.onSurface,
  },
  chevron: {
    marginLeft: theme.spacing.small,
  },
});

export default CardReserva;
