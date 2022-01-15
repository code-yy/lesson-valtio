import { VFC } from "react";

import { useAutoCount } from "@/components/state/autoCount";
import { countState, useCount } from "@/components/state/count";

export const Index: VFC = () => {
  const { count } = useCount();
  const { autoCount } = useAutoCount();

  const handleClick = countState.increment;

  return (
    <div className="items-center py-10 space-y-8 text-center">
      <div className="text-9xl text-blue-500">{count}</div>
      <div className="text-9xl text-green-500">{autoCount}</div>
      <button className="p-2 text-9xl" onClick={handleClick}>
        Count Up
      </button>
    </div>
  );
};
