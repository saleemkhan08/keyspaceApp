import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { } from 'prop-types';
interface SlideProps {
    title: string,
    right?: boolean;
}
const { width, height } = Dimensions.get("window");
export const SLIDER_HEIGHT = 0.61 * height;
const styles = StyleSheet.create({
    container: {
        width,
    },
    title: {
        fontSize: 80,
        lineHeight: 80,
        color: "white",
        fontFamily: "Quicksand-Bold",
        textAlign: "center"
    },
    titleContainer: {
        height: 100,
        justifyContent: "center",
    }

});
function Slide(props: SlideProps) {
    const { title, right } = props;
    const transform = [
        { translateY: (SLIDER_HEIGHT - 100) / 2 },
        { translateX: right ? (width / 2 - 50) : (-width / 2) + 50 },
        { rotate: right ? "-90deg" : "90deg" }];
    return (
        <View style={styles.container} >
            <View style={[styles.titleContainer, { transform }]}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    );
}

Slide.propTypes = {

};

Slide.defaultProps = {

};

export default Slide;