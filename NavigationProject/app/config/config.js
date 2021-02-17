const colors = {
    COLOR_GRAY: '#424242',
    COLOR_LIGHT_GRAY: '#B8B8B8',
    COLOR_MIDDLE_GRAY: '#787878',
    COLOR_WHITE: '#FFFFFF',
    COLOR_BLUE: '#43C5F9',
    COLOR_LIGHT_BLUE: '#B7E9F7',
    COLOR_MIDDLE_BLUE: '#0277BD',
    COLOR_DARK_BLUE: '#1292F8',
    COLOR_ROSE: '#F0686A',
    COLOR_GREEN: '#81AD00',
    COLOR_LIGHT_VIOLET: '#BF73B4',
    COLOR_DARK_VIOLET: '#4F1A44',
    COLOR_MIDDLE_VIOLET: '#73318B',
    COLOR_LIGHT_VIOLET_OPACITY: '#FAE4F7'
}

const screensNames = {
    SoundSleeper: "Sound Sleeper",
    SleepTracking: "Sleep Tracking",
    SoundSleeperU: "Sound Sleeper U",
    Settings: "Settings",
    MyGames: 'MyGames',
}

const textSize = {
    MIDLE: {
        fontSize: 15,
        lineHeight: 18,
    },
    BIG: {
        fontSize: 15,
        lineHeight: 18,
    }

}

export const config = {
    ...colors,
    ...screensNames,
    ...textSize,
}