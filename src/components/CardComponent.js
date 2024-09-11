import React from 'react';
import { View, Text, StyleSheet, Dimensions,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Badge } from 'react-native-elements';
import theme from '../theme/theme';

const { width } = Dimensions.get('window');
const CARD_WIDTH = (width / 3) - (theme.spacing.large * 1.5);

const CardComponent = ({ icon, title, badgeValue, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <View>
        <Icon name={icon} size={32} color={theme.colors.secondaryContainer} style={styles.icon} />
        {parseInt(badgeValue) > 0 && (
          <Badge containerStyle={styles.badgeContainer} badgeStyle={styles.badge} textStyle={styles.badgeText} value={badgeValue} />
        )}
      </View>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing.medium,
    margin: theme.spacing.small,
    borderRadius: theme.spacing.small,
    backgroundColor: theme.colors.background,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: theme.spacing.small,
    elevation: 5,
    width: CARD_WIDTH,
    height: CARD_WIDTH,
    backgroundColor: theme.colors.tertiaryContainer,
  },
  icon: {
    width: 32,
    height: 32,
  },
  badgeContainer: {
    position: 'absolute',
    top: -4,
    right: -4,
  },
  badgeText: {
    fontSize: theme.fontSizes.small,
    color: theme.colors.onPrimary,
  },
  text: {
    fontSize: theme.fontSizes.small,
    color: theme.colors.secondaryContainer,
  },
  badge: {
    borderColor: theme.colors.primary,
    backgroundColor: theme.colors.primary,
    width: 20,
    height: 20,
  },
});

export default CardComponent;
