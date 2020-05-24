import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {primary} from "../constants/colors";

export const Navbar = ({ title }) => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>
                { title }
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: primary,
        paddingBottom: 10
    },
    text: {
        color: "#fff",
        fontSize: 20
    }
})