import React, { useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle,Animated, PanResponder, Button } from "react-native"
import { Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import {Picker} from '@react-native-picker/picker';
import metrics from "../../theme/metrics"
import Icon from "react-native-vector-icons/Ionicons"


export const ExamplesScreen = observer(function ExamplesScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  const [selectedLanguage,setSelectedLanguage]=useState("");
  const [translation, setTranslation] = useState(0);
  const position = new Animated.ValueXY();
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponderCapture : ()=> true ,
    onPanResponderGrant : ()=>{
          position.setOffset({
            x: position.x._value,
            y: position.y._value,
          });
          position.setValue({ x:0,y:0});
    },
    onPanResponderMove : Animated.event([
      null,
      { dx: position.x, dy:position.y},
    ],        {useNativeDriver: false}
    ),
    onPanResponderRelease : ()=>{
      position.flattenOffset();
    }
  })
  useEffect(() => {
    //setTranslation(80);
    
    for (let i = 0; i < 50; i++) {
      setTimeout(() => {
        setTranslation(i);
      }, 25 * i);
    }
    
    //new Array(5000).fill(0).map(() => console.log("JS thread busy!"))

  }, []);
  return (
    <Screen style={ROOT} preset="scroll">
      <Text preset="header" text="Animations" style={{alignSelf:'center'}} />
      {/*<Picker
      style={PICKER}
      selectedValue={selectedLanguage}
      onValueChange={(itemValue,itemIndex)=>{
        setSelectedLanguage(itemValue)
      }}
      mode="dropdown"

      >
        <Picker.Item label="Go" value="Go"/>
        <Picker.Item label="java" value="java"/>
      </Picker> */}
      <View
      style={{
        margin : metrics.heightPercentageToDP(3),
        width: 100,
        height: 100,
        backgroundColor: 'orange',
        transform: [{ translateX: translation }],
        justifyContent:'center',
      }}
    >
      <Text style={{alignSelf:'center'}}> Translating X </Text>
      </View>
      <View
      style={{
        margin : metrics.heightPercentageToDP(3),
        width: 100,
        height: 100,
        backgroundColor: 'green',
        transform: [{ translateY: translation }],
        justifyContent:'center',
      }}
    >
      <Text style={{alignSelf:'center'}}> Translating Y </Text>
      </View>
      <Animated.View 
      style={[{
        justifyContent:'center',
        margin : metrics.heightPercentageToDP(3),
        width: 100,
        height: 100,
        borderRadius:50,
        backgroundColor: 'red',
        //position : position.getLayout(),
      },position.getLayout()]}
      {...panResponder.panHandlers}
      >
        <Text style={{alignSelf:'center'}}>Move me </Text>
        <Image  source ={require("../../../assets/images/basket_ball_png.png")}/>
      </Animated.View>
      <Icon  name="walk" size={50} color="white" style={{
        margin : metrics.heightPercentageToDP(3),
        
        
        transform: [{ translateX: translation }],
        justifyContent:'center',}}/>

    </Screen>
  )
})


const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
}
const PICKER : ViewStyle={
  backgroundColor: "white",
  borderRadius:20,
  marginHorizontal:metrics.widthPercentageToDP(2),
}
