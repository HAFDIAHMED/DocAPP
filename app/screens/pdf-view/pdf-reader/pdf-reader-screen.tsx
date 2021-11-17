import React from "react"
import { observer } from "mobx-react-lite"
import { Dimensions, View, ViewStyle } from "react-native"
import { Screen, Text } from "../../../components"
// import { useNavigation } from "@react-navigation/native"
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
  // const navigation = useNavigation()
  const share = async (customOptions = options) => {
    try {
      await Share.open(customOptions);
    } catch (err) {
      console.log(err);
    }
  };
  
  return (
    <Screen style={ROOT} preset="scroll">
      <View style={TOOLS_PDF}>
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
}

