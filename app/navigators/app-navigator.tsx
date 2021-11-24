/**
 * The app navigator (formerly "AppNavigator" and "MainNavigator") is used for the primary
 * navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow which the user will use once logged in.
 */
import React from "react"
import { useColorScheme,Text } from "react-native"
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { WelcomeScreen, DemoScreen, DemoListScreen, ProfileScreen, SigninScreen, SignupScreen, PdfViewScreen, MapViewScreen, MapGeoScreen, QrCodeGeneratorScreen, QrCodeScannerCameraScreen, LiveChatScreen, LiveMessageScreen, AllProjectsScreen } from "../screens"
import { navigationRef } from "./navigation-utilities"
import { PdfReaderScreen } from "../screens/pdf-view/pdf-reader/pdf-reader-screen"

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`. Generally speaking, we
 * recommend using your MobX-State-Tree store(s) to keep application state
 * rather than passing state through navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 */
export type NavigatorParamList = {
  welcome: undefined
  demo: undefined
  demoList: undefined
  profile : undefined
  signin : undefined
  signup : undefined
  pdf_view: undefined
  pdf_reader : undefined
  map_view : undefined
  map_geo: undefined
  qr_code_g:undefined
  qr_code_scanner:undefined
  live_chat:undefined
  live_message : undefined
  all_projects : undefined
}

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createNativeStackNavigator<NavigatorParamList>()

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="all_projects"
    >
                  <Stack.Screen name="pdf_reader" component={PdfReaderScreen} />

            <Stack.Screen name="pdf_view" component={PdfViewScreen} />
            <Stack.Screen name="map_view" component={MapViewScreen} />
            <Stack.Screen name="map_geo" component={MapGeoScreen} />

            <Stack.Screen name="signin" component={SigninScreen} />

      <Stack.Screen name ="profile" component={ProfileScreen}/>

      <Stack.Screen name="welcome" component={WelcomeScreen} />
      <Stack.Screen name="demo" component={DemoScreen} />
      <Stack.Screen name="demoList" component={DemoListScreen} />
      <Stack.Screen name="signup" component={SignupScreen} />
      <Stack.Screen name="qr_code_g" component={QrCodeGeneratorScreen} />
      <Stack.Screen name="qr_code_scanner" component={QrCodeScannerCameraScreen} />
      <Stack.Screen name="live_chat" component={LiveChatScreen} />
      <Stack.Screen name="live_message" component={LiveMessageScreen} />
      <Stack.Screen name="all_projects" component={AllProjectsScreen} />



    </Stack.Navigator>
  )
}

interface NavigationProps extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = (props: NavigationProps) => {
  const colorScheme = useColorScheme()
  return (
    <NavigationContainer
      ref={navigationRef}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      {...props}
    >
      <AppStack />
    </NavigationContainer>
  )
}

AppNavigator.displayName = "AppNavigator"

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 *
 * `canExit` is used in ./app/app.tsx in the `useBackButtonHandler` hook.
 */
const exitRoutes = ["all_projects"]
export const canExit = (routeName: string) => exitRoutes.includes(routeName)
