import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import theme from '../theme/theme';

const CardSmallAnuncio = ({ image, title, onPress }) => (
  <TouchableOpacity style={styles.smallCard} onPress={onPress}>
    <Image source={{ uri: image }} style={styles.smallImage} />
    <View style={styles.descriptionContainer}>
      <Text style={styles.smallDescription}>
        {title.length > 25 ? (
          <>
            {title.slice(0, 25)}
            <Text style={styles.moreLink}> ... Ver más</Text>
          </>
        ) : (
          title
        )}
      </Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  smallCard: {
    marginRight: theme.spacing.extraSmall,
    marginLeft: theme.spacing.extraSmall,
    marginBottom: theme.spacing.medium,
    padding: theme.spacing.small,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: 'white',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    minHeight: 125,
    width: '45%',
  },
  smallImage: {
    width: '100%',
    height: 75,
    borderRadius: 8,
  },
  descriptionContainer: {
    paddingTop: theme.spacing.small,
  },
  smallDescription: {
    fontSize: theme.fontSizes.small,
    fontFamily: theme.fonts.regular,
    color: theme.colors.text,
  },
  moreLink: {
    color: theme.colors.success,
    fontWeight: '900',
    fontStyle: 'italic',
  },
});

export default CardSmallAnuncio;
