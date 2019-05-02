import * as React from "react";
import {
  Text,
  View,
  Animated,
  TouchableOpacity,
  TextInput,
  TouchableOpacityProps,
  ViewProps,
  TextInputProps
} from "react-native";

interface IProps {
  animationDuration: number;
  collapsedWidth: number;
  collapsedHeight: number;
  expandedWidth: number;
  expandedHeight: number;
  collapsedContent: () => React.ReactNode;
  collapsedProps?: ViewProps;
  rightButtonContent: () => React.ReactNode;
  rightButtonProps?: TouchableOpacityProps;
  textInputProps?: TextInputProps;
  componentProps?: ViewProps;
  onCollapsedPress: () => void;
  onExpandedPress: () => void;
}

export class AnimatedButtonTextInput extends React.Component<IProps> {
  static defaultProps = {
    animationDuration: 300,
    collapsedWidth: 100,
    collapsedHeight: 40,
    expandedWidth: 300,
    expandedHeight: 40,
    onCollapsedPress: () => null,
    onExpandedPress: () => null,
    rightButtonContent: () => null,
    collapsedContent: () => null
  };
  state = {
    height: new Animated.Value(this.props.collapsedHeight),
    width: new Animated.Value(this.props.collapsedWidth),
    scale: new Animated.Value(0),
    isCollapsed: true
  };

  handlePress = () => {
    if (this.state.isCollapsed) {
      this.props.onCollapsedPress();
      Animated.parallel([
        Animated.timing(this.state.width, {
          duration: this.props.animationDuration,
          toValue: this.props.expandedWidth
        }),
        Animated.timing(this.state.scale, {
          duration: this.props.animationDuration,
          toValue: 1
        })
      ]).start(() => this.setState({ isCollapsed: false }));
    } else {
      this.props.onExpandedPress();
      Animated.parallel([
        Animated.timing(this.state.width, {
          duration: this.props.animationDuration,
          toValue: this.props.collapsedWidth
        }),
        Animated.timing(this.state.scale, {
          duration: this.props.animationDuration,
          toValue: 0
        })
      ]).start(() => this.setState({ isCollapsed: true }));
    }
  };

  expandedContentScale = this.state.scale.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1]
  });

  collapsedContentScale = this.state.scale.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0]
  });

  render() {
    const collapsedPropsStyle =
      (this.props.collapsedProps && this.props.collapsedProps.style) || {};
    const componentPropsStyle =
      (this.props.componentProps && this.props.componentProps.style) || {};

    return (
      <View
        style={{
          backgroundColor: "#df7879",
          height: "100%",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <TouchableOpacity onPress={this.handlePress}>
          <Animated.View
            {...this.props.componentProps}
            style={{
              backgroundColor: "white",
              borderRadius: 20,
              justifyContent: "center",
              // @ts-ignore
              ...componentPropsStyle,
              height: this.state.height,
              width: this.state.width
            }}
          >
            <Animated.View
              style={{
                justifyContent: "center",
                alignItems: "center",
                // @ts-ignore
                ...collapsedPropsStyle,
                opacity: this.collapsedContentScale,
                transform: [
                  { scaleX: this.collapsedContentScale },
                  { scaleY: this.collapsedContentScale }
                ]
              }}
            >
              {this.props.collapsedContent() || <Text>Click me</Text>}
            </Animated.View>
            <Animated.View
              style={{
                position: "absolute",
                flexDirection: "row",
                opacity: this.expandedContentScale,
                transform: [
                  { scaleX: this.expandedContentScale },
                  { scaleY: this.expandedContentScale }
                ]
              }}
            >
              <TextInput
                style={{ flex: 1, marginLeft: 20 }}
                placeholder={"Email"}
                {...this.props.textInputProps}
              />
              <TouchableOpacity
                style={{
                  height: this.props.collapsedHeight - 8,
                  paddingHorizontal: 10,
                  backgroundColor: "#df7879",
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: 4
                }}
                {...this.props.rightButtonProps}
                onPress={this.handlePress}
              >
                {this.props.rightButtonContent() || (
                  <Text style={{ color: "white" }}>Send</Text>
                )}
              </TouchableOpacity>
            </Animated.View>
          </Animated.View>
        </TouchableOpacity>
      </View>
    );
  }
}
