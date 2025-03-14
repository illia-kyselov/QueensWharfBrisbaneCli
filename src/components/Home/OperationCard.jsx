import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import FoodSVG from '../../assets/categories/FoodSVG';
import ShopingSVG from '../../assets/categories/ShopingSVG';
import HousingSVG from '../../assets/categories/HousingSVG';
import TransportSVG from '../../assets/categories/TransportSVG';
import EntertainmentSVG from '../../assets/categories/EntertainmentSVG';
import AppearanceSVG from '../../assets/categories/AppearanceSVG';
import FinanceSVG from '../../assets/categories/FinanceSVG';
import InvestmentsSVG from '../../assets/categories/InvestmentsSVG';
import CrownsPng from '../../assets/home/crowns.png';

const iconMapping = {
    food: FoodSVG,
    shopping: ShopingSVG,
    housing: HousingSVG,
    transport: TransportSVG,
    entertainment: EntertainmentSVG,
    appearance: AppearanceSVG,
    finance: FinanceSVG,
    investments: InvestmentsSVG,
};

const OperationCard = ({ operation, isModal }) => {
    const IconComponent = iconMapping[operation.category.toLowerCase()] || null;
    const containerStyle = [
        styles.card,
        isModal && { backgroundColor: '#FFFFFF', borderColor: '#E3E3E3' },
    ];

    const titleStyle = [styles.cardTitle, isModal && { color: '#000000' }];
    const priceStyle = [styles.cardPrice, isModal && { color: '#000000' }];
    const categoryStyle = [styles.cardCategory, isModal && { color: '#4C4C4C' }];
    const dateStyle = [styles.cardDate, isModal && { color: '#4C4C4C' }];

    return (
        <View style={containerStyle}>
            {!isModal && <Image source={CrownsPng} style={styles.cardBackgroundImage} />}
            <View style={styles.cardContent}>
                {IconComponent && (
                    <View style={styles.iconContainer}>
                        <IconComponent width={35} height={35} />
                    </View>
                )}
                <View style={{ flex: 1 }}>
                    <View style={styles.topRow}>
                        <Text style={titleStyle}>{operation.title}</Text>
                        <Text style={priceStyle}>
                            {operation.type === 'Pay' ? '-' : ''}${operation.amount.toFixed(2)}
                        </Text>
                    </View>
                    <View style={styles.bottomRow}>
                        <Text style={categoryStyle}>{operation.category}</Text>
                        <Text style={dateStyle}>{operation.date}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        height: 66,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#2B323B',
        backgroundColor: '#20252CE5',
        padding: 15,
        justifyContent: 'center',
        marginBottom: 10,
        position: 'relative',
    },
    cardBackgroundImage: {
        position: 'absolute',
        right: 96,
        bottom: 0,
        resizeMode: 'contain',
    },
    cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        width: 35,
        height: 35,
        borderRadius: 999,
        marginRight: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 2,
    },
    cardTitle: {
        fontFamily: 'Avenir',
        fontWeight: '500',
        fontSize: 15,
        color: '#FFFFFF',
    },
    cardPrice: {
        fontFamily: 'Avenir',
        fontWeight: '500',
        fontSize: 15,
        color: '#FFFFFF',
    },
    bottomRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cardCategory: {
        fontFamily: 'Avenir',
        fontWeight: '400',
        fontSize: 10,
        color: '#ACACAC',
    },
    cardDate: {
        fontFamily: 'Avenir',
        fontWeight: '400',
        fontSize: 10,
        color: '#ACACAC',
    },
});

export default OperationCard;
