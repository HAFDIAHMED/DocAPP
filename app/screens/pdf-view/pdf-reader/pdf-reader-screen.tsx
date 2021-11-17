import React, { useEffect } from "react"
import { observer } from "mobx-react-lite"
import { Alert, Dimensions, PermissionsAndroid, Platform, View, ViewStyle } from "react-native"
import { Screen, Text } from "../../../components"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, spacing } from "../../../theme"
import Pdf from "react-native-pdf"
import Share from 'react-native-share';
import Icon from 'react-native-vector-icons/FontAwesome';
import metrics from "../../../theme/metrics"
const source = { uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf' };

import RNFetchBlob from 'rn-fetch-blob';

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
   //download_pdf();
 });

 const  DownloadHistory =async ()=> {
  const { config, fs } = RNFetchBlob;
  let PictureDir = fs.dirs.PictureDir;
  let date = new Date();
  let options = {
    fileCache: true,
    addAndroidDownloads: {
      //Related to the Android only
      useDownloadManager: true,
      notification: true,
      path:
        PictureDir +
        '/Report_Download' +
        Math.floor(date.getTime() + date.getSeconds() / 2),
      description: 'Risk Report Download',
    },
  };
  config(options)
    .fetch('GET', "http://samples.leanpub.com/thereactnativebook-sample.pdf")
    .then((res) => {
      //Showing alert after successful downloading
      console.log('res -> ', JSON.stringify(res));
      alert('Report Downloaded Successfully.');
    });
}
const historyDownload=()=> {
  //Function to check the platform
  //If iOS the start downloading
  //If Android then ask for runtime permission
  if (Platform.OS === 'ios') {
   DownloadHistory();
  } else {
    try {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
      ).then(granted => {
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          //Once user grant the permission start downloading
          console.log('Storage Permission Granted.');
          DownloadHistory();
        } else {
          //If permission denied then show alert 'Storage Permission 
          
         Alert.alert('storage_permission');
        }
      });
    } catch (err) {
      //To handle permission related issue
      console.log('error', err);
    }
  }
}
  return (
    <Screen style={ROOT} preset="scroll">
      <View style={TOOLS_PDF}>
      <Icon
          name='long-arrow-left'
         type='FontAwesome'
          size={25}
          color='black'
          
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
          onPress={()=>historyDownload()}

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

