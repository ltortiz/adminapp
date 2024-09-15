import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';
import theme from '../theme/theme';

const { width } = Dimensions.get('window');

const UnderConstructionScreen = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../assets/construction-animation.json')}
        autoPlay
        loop
        style={styles.animation}
      />
      <Text style={styles.title}>¡Estamos trabajando!</Text>
      <Text style={styles.message}>
        Esta sección de la app está en construcción. ¡Volveremos pronto con algo increíble!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
  },
  animation: {
    width: width * 0.8,
    height: width * 0.8,
  },
  title: {
    fontSize: 28,
    fontFamily: theme.fonts.bold,
    color: theme.colors.primary,
    marginTop: theme.spacing.large,
  },
  message: {
    fontSize: theme.fontSizes.medium,
    color: theme.colors.secondaryContainer,
    textAlign: 'center',
    marginTop: theme.spacing.medium,
    paddingHorizontal: theme.spacing.large,
  },
});

export default UnderConstructionScreen;
