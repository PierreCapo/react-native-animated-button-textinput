# react-native-animated-button-textinput

A react-native component for animating button to text-input

<p style="text-align:center;">
<img src="https://imgur.com/U0RwpJj.gif"/>
</p>

### Install

```bash
npm install react-native-animated-button-textinput;
```

and then in your code :

```js
import { AnimatedButtonTextInput } from "react-native-animated-button-textinput";
```

And then :

```jsx
<AnimatedButtonTextInput
  rightButtonContent={() => (
    <Text style={{ fontWeight: "bold", color: "white" }}>Send</Text>
  )}
  rightButtonProps={{
    style: {
      backgroundColor: "green",
      height: 32,
      paddingHorizontal: 10,
      borderRadius: 20,
      justifyContent: "center",
      alignItems: "center",
      marginRight: 4
    }
  }}
  collapsedContent={() => <Text>Send</Text>}
  onExpandedPress={() => console.log("hello world")}
  textInputProps={{
    onChangeText: text => console.log(text)
  }}
/>
```

### API

This component doesn't use native drivers for animationns since it anitmates width and height which is not supported by native drivers in react-native right now.

Note :

- **Collapsed** means when the component is in "button only" mode
- **Expanded** means when the component is in "text input" mode

| Props name           | Type                  | Description                                                    |
| -------------------- | --------------------- | -------------------------------------------------------------- |
| `animationDuration`  | number                | Duration of the animations                                     |
| `collapsedWidth`     | number                | Width of the button when collapsed                             |
| `collapsedHeight`    | number                | Height of the button when collapsed                            |
| `expandedWidth`      | number                | Width of the button when expanded                              |
| `expandedHeight`     | number                | Height of the button when expanded                             |
| `collapsedContent`   | () => React.ReactNode | Content inside the button when collapsed                       |
| `collapsedProps`     | ViewProps             | Props of Touchable when collapsed                              |
| `rightButtonContent` | () => React.ReactNode | Content inside the right button when expanded                  |
| `rightButtonProps`   | TouchableOpacityProps | Props of the right button when expanded                        |
| `textInputProps`     | TextInputProps        | Props of the left text input when expanded                     |
| `componentProps`     | ViewProps             | Props of the component shared between collaspsed and expanded  |
| `onCollapsedPress`   | () => void            | Function called when the button is pressed when collapsed      |
| `onExpandedPress`    | () => void            | Function called when the right button is pressed when expanded |

### Credits

Thanks to Jason Brown for providing the idea of this component

### Licence

MIT
