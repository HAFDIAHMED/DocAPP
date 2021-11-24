import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { ButtonProject, Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import { TouchableOpacity } from "react-native-gesture-handler"
import Icon from "react-native-vector-icons/Ionicons"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
}

export const AllProjectsScreen = observer(function AllProjectsScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={ROOT} preset="scroll">
      <Text preset="header" text="All Projects" style={{alignSelf:'center'}} />
      <TouchableOpacity style={OPEN_PROJECT}>
        <Icon name ="home" color='white'  size={30}/> 
        <Text style={{margin:10}}>Home</Text>
      </TouchableOpacity>
      <ButtonProject  textLabel="hello" iconName={"home"} iconColor={"black"} iconSize={40} />
    </Screen>
  )
})

const OPEN_PROJECT :ViewStyle={
  flexDirection:'row',
  alignItems:'center',
  borderWidth:1,
  alignSelf:'center',
  borderRadius:20,
  backgroundColor:'orange',
  padding:10,
}