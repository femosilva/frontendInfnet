import { useQuery } from "react-query";
import { User } from "types";
import { api } from "./api";

export const getUsers = () => {
  return useQuery(["users-list"], async () => {
    const response = await api.get<User[]>("/users");
    return response.data;
  });
};
export const getUser = (id: string | undefined) => {
  return useQuery(["user"], async () => {
    const response = await api.get<User[]>(`/user/${id}`);
    return response.data;
  });
};
export const createUser = async (data: User) => {
  await api.post<User>("/user", data);
};
export const updateUser = async (id: string | undefined, data: User) => {
  await api.put<User>(`/user/${id}`, data);
};
export const deleteUser = async (id: number) => {
  await api.delete<User>(`/user/${id}`);
};
