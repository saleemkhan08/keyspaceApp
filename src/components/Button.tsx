import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
const styles = StyleSheet.create({
    container: {
        borderRadius: 25,
        height: 50,
        width: 245,
        justifyContent: "center",
        alignItems: "center"

    },
    label: {
        fontSize: 15,
        textAlign: "center",
        fontWeight: "bold",
        fontFamily: "Quicksand-SemiBold",
    }
});
interface Props {
    label: string,
    variant: "primary" | "default",
    onPress: () => void;
}
function Button(props: Props) {
    const { label, variant, onPress } = props;
    const backgroundColor = variant === 'primary' ? "#2CB9B0" : "rgba(12, 13, 52, 0.05)";
    const color = variant === 'primary' ? "#fff" : "#0C0D34";
    return (
        <RectButton style={[styles.container, { backgroundColor }]} {...{ onPress }}>
            <Text style={[styles.label, { color }]}>{label}</Text>
        </RectButton>
    );
}

Button.defaultProps = {
    variant: "default"
};

export default Button;