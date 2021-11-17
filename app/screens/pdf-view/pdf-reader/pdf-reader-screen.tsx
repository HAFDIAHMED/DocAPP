import React, { useEffect } from "react"
import { observer } from "mobx-react-lite"
import { Dimensions, PermissionsAndroid, Platform, View, ViewStyle } from "react-native"
import { Screen, Text } from "../../../components"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, spacing } from "../../../theme"
import Pdf from "react-native-pdf"
import Share from 'react-native-share';
import Icon from 'react-native-vector-icons/FontAwesome';
import metrics from "../../../theme/metrics"
const source = { uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf' };




export const PdfReaderScreen = observer(function PdfReaderScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()
  const url = source.uri;
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
  const download_pdf = async ()=>{
      try {
            const response = await fetch("http://samples.leanpub.com/thereactnativebook-sample.pdf");
            console.log(response);
      }catch(error){
        console.error(error)
      }
  }
 useEffect(()=>{
   download_pdf();
 });


  return (
    <Screen style={ROOT} preset="scroll">
      <View style={TOOLS_PDF}>
      <Icon
          name='long-arrow-left'
         type='FontAwesome'
          size={25}
          color='orange'
          
          style={{ marginHorizontal: metrics.widthPercentageToDP(10),
            margin : metrics.heightPercentageToDP(2)}}
            onPress={()=>navigation.goBack()}
            />
      <Icon
          name='share'
         // type='FontAwesome'
          size={40}
          color='orange'
          
          style={ICON_STYLE}
          onPress={async () => { await share() } }   />
     <Icon
          name='search'
         // type='FontAwesome'
          size={40}
          color='orange'
          style={ICON_STYLE}

            />
             <Icon
          name='download'
         // type='FontAwesome'
          size={40}
          color='orange'
          style={ICON_STYLE}

            />

      </View> 
      <View>
     <Pdf
                    source={source}
                    onLoadComplete={(numberOfPages) => {
                        console.log(`Number of pages: ${numberOfPages}`);
                    }}
                    onPageChanged={(page) => {
                        console.log(`Current page: ${page}`);
                    }}
                    onError={(error) => {
                        console.log(error);
                    }}
                    onPressLink={(uri) => {
                        console.log(`Link pressed: ${uri}`);
                    }}
                    style={PDF_View}/>
                    </View>
                    
    </Screen>
  )
})


const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        //marginTop: metrics.heightPercentageToDP(7),

}
const PDF_View : ViewStyle={
  flex:1,
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
}
const TOOLS_PDF : ViewStyle={
  flexDirection:'row',
  height:metrics.heightPercentageToDP(7),
  

}
const ICON_STYLE : ViewStyle={
  marginHorizontal: metrics.widthPercentageToDP(10),
  margin : metrics.heightPercentageToDP(1)
}

