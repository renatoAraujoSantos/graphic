import { StatusBar } from 'expo-status-bar';
import { useCallback } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import Grafic from './src/Grafic';
import * as SplashScreen from 'expo-splash-screen';
import {
    RobotoCondensed_300Light,
    RobotoCondensed_300Light_Italic,
    RobotoCondensed_400Regular,
    RobotoCondensed_400Regular_Italic,
    RobotoCondensed_700Bold,
    RobotoCondensed_700Bold_Italic,
} from '@expo-google-fonts/roboto-condensed';


SplashScreen.preventAutoHideAsync();

export default function App() {
    const [fontsLoaded] = useFonts({
        //'Inter-Black': require('./assets/fonts/Inter-Black.otf'),
        RobotoCondensed_300Light,
        RobotoCondensed_300Light_Italic,
        RobotoCondensed_400Regular,
        RobotoCondensed_400Regular_Italic,
        RobotoCondensed_700Bold,
        RobotoCondensed_700Bold_Italic,
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.container} onLayout={onLayoutRootView}>
            <Grafic />
            <StatusBar style="light" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,        
    },
});