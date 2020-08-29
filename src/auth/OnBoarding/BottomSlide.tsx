import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from '../../components';

const styles = StyleSheet.create({
    title: {
        fontFamily: "Quicksand-SemiBold",
        fontSize: 24,
        lineHeight: 30,
        marginBottom: 12,
        color: "#0C0D34"
    },
    description: {
        fontFamily: "Quicksand-Regular",
        fontSize: 16,
        lineHeight: 24,
        color: "#0C0D34",
        textAlign: "center",
        marginBottom: 40,
    },
    container: {
        flex: 1,
        padding: 44,
        justifyContent: "center",
        alignItems: "center",
    }
});
interface Props {
    title: string,
    description: string,
    isLast: boolean,
    onPress: () => void,
}
function BottomSlide(props: Props) {
    const { title, description, isLast, onPress } = props;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
            <Button label={isLast ? "Let's get started" : "Next"}
                variant={isLast ? "primary" : "default"}
                {...{ onPress }} />
        </View>
    );
}

BottomSlide.defaultProps = {

};

export default BottomSlide;