import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, TextInput, Dimensions } from 'react-native';
import Modal from 'react-native-modal';
import { SafeAreaView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const NoteModalHome = ({ isVisible, onClose, closeButtonText = "Save", description, onSave }) => {
    const [note, setNote] = useState(description || '');
    const insets = useSafeAreaInsets();
    const windowHeight = Dimensions.get('window').height;
    const modalHeight = windowHeight - insets.top;

    useEffect(() => {
        setNote(description || '');
    }, [description]);

    const handleSave = () => {
        if (onSave) onSave(note);
        onClose();
    };

    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={onClose}
            onSwipeComplete={onClose}
            style={styles.modal}
            useNativeDriver={true}
        >
            <View style={[styles.modalContainer, { height: modalHeight }]}>
                <View style={styles.modalHandle} />
                <View style={styles.contentContainer}>
                    <ScrollView contentContainerStyle={styles.scrollContent}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Note"
                            placeholderTextColor="rgba(0, 0, 0, 0.5)"
                            value={note}
                            onChangeText={setNote}
                            multiline
                        />
                    </ScrollView>
                </View>
                <SafeAreaView style={styles.safeAreaBottom}>
                    <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                        <Text style={styles.saveButtonText}>{closeButtonText}</Text>
                    </TouchableOpacity>
                </SafeAreaView>
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
    modalHandle: {
        width: 40,
        height: 4,
        backgroundColor: '#20252C',
        borderRadius: 999,
        alignSelf: 'center',
        marginTop: 5,
        marginBottom: 25,
    },
    contentContainer: {
        flex: 1,
    },
    scrollContent: {
        paddingBottom: 20,
    },
    textInput: {
        height: 160,
        width: '100%',
        fontSize: 14,
        color: '#000000',
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 15,
        elevation: 3,
    },
    safeAreaBottom: {
        padding: 10,
        backgroundColor: '#FEF8E6',
    },
    saveButton: {
        height: 40,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#F8C63D',
        backgroundColor: '#F8C63D',
        justifyContent: 'center',
        alignItems: 'center',
    },
    saveButtonText: {
        fontWeight: '800',
        fontSize: 14,
        color: '#000000',
    },
});

export default NoteModalHome;
