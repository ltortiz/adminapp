import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import theme from '../theme/theme';

const CardLargeAnuncio = ({ image, title, description, onPress }) => (
  <TouchableOpacity style={styles.largeCard} onPress={onPress}>
    <Image source={{ uri: image }} style={styles.largeImage} />
    <View style={styles.largeContent}>
      <Text style={styles.largeTitle}>{title}</Text>
      <Text style={styles.largeDescription}>
        {description.length > 130 ? (
          <>
            {description.slice(0, 130)}
            <Text style={styles.moreLink}> ... Ver más</Text>
          </>
        ) : (
          description
        )}
      </Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  largeCard: {
    marginRight: theme.spacing.extraSmall,
    marginLeft: theme.spacing.extraSmall,
    marginBottom: theme.spacing.large,
    padding: theme.spacing.medium,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: 'white',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    minHeight: 230,
  },
  largeImage: {
    width: '100%',
    height: 120,
    borderRadius: 8,
  },
  largeContent: {
    paddingTop: theme.spacing.medium,
  },
  largeTitle: {
    fontSize: theme.fontSizes.medium,
    lineHeight: theme.fontSizes.extraLarge,
    fontFamily: theme.fonts.semibold,
    fontWeight: '900',
    marginBottom: theme.spacing.extraSmall,
    color: theme.colors.onSurface
  },
  largeDescription: {
    fontSize: theme.fontSizes.small,
    lineHeight: theme.fontSizes.medium,
    fontFamily: theme.fonts.regular,
    fontWeight: 'normal',
    color: theme.colors.onSurface
  },
  moreLink: {
    color: theme.colors.success,
    fontWeight: '900',
    fontStyle: 'italic',
  },
});

export default CardLargeAnuncio;
