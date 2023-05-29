import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {    
    primary: "#F1782B", 
    secondary: "#ff8c00",    

    red: '#FF0000',
    red1: '#ffb3b3',
    red2: '#ff6666',
    red3: '#FF0000',
    red4: '#8B0000',
    red5: '#660000',

    gray: "#808080",
    gray1: "#DCDCDC",
    gray2: "#C0C0C0",
    gray3: "#808080",
    gray4: "#595959",
    gray5: "#333333",

    orange1: "#FDF5E6",
    orange2: "#ffc966",
    orange3: "#FFA500",
    orange4: "#e67e00",
    orange5: "#b35900",
    orange6: "#994d00",
    orangeLinht1: "#feebcd",

    white: "#FFFFFF",
    white2: "#f2f2f2",
    white3: "#e6e6e6",
    white4: "#cccccc",
    white5: "#b3b3b3",

    blue: '#42B0FF',
    blue1: '#99d5ff',
    blue2: '#42B0FF',
    blue3: '#0000FF',
    blue4: '#2626a6',
    blue5: '#191970',
    blue1Grafico: '#496ab6',
    blue2Grafico: '#1d2a49',

    green1: "#66ff66",
    green2: "#00cc00",
    green3: "#008000",
    green4: "#006600",
    green5: "#004d00",

    gold1: "#f5e4bb",
    gold2: "#edd189",
    gold3: "#DAA520",
    gold4: "#c88c20",
    gold5: "#8e6b14",


    black: "#1E1F20",
    gold: "#DAA520",
    //gold2: "#ffe033",
    yellow: '#FFFF00',
    aqua: '#00FFFF',
    purple: '#800080',
    lime: "#00FF00", // verde florecente
    transparent: 'transparent',

    realizada: "#00b300",
    realizada2: "#31df21",
    pendente: "#DAA520",
    atrasada: "#FF0000",
    naoRealizada: '#FF0000',
    arvoreChecada: '#059d70',
    arvoreNAOChecada: '#f9e5be',

    lightOverlayColor: 'rgba(255, 255, 255, 0.6)',
};

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,
    padding2: 36,

    // font sizes
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,

    // app dimensions
    width,
    height
};

export const FONTS = {
    largeTitle: { fontFamily: "Roboto_900Black", fontSize: SIZES.largeTitle, lineHeight: 55 },
    h1Italic: { fontFamily: "Roboto_700Bold_Italic", fontSize: 30, lineHeight: 36, },
    h1: { fontFamily: "Roboto_700Bold", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "Roboto_700Bold", fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: "Roboto_900Black", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "Roboto_900Black", fontSize: SIZES.h4, lineHeight: 22 },
    body1: { fontFamily: "Roboto_700Bold", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "Roboto_100Thin", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "Roboto_300Light", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "Roboto_900Black_Italic", fontSize: SIZES.body4, lineHeight: 22 },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;