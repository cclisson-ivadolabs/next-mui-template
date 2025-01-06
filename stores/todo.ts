import {useQuery} from "@tanstack/react-query";

export const useTodos = () => {
    const { data, error, isLoading } = useQuery({
        queryKey: ["todos"],
        queryFn: async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos");
            const data = await response.json();

            return data as { id: number; title: string }[];
        }
    });

    return {
        todos: data,
        isLoading
    };
}