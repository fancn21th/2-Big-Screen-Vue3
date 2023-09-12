import { useQuery } from "@tanstack/vue-query";

const fetcher = async () =>
  await fetch(`https://jsonplaceholder.typicode.com/posts`).then((response) =>
    response.json()
  );

export const useStackLineChartData = () => {
  return useQuery({
    queryKey: ["stackedLineChart"],
    queryFn: fetcher,
  });
};
