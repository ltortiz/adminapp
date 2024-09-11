import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import theme from '../theme/theme';

const CustomButton = ({ onPress, backgroundColor = theme.colors.primary, textColor = theme.colors.onPrimary, title }) => (
    <TouchableOpacity
        style={[styles.button, { backgroundColor }]}
        onPress={onPress}
    >
        <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
        padding: theme.spacing.medium,
        borderRadius: 8,
        alignItems: 'center',
        width: '100%',
    },
    buttonText: {
        fontSize: theme.fontSizes.medium,
        fontFamily: theme.fonts.semibold,
    },
});

export default CustomButton;
