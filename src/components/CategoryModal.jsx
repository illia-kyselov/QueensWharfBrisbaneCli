import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Dimensions } from 'react-native';
import Modal from 'react-native-modal';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

import FoodSVG from '../assets/categories/FoodSVG';
import ShopingSVG from '../assets/categories/ShopingSVG';
import HousingSVG from '../assets/categories/HousingSVG';
import TransportSVG from '../assets/categories/TransportSVG';
import EntertainmentSVG from '../assets/categories/EntertainmentSVG';
import AppearanceSVG from '../assets/categories/AppearanceSVG';
import FinanceSVG from '../assets/categories/FinanceSVG';
import InvestmentsSVG from '../assets/categories/InvestmentsSVG';

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

const CategoryModal = ({ isVisible, onClose, onSelect }) => {
    const categories = useSelector((state) => state.categories);
    const insets = useSafeAreaInsets();
    const windowHeight = Dimensions.get('window').height;
    const modalHeight = windowHeight - insets.top;

    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={onClose}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            swipeDirection="down"
            backdropOpacity={0.5}
            useNativeDriver={true}
            style={styles.modal}
        >
            <View style={[styles.modalContainer, { height: modalHeight }]}>
                <View style={styles.modalHandle} />
                <Text style={styles.title}>All categories</Text>
                <FlatList
                    data={categories}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => {
                        const IconComponent = iconMapping[item.icon];
                        return (
                            <TouchableOpacity style={styles.categoryCard} onPress={() => onSelect(item)}>
                                <View style={styles.iconContainer}>
                                    {IconComponent ? <IconComponent width={30} height={30} /> : null}
                                </View>
                                <Text style={styles.categoryText}>{item.name}</Text>
                            </TouchableOpacity>
                        );
                    }}
                    contentContainerStyle={{ paddingBottom: 20 }}
                />
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modal: {
        margin: 0,
        justifyContent: 'flex-end',
    },
    modalContainer: {
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingHorizontal: 20,
    },
    title: {
        fontFamily: 'Avenir',
        fontWeight: '500',
        fontSize: 15,
        color: '#000000',
        marginBottom: 10,
    },
    categoryCard: {
        height: 50,
        borderRadius: 14,
        padding: 10,
        backgroundColor: '#20252C',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    iconContainer: {
        width: 30,
        height: 30,
        borderRadius: 999,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    categoryText: {
        fontFamily: 'Avenir',
        fontWeight: '400',
        fontSize: 14,
        color: '#FFFFFF',
    },
    modalHandle: {
        width: 40,
        height: 4,
        backgroundColor: '#20252C',
        borderRadius: 999,
        alignSelf: 'center',
        marginTop: 5,
        marginBottom: 25,
    },
});

export default CategoryModal;
