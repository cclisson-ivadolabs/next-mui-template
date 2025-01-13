import { useQuery } from "@tanstack/react-query";

import { Query } from "@/types/query";

export const useTodos = () => {
  const { data: todos, isLoading } = useQuery({
    queryKey: [Query.TODOS],
    queryFn: async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos",
      );
      const data = await response.json();

      return data as { id: number; title: string }[];
    },
  });

  return {
    todos,
    isLoading,
  };
};
