import { LayoutAnimation } from 'react-native'

export const useAnimation = () => {
    LayoutAnimation.configureNext({
        duration: 350,
        create:
        {
            type: LayoutAnimation.Types.easeInEaseOut,
            property: LayoutAnimation.Properties.opacity,
        },
        update:
        {
            type: LayoutAnimation.Types.easeInEaseOut,
        }
    });
}