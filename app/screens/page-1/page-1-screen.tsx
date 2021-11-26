import React, { FC, useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { Button, Screen, Text } from "../../components"
 import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import { NavigationInjectedProps } from "react-navigation";
import { TextInput } from "react-native-gesture-handler"
import metrics from "../../theme/metrics"


export interface Page1Props extends NavigationInjectedProps<{}> {
    
} //u should create a interface of props 

export const Page1Screen :FC<Page1Props> = observer(function Page1Screen(props)  {// then use the interface for the functional component
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  //const navigation = useNavigation()
  const [prayTimes,setPrayTimes]=useState([""])

  const GetPrayerTimes= async()=>{
    try {
        const response= await fetch("https://api.pray.zone/v2/times/today.json/?city=kenitra");
        const json = await response.json()
       // console.log(json.results.datetime)
        setPrayTimes(json.results.datetime)
    }catch(error){
      console.error(error)
    }
  }
  useEffect(()=>{
    //GetPrayerTimes()
    console.log(prayTimes[0].times.Imsak)
    console.log("hello")
  })
  return (
    <Screen style={ROOT} preset="scroll">
      <Text preset="header" text="page 1" style={{alignSelf:'center'}} />
      <View style={CITY_INPUT}>
        <TextInput  placeholder ="Enter Your City"/>
      </View>
      <Text> Imsak : {prayTimes[0].times.Imsak}</Text>

    </Screen>
  )
})
const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
}
const CITY_INPUT :ViewStyle={
  borderWidth:1,
  backgroundColor:'white',
  borderRadius: 20,
  margin:metrics.widthPercentageToDP(2),
}