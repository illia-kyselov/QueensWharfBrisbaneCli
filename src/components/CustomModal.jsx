import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { SafeAreaView } from 'react-native';

const CustomModal = ({ isVisible, name, description, onClose, closeButtonText = "Close" }) => {
    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={onClose}
            onSwipeComplete={onClose}
            swipeDirection="down"
            style={styles.modalContainer}
            propagateSwipe
        >
            <View style={styles.container}>
                <SafeAreaView style={styles.safeAreaTop}>
                    <View style={styles.modalContent}>
                        <View style={styles.swipeIndicator} />
                        <Text style={styles.modalTitle}>{name}</Text>
                        <ScrollView style={styles.modalScroll}>
                            <Text style={styles.modalText}>{description}</Text>
                        </ScrollView>
                    </View>
                </SafeAreaView>
                <SafeAreaView style={styles.safeAreaBottom}>
                    <View style={styles.bottomBar}>
                        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                            <Text style={styles.closeButtonText}>{closeButtonText}</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        margin: 0,
        justifyContent: 'flex-end',
        backgroundColor: 'transparent',
    },
    container: {
        flex: 1,
    },
    safeAreaTop: {
        flex: 1,
        backgroundColor: '#20252C',
    },
    safeAreaBottom: {
        backgroundColor: '#FEF8E6',
    },
    modalContent: {
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingHorizontal: 30,
        paddingTop: 5,
        flex: 1,
        paddingBottom: 20,
    },
    swipeIndicator: {
        alignSelf: 'center',
        marginTop: 5,
        marginBottom: 40,
        width: 40,
        height: 4,
        borderRadius: 999,
        backgroundColor: '#20252C',
    },
    modalTitle: {
        fontWeight: '500',
        fontSize: 18,
        color: '#000000',
        textAlign: 'left',
        marginBottom: 10,
    },
    modalScroll: {
        flexGrow: 1,
    },
    modalText: {
        fontSize: 14,
        color: '#000000',
        marginBottom: 15,
    },
    bottomBar: {
        height: 76,
        borderTopWidth: 1,
        borderTopColor: '#EEEEEE',
        padding: 10,
        justifyContent: 'center',
    },
    closeButton: {
        height: 40,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#F8C63D',
        backgroundColor: '#F8C63D',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#0A0D12',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
    },
    closeButtonText: {
        fontWeight: '800',
        fontSize: 14,
        color: '#000000',
    },
});

export default CustomModal;
