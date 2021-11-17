import React from "react"
import { observer } from "mobx-react-lite"
import { Dimensions, View, ViewStyle } from "react-native"
import { Screen, Text } from "../../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../../theme"
import Pdf from "react-native-pdf"
import Share from 'react-native-share';

import metrics from "../../../theme/metrics"
const source = { uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf' };




export const PdfReaderScreen = observer(function PdfReaderScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={ROOT} preset="scroll">
      {/*<View style={TOOLS_PDF}>
      <Text>hellddo</Text>

      </View> */}
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
  backgroundColor: color.palette.black,
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
  backgroundColor:'white',

}
