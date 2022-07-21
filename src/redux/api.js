import axios from "axios";

export const loadUsersApi = async () => {
  let response = await axios.get("http://localhost:5000/users");
  return response;
};
export const createUserApi = async (user) => {
  let response = await axios.post("http://localhost:5000/users", user);
  return response;
};
export const deleteUserApi = async (userID) => {
  let response = await axios.delete(`http://localhost:5000/users/${userID}`);
  return response;
};
export const updateUserApi = async (userID, userInfo) => {
  let response = await axios.put(
    `http://localhost:5000/users/${userID}`,
    userInfo
  );
  return response;
};
