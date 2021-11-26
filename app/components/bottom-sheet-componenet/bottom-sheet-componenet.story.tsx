import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import { color } from "../../theme"
import { BottomSheetComponenet } from "./bottom-sheet-componenet"

storiesOf("BottomSheetComponenet", module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase text="Primary" usage="The primary.">
        <BottomSheetComponenet style={{ backgroundColor: color.error }} />
      </UseCase>
    </Story>
  ))
