import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import DoneSVG from '../../assets/goal/DoneSVG';
import DeleteSVG from '../../assets/goal/DeleteSVG';
import FoodSVG from '../../assets/categories/FoodSVG';
import ShopingSVG from '../../assets/categories/ShopingSVG';
import HousingSVG from '../../assets/categories/HousingSVG';
import TransportSVG from '../../assets/categories/TransportSVG';
import EntertainmentSVG from '../../assets/categories/EntertainmentSVG';
import AppearanceSVG from '../../assets/categories/AppearanceSVG';
import FinanceSVG from '../../assets/categories/FinanceSVG';
import InvestmentsSVG from '../../assets/categories/InvestmentsSVG';

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

const GoalCard = ({ item, onDone, onDelete, onPress }) => {
    const renderRightActions = () => (
        <View style={styles.rightActionsContainer}>
            <View style={{ width: 16 }} />
            <TouchableOpacity style={styles.doneButton} onPress={() => onDone(item.id)}>
                <DoneSVG />
            </TouchableOpacity>
            <View style={{ width: 16 }} />
            <TouchableOpacity style={styles.deleteButton} onPress={() => onDelete(item.id)}>
                <DeleteSVG />
            </TouchableOpacity>
        </View>
    );

    const IconComponent = iconMapping[item.category.toLowerCase()];

    return (
        <Swipeable renderRightActions={renderRightActions} overshootFriction={8}>
            <TouchableOpacity activeOpacity={0.8} onPress={() => onPress && onPress(item)}>
                <View style={styles.goalCard}>
                    <View style={styles.rowContainer}>
                        <View style={styles.iconContainer}>
                            {IconComponent ? <IconComponent width={35} height={35} /> : null}
                        </View>
                        <View style={styles.textContainer}>
                            <View style={styles.topRow}>
                                <Text style={styles.nameText}>{item.name}</Text>
                                <Text style={styles.priceText}>${parseFloat(item.price).toFixed(2)}</Text>
                            </View>
                            <View style={styles.bottomRow}>
                                <Text style={styles.categoryText}>{item.category}</Text>
                                <Text style={styles.dateText}>{item.deadline}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </Swipeable>
    );
};

const styles = StyleSheet.create({
    goalCard: {
        height: 66,
        justifyContent: 'center',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#2B323B',
        backgroundColor: '#20252C',
        padding: 15,
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        width: 35,
        height: 35,
        borderRadius: 999,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContainer: {
        flex: 1,
        marginLeft: 8,
        justifyContent: 'center',
    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    bottomRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 2,
    },
    nameText: {
        fontFamily: 'Avenir',
        fontWeight: '500',
        fontSize: 15,
        color: '#FFFFFF',
    },
    priceText: {
        fontFamily: 'Avenir',
        fontWeight: '500',
        fontSize: 15,
        color: '#FFFFFF',
    },
    categoryText: {
        fontFamily: 'Avenir',
        fontWeight: '400',
        fontSize: 10,
        color: '#ACACAC',
    },
    dateText: {
        fontFamily: 'Avenir',
        fontWeight: '400',
        fontSize: 10,
        color: '#FB8484',
    },
    rightActionsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    doneButton: {
        width: 30,
        height: 30,
        borderRadius: 10,
        backgroundColor: '#96FB84',
        alignItems: 'center',
        justifyContent: 'center',
    },
    deleteButton: {
        width: 30,
        height: 30,
        borderRadius: 10,
        backgroundColor: '#FB8484',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default GoalCard;
