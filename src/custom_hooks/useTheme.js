import { useSelector } from "react-redux";

const themeVars = {
  dark: {
    masterBackground: "black",
    articleBackground: "rgba(0, 0, 0, 0.8)",
    textAndEls: "white",
    iconBrightness: "brightness(1)",
    menuTextColor: "0 0 0 rgb(20, 20, 20)",
    textStroke: "2px #000",
    logoShadow:
      "drop-shadow(0 0 5px rgb(236, 12, 199)) drop-shadow(0 0 10px rgb(199, 12, 236))",
    logoStrokeColored: "#CC20FF",
    logo1Brightness: "brightness(2)",
    logo2Brightness: "brightness(1.5)",
    shardShadow: "drop-shadow(30px 30px 9px rgba(0, 0, 0, 0.4))",
    shardsBrightness: "brightness(1.2)",
    gridBrightness: "brightness(1.3)",
    vignetteOpacity: 1,
  },
  light: {
    masterBackground: "#d9d9d9",
    articleBackground: "rgba(255, 255, 255, 0.9)",
    textAndEls: "black",
    iconBrightness: "brightness(0)",
    menuTextColor: "0 0 0 rgb(210, 210, 210)",
    textStroke: "2px #B5B5B5",
    logoShadow: "none",
    logoStrokeColored: "#9408A3",
    logo1Brightness: "brightness(0)",
    logo2Brightness: "brightness(1)",
    shardShadow: "drop-shadow(30px 30px 9px rgba(0, 0, 0, 0.1))",
    shardsBrightness: "brightness(12)",
    gridBrightness: "brightness(12)",
    vignetteOpacity: 0.7,
  },
};

export default function useTheme() {
  const colorTheme = useSelector((state) => state.colorTheme.theme);

  return {
    theme: colorTheme,
    colors: {
      masterBackground: themeVars[colorTheme].masterBackground,
      articleBackground: themeVars[colorTheme].articleBackground,
      textAndEls: themeVars[colorTheme].textAndEls,
      menuTextColor: themeVars[colorTheme].menuTextColor,
      textStroke: themeVars[colorTheme].textStroke,
      logoStrokeColored: themeVars[colorTheme].logoStrokeColored,
    },
    brightnessModes: {
      iconBrightness: themeVars[colorTheme].iconBrightness,
      shardsBrightness: themeVars[colorTheme].shardsBrightness,
      gridBrightness: themeVars[colorTheme].gridBrightness,
      logo1Brightness: themeVars[colorTheme].logo1Brightness,
      logo2Brightness: themeVars[colorTheme].logo2Brightness,
    },
    shadows: {
      logoShadow: themeVars[colorTheme].logoShadow,
      shardShadow: themeVars[colorTheme].shardShadow,
    },
    opacities: {
      vignetteOpacity: themeVars[colorTheme].vignetteOpacity,
    }
  };
}
