import { Alert, PermissionsAndroid, Platform } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { useDispatch } from 'react-redux';
import { setAvatarUri } from '../store/slices/userSlice';

const useAvatarPicker = () => {
    const dispatch = useDispatch();

    const requestPermission = async () => {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                    {
                        title: 'Permission required',
                        message: 'Permission to access gallery is required!',
                        buttonPositive: 'OK',
                    }
                );
                return granted === PermissionsAndroid.RESULTS.GRANTED;
            } catch (err) {
                console.warn(err);
                return false;
            }
        }
        return true;
    };

    const selectAvatar = async () => {
        const hasPermission = await requestPermission();
        if (!hasPermission) {
            Alert.alert(
                'Permission required',
                'Permission to access gallery is required!'
            );
            return;
        }

        const result = await launchImageLibrary({
            mediaType: 'photo',
            quality: 1,
        });

        if (result && result.assets && result.assets.length > 0) {
            dispatch(setAvatarUri(result.assets[0].uri));
        }
    };

    return selectAvatar;
};

export default useAvatarPicker;
