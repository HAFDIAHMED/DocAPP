import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { Button, Screen, Text } from "../../components"
 import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import { NavigationInjectedProps } from "react-navigation";

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
}
export interface Page1Props extends NavigationInjectedProps<{}> {
    
} //u should create a interface of props 

export const Page1Screen :FC<Page1Props> = observer(function Page1Screen(props)  {// then use the interface for the functional component
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  //const navigation = useNavigation()
  return (
    <Screen style={ROOT} preset="scroll">
      <Text preset="header" text="page 1" />
      <Button text="go to page 2" onPress={()=>props.navigation.navigate("page_2")} />
    </Screen>
  )
})
