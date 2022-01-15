import { useEffect, VFC } from "react";

import { countState } from "@/components/state/count";
import { todoState, useTodos } from "@/components/state/todos";

const handleClick = countState.decrement;

export const About: VFC = () => {
  const { todos } = useTodos();

  useEffect(() => {
    todoState.fetch();
  });

  return (
    <div className="text-center">
      <button className="p-2 text-2xl" onClick={handleClick}>
        Count Down
      </button>
      <h2>JSONPlaceholder</h2>
      {todos.length > 0 ? (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      ) : (
        <div>No todos</div>
      )}
    </div>
  );
};
