import React, { useRef } from 'react';
import { View, StyleSheet, Dimensions, } from 'react-native';
import Animated, { multiply } from "react-native-reanimated";
import { useValue, onScrollEvent, interpolateColor } from 'react-native-redash';
import { } from 'prop-types';
import Slide, { SLIDER_HEIGHT } from './Slide';
import BottomSlide from './BottomSlide';
interface Props { }

const { width } = Dimensions.get("window");
const BORDER_RADIUS = 80;
const slides = [
    {
        title: "Relaxed",
        subTitle: "Three words subtitle",
        description: "This is a small line description just to show how it would look in the app screen",
        color: "#9BD9E9"
    }, {
        title: "Playful",
        subTitle: "Three words subtitle",
        description: "This is a small line description just to show how it would look in the app screen",
        color: "#9CE4A6"
    }, {
        title: "Excentric",
        subTitle: "Three words subtitle",
        description: "This is a small line description just to show how it would look in the app screen",
        color: "#F6CAB8"
    }, {
        title: "Funcky",
        subTitle: "Three words subtitle",
        description: "This is a small line description just to show how it would look in the app screen",
        color: "#F2B7B7"
    },
];
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    curvedFooterCorner: {
        ...StyleSheet.absoluteFillObject,
    },
    footer: {
        flex: 1
    },
    footerBox: {
        flex: 1,
        flexDirection: 'row',
        width: width * slides.length,
        backgroundColor: 'white',
        borderTopStartRadius: BORDER_RADIUS
    },
    slider: {
        borderBottomRightRadius: BORDER_RADIUS,
        height: SLIDER_HEIGHT
    },
});

function OnBoarding(props: Props) {
    const { } = props;
    const scrollRef = useRef<Animated.ScrollView>(null);
    const x = useValue(0);
    // TODO : scrollHandler useScrollHandler?
    const onScroll = onScrollEvent({ x });
    const backgroundColor = interpolateColor(x, {
        inputRange: slides.map((_, index) => width * index),
        outputRange: slides.map((slide) => slide.color)
    });

    const handleScroll = (index: number) => {
        scrollRef.current?.getNode()?.scrollTo({ x: width * (index + 1), animated: true });
    };

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.slider, { backgroundColor }]}>
                <Animated.ScrollView
                    ref={scrollRef}
                    horizontal
                    snapToInterval={width}
                    decelerationRate="fast"
                    scrollEventThrottle={1}
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    {...{ onScroll }}>
                    {slides.map((slide, index) =>
                        <Slide title={slide.title} right={!!(index % 2)} />)}
                </Animated.ScrollView>
            </Animated.View>
            <View style={styles.footer}>
                <Animated.View style={[styles.curvedFooterCorner, { backgroundColor }]} />
                <Animated.View style={[styles.footerBox, { transform: [{ translateX: multiply(x, -1) }] }]}>
                    {slides.map((slide, index) =>
                        <BottomSlide key={index}
                            onPress={() => handleScroll(index)}
                            title={slide.subTitle}
                            description={slide.description}
                            isLast={index === slides.length - 1} />)}
                </Animated.View>
            </View>
        </View >
    );
}

OnBoarding.propTypes = {

};

OnBoarding.defaultProps = {

};

export default OnBoarding;