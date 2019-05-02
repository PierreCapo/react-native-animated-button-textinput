# react-native-animated-button-textinput

A react-native component for animating button to text-input

### Demo

![](https://imgur.com/or8RNEq.gif)

### Install

```bash
npm install react-native-animated-button-textinput;
```

For Typescript project, you should have had `tslib` installed in your project

and then in your code :

```js
import { AnimatedButtonTextInput } from "./react-native-animated-button-textinput";
```

### API

Note :

- **Collapsed** means when the component is in "button only" mode
- **Expanded** means when the component is in "text input" mode

AnimatedButtonTextInput props :

`animationDuration`: number;

`collapsedWidth`: number;

`collapsedHeight`: number;

`expandedWidth`: number;

`expandedHeight`: number;

`collapsedContent`: () => React.ReactNode;

`collapsedProps?`: ViewProps;

`rightButtonContent?`: () => React.ReactNode;

`rightButtonProps?`: TouchableOpacityProps;

`textInputProps?`: TextInputProps;

`componentProps?`: ViewProps;

`onCollapsedPress?`: () => void;

`onExpandedPress?`: () => void;

### Thanks

Thanks to Jason Brown for providing the idea of this component
