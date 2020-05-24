import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Todo} from "./Todo";

export const TodoList = ({ todos }) => {
    return (
        <View style={styles.block}>
            {
                todos.map(({ id, title }) => (
                    <Todo key={id} title={title} />
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    block: {},
})