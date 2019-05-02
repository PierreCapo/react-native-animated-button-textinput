import * as tslib_1 from "tslib";
import * as React from "react";
import { Text, View, Animated, TouchableOpacity, TextInput } from "react-native";
var AnimatedButtonTextInput = /** @class */ (function (_super) {
    tslib_1.__extends(AnimatedButtonTextInput, _super);
    function AnimatedButtonTextInput() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            height: new Animated.Value(_this.props.collapsedHeight),
            width: new Animated.Value(_this.props.collapsedWidth),
            scale: new Animated.Value(0),
            isCollapsed: true
        };
        _this.handlePress = function () {
            if (_this.state.isCollapsed) {
                _this.props.onCollapsedPress();
                Animated.parallel([
                    Animated.timing(_this.state.width, {
                        duration: _this.props.animationDuration,
                        toValue: _this.props.expandedWidth
                    }),
                    Animated.timing(_this.state.scale, {
                        duration: _this.props.animationDuration,
                        toValue: 1
                    })
                ]).start(function () { return _this.setState({ isCollapsed: false }); });
            }
            else {
                _this.props.onExpandedPress();
                Animated.parallel([
                    Animated.timing(_this.state.width, {
                        duration: _this.props.animationDuration,
                        toValue: _this.props.collapsedWidth
                    }),
                    Animated.timing(_this.state.scale, {
                        duration: _this.props.animationDuration,
                        toValue: 0
                    })
                ]).start(function () { return _this.setState({ isCollapsed: true }); });
            }
        };
        _this.expandedContentScale = _this.state.scale.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1]
        });
        _this.collapsedContentScale = _this.state.scale.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0]
        });
        return _this;
    }
    AnimatedButtonTextInput.prototype.render = function () {
        var collapsedPropsStyle = (this.props.collapsedProps && this.props.collapsedProps.style) || {};
        var componentPropsStyle = (this.props.componentProps && this.props.componentProps.style) || {};
        return (<View style={{
            backgroundColor: "#df7879",
            height: "100%",
            justifyContent: "center",
            alignItems: "center"
        }}>
        <TouchableOpacity onPress={this.handlePress}>
          <Animated.View {...this.props.componentProps} style={tslib_1.__assign({ backgroundColor: "white", borderRadius: 20, justifyContent: "center" }, componentPropsStyle, { height: this.state.height, width: this.state.width })}>
            <Animated.View style={tslib_1.__assign({ justifyContent: "center", alignItems: "center" }, collapsedPropsStyle, { opacity: this.collapsedContentScale, transform: [
                { scaleX: this.collapsedContentScale },
                { scaleY: this.collapsedContentScale }
            ] })}>
              {this.props.collapsedContent() || <Text>Notify me</Text>}
            </Animated.View>
            <Animated.View style={{
            position: "absolute",
            flexDirection: "row",
            opacity: this.expandedContentScale,
            transform: [
                { scaleX: this.expandedContentScale },
                { scaleY: this.expandedContentScale }
            ]
        }}>
              <TextInput style={{ flex: 1, marginLeft: 20 }} autoCapitalize={"none"} placeholder={"Email"} {...this.props.textInputProps}/>
              <TouchableOpacity style={{
            height: this.props.collapsedHeight - 8,
            paddingHorizontal: 10,
            backgroundColor: "#df7879",
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
            marginRight: 4
        }} {...this.props.rightButtonProps} onPress={this.handlePress}>
                {this.props.rightButtonContent() || (<Text style={{ color: "white" }}>Send</Text>)}
              </TouchableOpacity>
            </Animated.View>
          </Animated.View>
        </TouchableOpacity>
      </View>);
    };
    AnimatedButtonTextInput.defaultProps = {
        animationDuration: 300,
        collapsedWidth: 100,
        collapsedHeight: 40,
        expandedWidth: 300,
        expandedHeight: 40,
        onCollapsedPress: function () { return null; },
        onExpandedPress: function () { return null; },
        rightButtonContent: function () { return null; },
        collapsedContent: function () { return null; }
    };
    return AnimatedButtonTextInput;
}(React.Component));
export { AnimatedButtonTextInput };
//# sourceMappingURL=index.js.map