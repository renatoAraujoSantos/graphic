import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert, ScrollView, Modal } from 'react-native';
import LottieView from 'lottie-react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { COLORS } from './constants';
import Dedo from '../assets/lotties/dedo.json';
import { GRAFIC_DATA } from './model/MockData';

export default function Grafic() {

    const [linhaPontilhada, setLinhaPontilhada] = useState('');
    const [telaCarregada, setTelaCarregada] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        async function loaderScreen() {
            let traco = '';
            for (let i = 0; i < 90; i++) {
                traco = `${traco} -`;
            }

            setLinhaPontilhada(traco);
            setTelaCarregada(true);
            setModalVisible(true);
        }
        loaderScreen();
        return () => {
            console.log('');
        }
    }, [])
    
    
    function renderHeader() {
        return (
            <View style={{ height: 50, marginTop: -40, backgroundColor: COLORS.white, borderTopLeftRadius: 40, borderTopRightRadius: 40, paddingVertical: 10 }} >
                <View style={{ flex: 1 }}>
                    <View style={{ alignItems: 'center', }}>
                        <Text style={{ fontSize: 27, color: COLORS.black, fontFamily: 'RobotoCondensed_700Bold' }}>{'Graphic'}</Text>
                    </View>
                </View>
            </View>
        )
    }

    function renderPontilhar(val) {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'flex-start', width: '100%' }} >
                <View style={{ flexDirection: 'row' }} >
                    <View style={{ justifyContent: 'center', alignItems: 'flex-start' }} >
                        <View style={{ justifyContent: 'center', alignItems: 'flex-start', marginRight: 20 }} >
                            <Text style={{ fontSize: 14, color: COLORS.black, fontFamily: 'RobotoCondensed_400Regular_Italic' }}>{`${val}`}</Text>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', }} >
                        <Text ellipsizeMode='clip' numberOfLines={1} style={{ fontSize: 14, color: COLORS.gray3, fontFamily: 'RobotoCondensed_700Bold' }}>{linhaPontilhada}</Text>
                    </View>
                </View>
            </View>
        )
    }

    function renderLegendaGrafic() {
        return (
            <View style={{ height: 80, justifyContent: 'flex-start', alignItems: 'flex-start', marginHorizontal: 10, marginTop: 30 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 5, }}>
                    <View style={{ width: '10%', justifyContent: 'center', alignItems: 'flex-start', }}>
                        <MaterialIcons name="circle" size={18} color={COLORS.blue1Grafico} />
                    </View>
                    <View style={{ width: '90%', justifyContent: 'center', alignItems: 'flex-start', }}>
                        <Text style={{ fontSize: 15, color: COLORS.black, fontFamily: 'RobotoCondensed_700Bold' }}>{'Finalized'}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 5, }}>
                    <View style={{ width: '10%', justifyContent: 'center', alignItems: 'flex-start', }}>
                        <MaterialIcons name="circle" size={18} color={COLORS.blue2} />
                    </View>
                    <View style={{ width: '90%', justifyContent: 'center', alignItems: 'flex-start', }}>
                        <Text style={{ fontSize: 15, color: COLORS.black, fontFamily: 'RobotoCondensed_700Bold' }}>{'Pending'}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                    <View style={{ width: '10%', justifyContent: 'center', alignItems: 'flex-start', }}>
                        <MaterialIcons name="circle" size={18} color={COLORS.red3} />
                    </View>
                    <View style={{ width: '90%', justifyContent: 'center', alignItems: 'flex-start', }}>
                        <Text style={{ fontSize: 15, color: COLORS.black, fontFamily: 'RobotoCondensed_700Bold' }}>{'Percentage'}</Text>
                    </View>
                </View>
            </View>
        )
    }

    function renderGrafic() {
        return (
            <View style={{ flex: 1, marginTop: 20, justifyContent: 'flex-end', }} >
                <View style={{ height: 260, width: '100%', alignItems: 'center', justifyContent: 'flex-end', backgroundColor: COLORS.transparent }} >
                    <View style={{ position: 'absolute', width: '100%', backgroundColor: COLORS.transparent }}>
                        <View style={{ height: 185, width: '100%', marginLeft: 20, backgroundColor: COLORS.transparent, }}>
                            <View style={{ position: 'absolute', left: 3, right: 10, bottom: '20%' }}>
                                <View style={{ justifyContent: 'center', alignItems: 'flex-start', marginBottom: 30 }} >
                                    {renderPontilhar('200')}
                                </View>
                                <View style={{ justifyContent: 'center', alignItems: 'flex-start', marginBottom: 30 }} >
                                    {renderPontilhar('150  ')}
                                </View>
                                <View style={{ justifyContent: 'center', alignItems: 'flex-start', marginBottom: 30 }} >
                                    {renderPontilhar('100  ')}
                                </View>
                                <View style={{ justifyContent: 'center', alignItems: 'flex-start', marginBottom: 30 }} >
                                    {renderPontilhar('50  ')}
                                </View>
                                <View style={{ justifyContent: 'center', alignItems: 'flex-start', }} >
                                    {renderPontilhar('0  ')}
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'flex-end', alignItems: 'center', marginRight: 0, marginLeft: 40, borderRadius: 15, }} >
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={true} persistentScrollbar={true}  >
                            <View style={{ flexDirection: 'row', height: '100%', width: '100%', justifyContent: 'center', alignItems: 'flex-end', marginHorizontal: 2, marginRight: 15, backgroundColor: COLORS.transparent }} >
                                {GRAFIC_DATA.map((item, index) => {
                                    let percentEficiencia = '10%';
                                    if (item.percentage >= 100) {
                                        percentEficiencia = '100%';
                                    } else if (item.percentage < 100 && item.percentage > 0) {
                                        percentEficiencia = `${item.percentage}%`;
                                    } else {
                                        percentEficiencia = '1%';
                                    }
                                    return (
                                        <View key={index} style={{ height: 250, flex: 1, marginHorizontal: 0, justifyContent: 'flex-end', alignItems: 'center', marginBottom: 5, backgroundColor: COLORS.transparent }}>
                                            <View style={{ height: 200, marginHorizontal: 0, justifyContent: 'flex-end', alignItems: 'center', }}>
                                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end' }}>
                                                    <View style={{ height: '100%', width: '3%', justifyContent: 'flex-end', backgroundColor: COLORS.transparent }} >
                                                        <Text style={{ fontSize: 8, color: COLORS.black, fontFamily: 'RobotoCondensed_300Light' }}>{'1'}</Text>
                                                    </View>
                                                    <View style={{ height: `${item.first_column}%`, width: '44%', justifyContent: 'flex-end', backgroundColor: COLORS.blue2Grafico, borderTopLeftRadius: 8, borderTopRightRadius: 8 }} >
                                                        <Text style={{ textAlign: 'center', fontSize: 16, color: COLORS.white, marginHorizontal: 4, fontFamily: 'RobotoCondensed_300Light' }}>{''}</Text>
                                                    </View>
                                                    <View style={{ height: `${item.second_column}%`, width: '44%', justifyContent: 'flex-end', backgroundColor: COLORS.blue1Grafico, borderTopLeftRadius: 8, borderTopRightRadius: 8 }} >
                                                        <Text style={{ textAlign: 'center', fontSize: 16, color: COLORS.white, marginHorizontal: 4, fontFamily: 'RobotoCondensed_300Light' }}>{''}</Text>
                                                    </View>
                                                </View>
                                                <View style={{ position: 'absolute', }}>
                                                    <View style={{ height: 185, justifyContent: 'center', alignItems: 'center', marginLeft: 20 }}>
                                                        <View style={{ position: 'absolute', bottom: percentEficiencia }}>
                                                            {item.second_column > 1 ?
                                                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.white4, borderRadius: 10 }}>
                                                                    <View style={{ width: '30%', justifyContent: 'center', alignItems: 'flex-end', marginVertical: 1, marginLeft: 2 }}>
                                                                        <MaterialIcons name="circle" size={18} color={COLORS.red3} />
                                                                    </View>
                                                                    <View style={{ width: '70%', justifyContent: 'center', alignItems: 'flex-start', }}>
                                                                        <Text style={{ fontSize: 16, color: COLORS.red3, fontFamily: 'RobotoCondensed_700Bold', marginRight: 5 }}>{`${item.percentage}%`}</Text>
                                                                    </View>
                                                                </View>
                                                                :
                                                                <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                                                                </View>
                                                            }
                                                        </View>
                                                    </View>
                                                </View>
                                            </View>
                                            <View style={{ height: 40, justifyContent: 'flex-start', alignItems: 'center' }} >
                                                <Text numberOfLines={2} style={{ width: 80, textAlign: 'center', fontSize: 15, color: COLORS.black, fontFamily: 'RobotoCondensed_700Bold' }}>{''}</Text>
                                            </View>
                                            <View style={{ position: 'absolute', bottom: 1, left: 1, }} >
                                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                                                    <View style={{ width: '50%', justifyContent: 'center', alignItems: 'center', }}>
                                                        <Text style={{ textAlign: 'center', fontSize: 16, color: COLORS.black, marginHorizontal: 4, fontFamily: 'RobotoCondensed_700Bold' }}>{item.first_column}</Text>
                                                    </View>
                                                    <View style={{ width: '50%', justifyContent: 'center', alignItems: 'center' }}>
                                                        <Text style={{ textAlign: 'center', fontSize: 16, color: COLORS.black, marginHorizontal: 4, fontFamily: 'RobotoCondensed_700Bold' }}>{item.second_column}</Text>
                                                    </View>
                                                </View>
                                                <Text numberOfLines={2} style={{ width: 80, textAlign: 'center', fontSize: 15, color: COLORS.black, fontFamily: 'RobotoCondensed_700Bold' }}>{item.month}</Text>
                                            </View>
                                        </View>
                                    )
                                })}
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View>
        )
    }


    function renderMao() {
        return (
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('modal foi fechado.');
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.centeredView}>
                        <LottieView
                            autoPlay={true}
                            style={{ width: 200, height: 200 }}
                            source={Dedo}
                            loop={false}
                            onAnimationFinish={() => { setModalVisible(false) }}
                        />
                    </View>
                </Modal>
            </View>
        )
    }

    if (!telaCarregada) {
        return (
            <View />
        )
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: COLORS.transparent }} >
                <View style={{ height: "11%", backgroundColor: COLORS.blue2Grafico }} />
                {renderHeader()}
                <ScrollView>
                    {renderLegendaGrafic()}
                    {renderGrafic()}
                </ScrollView>
                {renderMao()}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
});
