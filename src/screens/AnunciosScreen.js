import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CardLargeAnuncio from '../components/CardLargeAnuncio';
import CardSmallAnuncio from '../components/CardSmallAnuncio';
import theme from '../theme/theme';
import { useNavigation } from '@react-navigation/native';

const AnunciosScreen = () => {
    const navigation = useNavigation();

    const destacado = {
        id: '1',
        image: 'https://bbqlife.es/BBQPedia/Consejos/img/Consejos-comprar-Barbacoa-carbon.jpg',
        title: 'Barbacoa en mantenimiento',
        description: 'Queremos informarles que la barbacoa comunal ubicada en la Torre 1 - Piso 32 está actualmente fuera de servicio debido a un problema técnico que requiere reparación. Estamos trabajando arduamente para resolver la situación lo más pronto posible y nos comprometemos a mantenerles actualizados sobre el progreso de las reparaciones. La situación ha sido más compleja de lo previsto y es posible que el tiempo de inactividad sea más largo de lo inicialmente estimado. Por favor, tengan en cuenta que estamos realizando todos los esfuerzos necesarios para que la barbacoa vuelva a estar operativa en el menor tiempo posible. Mientras tanto, les pedimos disculpas por cualquier inconveniente que esto pueda causar y les agradecemos profundamente su comprensión y paciencia. Sabemos que la barbacoa es un espacio muy apreciado por todos y entendemos la importancia de contar con este servicio. Si tienen alguna pregunta o necesitan asistencia adicional, no duden en contactarnos a través de nuestros canales de atención al cliente. Estamos aquí para ayudarles en lo que necesiten y les agradecemos por su cooperación mientras solucionamos este inconveniente. Les mantendremos informados con actualizaciones regulares sobre el estado de la reparación y la fecha estimada de reapertura. Agradecemos su comprensión y apoyo continuo.',
    };

    const hoyData = [
        {
            id: '1',
            title: 'Fiesta de talento por torres',
            description: 'Únete a nosotros para una emocionante fiesta de talento en la que residentes de todas las torres podrán mostrar sus habilidades y talentos. Habrá música, danza, y muchas sorpresas. ¡No te lo pierdas!',
            image: 'https://www.pioneerdj.com/-/media/pioneerdj/images/news/2019/learn-how-to-dj-online/learnhowtodj_article.png?h=630&w=1200&hash=384F58B20E867AB51E52FDF3D768AE91',
        },
        {
            id: '2',
            title: 'Mantenimiento del ascensor Torre 3',
            description: 'El ascensor de la Torre 3 estará fuera de servicio para realizar tareas de mantenimiento esenciales. La reparación se llevará a cabo el próximo martes de 9:00 a 16:00. Pedimos disculpas por cualquier inconveniente y agradecemos su comprensión.',
            image: 'https://www.tecnoseguro.com/media/xt-adaptive-images/480/media/k2/items/cache/44b8e294b797b5cf0e8d4bc59cfd40e3_XL.webp',
        },
        {
            id: '3',
            title: 'Aseo general Torre A',
            description: 'Se realizará un aseo general en la Torre A para asegurar la limpieza y el mantenimiento óptimo de las áreas comunes. La limpieza comenzará el miércoles a las 8:00 y se espera que finalice a mediodía. Durante este tiempo, el acceso a algunas áreas puede estar restringido.',
            image: 'https://maxilimpieza.com.co/wp-content/uploads/2019/04/aseo-productos.jpg',
        },
        {
            id: '4',
            title: 'Mantenimiento a la piscina',
            description: 'La piscina comunitaria estará cerrada por mantenimiento durante el fin de semana para realizar mejoras y asegurar su funcionamiento adecuado. La reapertura está programada para el lunes. Agradecemos su paciencia y comprensión.',
            image: 'https://www.piscinasferromar.com/blog/wp-content/uploads/2022/09/agua-piscina.jpg',
        },
    ];

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
