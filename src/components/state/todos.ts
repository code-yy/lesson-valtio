import { proxy, useSnapshot } from "valtio";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const todoState = proxy<{ todos: Todo[]; fetch: any }>({
  todos: [],
  fetch: async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    todoState.todos = data;
  },
});

export const useTodos = () => {
  const { todos } = useSnapshot(todoState);
  return { todos };
};
