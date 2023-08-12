import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    // key: "c7b18323a47d40c394ea5b019646b1f5",
    key: "09c55ec22b3541ae9ff79ff6b04fe1a1",
  },
});

export interface FetchResponse<T> {
  count: number;
  results: T[];
}
