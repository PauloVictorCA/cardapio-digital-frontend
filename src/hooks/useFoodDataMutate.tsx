import axios from "axios";

import { useMutation, useQueryClient } from "react-query";
import { FoodData } from "../interfase/FoodData";

const API_URL = "http://localhost:8080";

const postData = async (data: FoodData): Promise<any> => {
  const response = await axios.post<FoodData[]>(API_URL + "/food", data);
  return response.data;
};

export function useFoodDataMutate() {
  const queryClient = useQueryClient();
  const mutation = useMutation((data: FoodData) => postData(data), {
    onSuccess: () => {
      queryClient.invalidateQueries("food-data");
    },
  });

  return mutation;
}
