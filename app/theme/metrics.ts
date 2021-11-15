import {Dimensions, Platform, PixelRatio} from 'react-native'



let { width, height } = Dimensions.get('window');

if( width > height ){

  let temp = width ;
  width = height ;
  height = temp;

}

/**
 * Converts provided width percentage to independent pixel (dp).
 * @param  {string} widthPercent The percentage of screen's width that UI element should cover
 *                               along with the percentage symbol (%).
 * @return {number}              The calculated dp depending on current device's screen width.
 */
const widthPercentageToDP = widthPercent => {
  // Parse string percentage input and convert it to number.
  const elemWidth = typeof widthPercent === "number" ? widthPercent : parseFloat(widthPercent);

  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that correspons to an integer number of pixels.
  return PixelRatio.roundToNearestPixel(width * elemWidth / 100);
};

/**
 * Converts provided height percentage to independent pixel (dp).
 * @param  {string} heightPercent The percentage of screen's height that UI element should cover
 *                                along with the percentage symbol (%).
 * @return {number}               The calculated dp depending on current device's screen height.
 */
const heightPercentageToDP = heightPercent => {
  // Parse string percentage input and convert it to number.
  const elemHeight = typeof heightPercent === "number" ? heightPercent : parseFloat(heightPercent);

  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that correspons to an integer number of pixels.
  return PixelRatio.roundToNearestPixel(height * elemHeight / 100);
};

/**
 * Event listener function that detects orientation change (every time it occurs) and triggers 
 * screen rerendering. It does that, by changing the state of the screen where the function is
 * called. State changing occurs for a new state variable with the name 'orientation' that will
 * always hold the current value of the orientation after the 1st orientation change.
 * Invoke it inside the screen's constructor or in componentDidMount lifecycle method.
 * @param {object} that Screen's class component this variable. The function needs it to
 *                      invoke setState method and trigger screen rerender (this.setState()).
 */
const listenOrientationChange = that => {
  Dimensions.addEventListener('change', newDimensions => {
    // Retrieve and save new dimensions
    width = newDimensions.window.width;
    height = newDimensions.window.height;

    // Trigger screen's rerender with a state update of the orientation variable
    that.setState({
      orientation: width < height ? 'portrait' : 'landscape'
    });
  });
};

/**
 * Wrapper function that removes orientation change listener and should be invoked in
 * componentWillUnmount lifecycle method of every class component (UI screen) that
 * listenOrientationChange function has been invoked. This should be done in order to
 * avoid adding new listeners every time the same component is re-mounted.
 */
const removeOrientationListener = () => {
  Dimensions.removeEventListener('change', () => {});
};




// Used via Metrics.baseMargin
const metrics = {
  marginHorizontal: 10,
  marginVertical: 10,
  section: 25,
  baseMargin: 10,
  doubleBaseMargin: 20,
  smallMargin: 5,
  doubleSection: 50,
  horizontalLineHeight: 1,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: (Platform.OS === 'ios') ? 64 : 54,
  buttonRadius: 4,
  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 50
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 200
  },
  widthPercentageToDP,
  heightPercentageToDP,
  listenOrientationChange,
  removeOrientationListener
}

export default metrics