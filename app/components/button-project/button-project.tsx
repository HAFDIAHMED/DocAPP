import * as React from "react"
import { StyleProp, TextStyle, TouchableOpacityProps, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { color, typography } from "../../theme"
import { Text } from "../"
import { flatten } from "ramda"

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

}

/**
 * Describe your component here
 */
export const ButtonProject = observer(function ButtonProject(props: ButtonProjectProps) {
  const { style } = props
  const styles = flatten([CONTAINER, style])

  return (
    <View style={styles}>
      <Text style={TEXT}>{props.textLabel}</Text>
    </View>
  )
})
