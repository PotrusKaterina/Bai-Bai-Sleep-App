
import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';
import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage';
import ImagePicker from 'react-native-image-picker';
import { setUserPhoto } from './redux/userActions';

export const AccountScreen = () => {

    const user = useSelector(state => state.user, shallowEqual);
    const dispatch = useDispatch();
    const changeUserPhoto = () => {
        try {
            ImagePicker.launchImageLibrary(
                {
                    mediaType: 'photo',
                    includeBase64: true,
                    quality: 0.3,
                },
                async (response) => {
                    dispatch(setUserPhoto(response.data))
                    await AsyncStorage.setItem('user', JSON.stringify({ name: user.name, photo: response.data }));
                },
            );
        } catch (error) {
            console.warn("AsyncStorage setItem in registration screen ", error);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.avatarAndNameContainer}>
                <View style={styles.avatarContainer}>
                    {user.photo ? <Image source={{ uri: `data:image/gif;base64,${user.photo}` }} style={styles.avatar} />
                        : <Image source={require('../../assets/images/mamaimalish1.jpg')} style={styles.avatar} />}
                    <TouchableOpacity onPress={changeUserPhoto} style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>Change photo</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.nameContainer}>
                    <Text numberOfLines={1} style={styles.nameText}>{user.name}</Text>
                </View>
            </View>
            <View style={{ flex: 1 }} />
        </View >
    );
};

export default AccountScreen;