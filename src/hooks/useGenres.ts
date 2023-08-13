import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import genres from "../data/genres";

const apiClient = new APIClient<Genre>("/genres");

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours our data will be refreshed
    initialData: { count: genres.length, results: genres }, // since we need to make the type of the initial data the same as the type of the data returned by the queryFn, FetchResponse<Genre>
  });

export default useGenres;
