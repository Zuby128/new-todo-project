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
  selectTodo: (id: string | null) => Todo | null;
  editTodo: (id: string, text: string) => void;
  duplicateTodo: (id: string) => void;
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
  editTodo: (id: string, text: string) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, text } : todo
      ),
    })),
  removeTodo: (id: string) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
  selectTodo: (id: string | null) => {
    if (!id) {
      set({ todo: null });
      return null;
    }
    const currentTodos = get().todos;
    const selectedTodo = currentTodos.find((todo) => todo.id === id) || null;
    set({ todo: selectedTodo });
    return selectedTodo;
  },
  duplicateTodo: (id: string) => {
    const currentTodos = get().todos;
    const selectedTodo = currentTodos.find((todo) => todo.id === id);

    if (selectedTodo) {
      set((state) => ({
        todos: [
          ...state.todos,
          {
            id: Date.now().toString(),
            text: selectedTodo.text,
            isComplete: false,
          },
        ],
      }));
    }
  },
}));

export default useTodoStore;
