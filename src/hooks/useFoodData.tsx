import axios from "axios";

import { useQuery } from "react-query";
import { FoodData } from "../interfase/FoodData";

const API_URL = "http://localhost:8080";

const fetchData = async (): Promise<FoodData[]> => {
  const response = await axios.get<FoodData[]>(API_URL + "/food");
  return response.data;
};

export function useFoodData() {
  const query = useQuery<FoodData[], Error>({
    queryFn: fetchData,
    queryKey: ["food-data"],
    retry: 2,
  });

  return {
    ...query,
    data: query.data,
  };
}
