import { useQuery } from "react-query";
import { User } from "types";
import { api } from "./api";

export const useUser = () => {
    return useQuery(["users"], async () => {
        const response = await api.get<User[]>('/users');
        return response.data;
    })
}