import * as React from "react"
import { StyleProp, TextStyle, TouchableOpacity, TouchableOpacityProps, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { color, typography } from "../../theme"
import { Text } from "../"
import { flatten } from "ramda"
import Icon from "react-native-vector-icons/Ionicons"

const CONTAINER: ViewStyle = {
  justifyContent: "center",
}

const TEXT: TextStyle = {
  fontFamily: typography.primary,
  fontSize: 14,
  color: color.primary,
}

export interface ButtonProjectProps extends  TouchableOpacityProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  textLabel : string
  iconName : string
  iconColor:string
  iconSize :number
  forwardeRef? : any


}

/**
 * Describe your component here
 */
export const ButtonProject = observer(function ButtonProject(props: ButtonProjectProps) {
  const { style ,forwardeRef,...rest} = props
  const styles = flatten([CONTAINER, style])

  return (
    <View style={styles}>
      <TouchableOpacity style={OPEN_PROJECT}
      {...rest}
      ref={forwardeRef}>
        <Icon name ={props.iconName} color={props.iconColor}  size={props.iconSize}/> 
        <Text style={{margin:10}}>Home</Text>
       
      
        </TouchableOpacity>
    </View>
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