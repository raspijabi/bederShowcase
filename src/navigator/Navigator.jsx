import { createStackNavigator } from "@react-navigation/stack";
import { GreatDesign } from "../screens/GreatDesign";
import { HomeScreen } from "../screens/HomeScreen";
import { PublicAPIScreen } from "../screens/PublicAPIScreen";
import { Redux } from "../screens/Redux";


const Stack = createStackNavigator()

export const Navigator = () => {
    return(
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: 'white'
                }
            }}
        >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="PublicAPIScreen" component={PublicAPIScreen} />
            <Stack.Screen name="Redux" component={Redux} />
            <Stack.Screen name="GreatDesign" component={GreatDesign} />

        </Stack.Navigator>
    )
}