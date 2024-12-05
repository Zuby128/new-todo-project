import { create } from "zustand";

type Todo = {
  id: string;
  text: string;
  isComplete: boolean;
};

type TodoState = {
  todos: Todo[];
  todo: Todo | null;
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
  selectTodo: (id: string) => Todo | null;
};

const useTodoStore = create<TodoState>((set, get) => ({
  todos: [],
  todo: null,
  addTodo: (text) =>
    set((state) => ({
      todos: [
        ...state.todos,
        { id: Date.now().toString(), text, isComplete: false },
      ],
    })),
  toggleTodo: (id: string) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      ),
    })),
  removeTodo: (id: string) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
  selectTodo: (id: string) => {
    const currentTodos = get().todos; // Use `get` to access the current state
    const selectedTodo = currentTodos.find((todo) => todo.id === id) || null;
    set({ todo: selectedTodo }); // Update the state with the selected todo
    return selectedTodo; // Return the selected todo
  },
}));

export default useTodoStore;
