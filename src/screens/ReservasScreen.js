import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../api/firebaseConfig';
import CardReserva from '../components/CardReserva';
import theme from '../theme/theme';
import { useNavigation } from '@react-navigation/native';

const tags = ['Todas', 'Barbacoa', 'Cancha', 'Sauna', 'Piscina', 'Salón Social'];

const ReservasScreen = () => {
    const navigation = useNavigation();
    const [reservas, setReservas] = useState([]);
    const [filteredReservas, setFilteredReservas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedTag, setSelectedTag] = useState('Todas');

    useEffect(() => {
        const fetchReservas = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'reservas'));
                const reservasData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setReservas(reservasData);
                setFilteredReservas(reservasData);
            } catch (error) {
                console.error('Error al obtener las reservas:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchReservas();
    }, []);

    useEffect(() => {
        if (selectedTag === 'Todas') {
            setFilteredReservas(reservas);
        } else {
            setFilteredReservas(reservas.filter(reserva => reserva.zona === selectedTag));
        }
    }, [selectedTag, reservas]);

    const handleTagPress = (tag) => {
        setSelectedTag(tag);
    };

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color={theme.colors.primary} />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Selecciona la zona que quieras filtrar</Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tagContainer}>
                {tags.map(tag => (
                    <TouchableOpacity
                        key={tag}
                        style={[
                            styles.tag,
                            selectedTag === tag && styles.selectedTag
                        ]}
                        onPress={() => handleTagPress(tag)}
                    >
                        <Text
                            style={[
                                styles.tagText,
                                selectedTag === tag && styles.selectedTagText
                            ]}
                        >
                            {tag}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            <ScrollView>
                {filteredReservas.length === 0 ? (
                    <View style={styles.noDataContainer}>
                        <Text style={styles.noDataText}>No hay reservas disponibles para esta zona.</Text>
                    </View>
                ) : (
                    <View style={styles.grid}>
                        {filteredReservas.map(item => (
                            <CardReserva
                                key={item.id}
                                zona={item.zona}
                                usuario={item.usuario}
                                apto={item.apto}
                                fecha={item.fecha}
                                estado={item.estado}
                                onPress={() => navigation.navigate('GestionarReserva', { item })}
                            />
                        ))}
                    </View>
                )}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: theme.spacing.medium,
        backgroundColor: theme.colors.background,
    },
    title: {
        fontSize: theme.fontSizes.medium,
        fontFamily: theme.fonts.semibold,
        fontWeight: '900',
        fontStyle: 'italic',
        marginBottom: theme.spacing.medium,
        color: theme.colors.success,
    },
    tagContainer: {
        marginBottom: theme.spacing.large,
    },
    tag: {
        backgroundColor: theme.colors.tertiary,
        borderRadius: 20,
        paddingVertical: 0,
        paddingHorizontal: 16,
        marginRight: 8,
        marginBottom: 8,
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
    },
    selectedTag: {
        backgroundColor: theme.colors.tertiaryContainer,
    },
    tagText: {
        fontSize: theme.fontSizes.small,
        color: theme.colors.onSurface,
    },
    selectedTagText: {
        color: theme.colors.onTertiary,
    },
    grid: {
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    noDataContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: theme.spacing.large,
    },
    noDataText: {
        fontSize: theme.fontSizes.medium,
        color: theme.colors.onSurface,
        textAlign: 'center',
    },
});

export default ReservasScreen;
