import * as React from "react";
import { Animated, TouchableOpacityProps, ViewProps, TextInputProps } from "react-native";
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
export declare class AnimatedButtonTextInput extends React.Component<IProps> {
    static defaultProps: {
        animationDuration: number;
        collapsedWidth: number;
        collapsedHeight: number;
        expandedWidth: number;
        expandedHeight: number;
        onCollapsedPress: () => null;
        onExpandedPress: () => null;
        rightButtonContent: () => null;
        collapsedContent: () => null;
    };
    state: {
        height: Animated.Value;
        width: Animated.Value;
        scale: Animated.Value;
        isCollapsed: boolean;
    };
    handlePress: () => void;
    expandedContentScale: Animated.AnimatedInterpolation;
    collapsedContentScale: Animated.AnimatedInterpolation;
    render(): JSX.Element;
}
export {};
