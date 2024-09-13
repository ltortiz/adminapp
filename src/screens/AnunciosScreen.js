import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../api/firebaseConfig';
import CardLargeAnuncio from '../components/CardLargeAnuncio';
import CardSmallAnuncio from '../components/CardSmallAnuncio';
import theme from '../theme/theme';
import { useNavigation } from '@react-navigation/native';

const AnunciosScreen = () => {
    const navigation = useNavigation();
    const [hoyData, setAnuncios] = useState([]);
    const [destacado, setDestacado] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAnuncios = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'anuncios'));
                const anunciosData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setDestacado(anunciosData[0]);
                delete anunciosData[0];
                setAnuncios(anunciosData);
            } catch (error) {
                console.error('Error al obtener los anuncios:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchAnuncios();
    }, []);

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color={theme.colors.primary} />
            </View>
        );
    }

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Destacado</Text>
            <CardLargeAnuncio
                image={destacado.image}
                title={destacado.title}
                description={destacado.description}
                onPress={() => navigation.navigate('Detalle', { item: destacado })}
            />

            <Text style={styles.title}>Hoy</Text>
            <View style={styles.grid}>
                {hoyData.map(item => (
                    <CardSmallAnuncio
                        key={item.id}
                        image={item.image}
                        title={item.title}
                        onPress={() => navigation.navigate('Detalle', { item })}
                    />
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: theme.spacing.medium,
        backgroundColor: theme.colors.background,
    },
    title: {
        fontSize: theme.fontSizes.large,
        fontFamily: theme.fonts.semibold,
        fontWeight: '900',
        fontStyle: 'italic',
        marginBottom: theme.spacing.medium,
        color: theme.colors.success
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
});

export default AnunciosScreen;
