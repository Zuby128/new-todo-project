import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

type Todo = {
  id: string;
  text: string;
  isComplete: boolean;
};

type TodoState = {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
};

const useTodoStore = create<TodoState>((set) => ({
  todos: [],
  addTodo: (text) =>
    set((state) => ({
      todos: [
        ...state.todos,
        { id: Date.now().toString(), text, isComplete: false },
      ],
    })),
  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      ),
    })),
  removeTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
}));

export default useTodoStore;
