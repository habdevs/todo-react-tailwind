import React, { useState } from 'react';
import TodoItem from './item/TodoItem';
import CreateTodoField from './create-todo-field/CreateTodoField';

const data = [
  {
    _id: '1232141',
    title: 'Upload the project to Vercel',
    isCompleted: true,
  },
  {
    _id: '1232214',
    title: 'Develop a blog on react',
    isCompleted: false,
  },
  {
    _id: '1232114',
    title: 'Learn it GraphQL',
    isCompleted: false,
  },
];
const Home = () => {
  const [todos, setTodos] = useState(data);

  const changeTodo = (id) => {
    const copy = [...todos];
    const current = copy.find((t) => t._id === id);
    current.isCompleted = !current.isCompleted;
    setTodos(copy);
  };

  const removeTodo = (id) => {
    setTodos([...todos].filter((t) => t._id !== id));
  };

  return (
    <div className="text-white w-4/5 mx-auto items-center">
      <h1 className="text-2xl font-bold text-center mb-9 pt-5 items-center">
        TODO for you
      </h1>
      <CreateTodoField setTodos={setTodos} />
      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          changeTodo={changeTodo}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
};

export default Home;
