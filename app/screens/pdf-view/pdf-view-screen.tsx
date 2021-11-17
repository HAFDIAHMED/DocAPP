import React from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, ViewStyle } from "react-native"
import { Button, Screen, Text } from "../../components"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import { SafeAreaView } from "react-native-safe-area-context"
import metrics from "../../theme/metrics"
import Share from "react-native-share";

import Icon from 'react-native-vector-icons/FontAwesome';

export const PdfViewScreen = observer(function PdfViewScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
   const navigation = useNavigation()
   const url = "https://awesome.contents.com/";
   const title = "Awesome Contents";
   const message = "Please check this out.";
   const options = {
    title,
    url,
    message,
  };
  const share = async (customOptions = options) => {
    try {
      await Share.open(customOptions);
    } catch (err) {
      console.log(err);
    }
  };
  


  return (
    <Screen style={ROOT} preset="scroll">
      <SafeAreaView>
      <Text preset="header" text="PDF VIEW" style={{ alignSelf:'center',margin: metrics.heightPercentageToDP(2)}} />

      <Button text="SEE PDF FILE" style={Button_Pdf} textStyle={Button_Text} onPress={()=>navigation.navigate("pdf_reader")}/>
      <Button text="DOWNLOAD PDF FILE" style={Button_Pdf} textStyle={Button_Text}/>
      <Button
        onPress={async () => {
          await share();
        }}
        text="share"
      />
              <Icon
          name='share'
         // type='FontAwesome'
          size={60}
          color='orange'
          onPress={async () => { await share() } }   />
      </SafeAreaView>
    </Screen>
  )
})
const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
  alignItems:'center',
  justifyContent:'center',
}
const Button_Pdf : ViewStyle={

 alignSelf:'center',
 margin: metrics.widthPercentageToDP(2)
}
const Button_Text:TextStyle={
  fontSize:20,
}

function doSomething(res: any) {
      throw new Error("Function not implemented.")
    }
