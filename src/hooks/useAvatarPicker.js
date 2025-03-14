import { Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useDispatch } from 'react-redux';
import { setAvatarUri } from '../store/slices/userSlice';

const useAvatarPicker = () => {
    const dispatch = useDispatch();

    const selectAvatar = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert(
                'Permission required',
                'Permission to access gallery is required!'
            );
            return;
        }
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
        });
        if (!result.canceled) {
            dispatch(setAvatarUri(result.assets[0].uri));
        }
    };

    return selectAvatar;
};

export default useAvatarPicker;
