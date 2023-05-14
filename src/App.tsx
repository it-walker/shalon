import React, { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { createTodo } from './graphql/mutations';
import { listTodos } from './graphql/queries';
import { withAuthenticator, Button, Heading, TextField, View, Text } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

// import awsExports from './aws-exports'
import { Todo } from './models';
// Amplify.configure(awsExports)

const initialState = { name: '', description: '' }

// @ts-ignore
const App = ({ signOut, user }) => {
  const [formState, setFormState] = useState(initialState)
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetchTodos()
  }, [])

  function setInput(key: string, value: string) {
    setFormState({ ...formState, [key]: value })
  }

  async function fetchTodos() {
    try {
      const todoData = await API.graphql(graphqlOperation(listTodos))
      // @ts-ignore
      const todos: Todo[] = todoData.data.listTodos.items
      // @ts-ignore
      setTodos(todos)
    } catch (err) { console.log('error fetching todos') }
  }

  async function addTodo() {
    try {
      if (!formState.name || !formState.description) return
      const todo = { ...formState }
      // @ts-ignore
      setTodos([...todos, todo])
      setFormState(initialState)
      await API.graphql(graphqlOperation(createTodo, { input: todo} ))
    } catch (err) {
      console.log('error creating todo:' , err)
    }
  }

  return (
    // @ts-ignore
    <div style={styles.container}>
      <Heading level={1}>Hello {user.username}</Heading>
      <Button onClick={signOut}>Sign out</Button>
      <Heading level={2}>Amplify Todos</Heading>
      <TextField
        label='Name'
        labelHidden={true}
        onChange={event => setInput('name', event.target.value)}
        style={styles.input}
        defaultValue={formState.name}
        placeholder='Name'
      />
      <TextField
        label="Description"
        labelHidden={true}
        onChange={event => setInput('description', event.target.value)}
        style={styles.input}
        value={formState.description}
        placeholder='Description'
      />
      <Button
        style={styles.button}
        onClick={addTodo}
      >
        Create Todo
      </Button>
      {
        // @ts-ignore
        todos.map((todo: Todo, index: number) => (
          <View key={todo.id ? todo.id : index} style={styles.todo}>
            <Text
              style={styles.todoName}
            >
              {todo.name}
            </Text>
            <Text
              style={styles.todoDescription}
            >
              {todo.description}
            </Text>
          </View>
        ))
      }
    </div>
  );
}

const styles = {
  container: { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
  todo: {  marginBottom: 15 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  todoName: { fontSize: 20, fontWeight: 'bold' },
  todoDescription: { marginBottom: 0 },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}

export default withAuthenticator(App);
