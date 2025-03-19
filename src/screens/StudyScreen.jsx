import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import CustomModal from '../components/CustomModal';
import StudyCard from '../components/Study/StudyCard';

const StudyScreen = () => {
    const items = useSelector((state) => state.study.items);
    const [selectedItem, setSelectedItem] = useState(null);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Study</Text>
            <FlatList
                data={items}
                keyExtractor={(item) => item.title}
                numColumns={2}
                columnWrapperStyle={styles.cardsContainer}
                renderItem={({ item }) => (
                    <StudyCard
                        name={item.name}
                        imageUri={item.image_link}
                        onPress={() => setSelectedItem(item)}
                    />
                )}
            />
            {selectedItem && (
                <CustomModal
                    isVisible={!!selectedItem}
                    name={selectedItem.name}
                    description={selectedItem.text}
                    onClose={() => setSelectedItem(null)}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#20252C',
        paddingTop: 10,
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
    },
    title: {
        textAlign: 'center',
        marginBottom: 26,
        fontWeight: '500',
        fontSize: 16,
        color: '#FFFFFF',
    },
    cardsContainer: {
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
});

export default StudyScreen;
