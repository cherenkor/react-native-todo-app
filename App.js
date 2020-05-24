import React, { useState } from 'react';
import {StyleSheet, View} from 'react-native';
import {Navbar} from "./src/components/Navbar";
import {AddTodo} from "./src/components/AddTodo";
import {TodoList} from "./src/components/TodoList";

export default function App() {
    const [todos, setTodos] = useState([]);

    const addTodo = title => {
        setTodos(prev => [
            ...prev,
            {
                id: Date.now().toString(),
                title
            }
        ])
    }

  return (
    <View>
      <Navbar title="Todo App" />
        <View style={styles.container}>
           <AddTodo todos={todos} onSubmit={addTodo} />
           <TodoList todos={todos} />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      paddingHorizontal: 30,
      paddingVertical: 20
  },
});
