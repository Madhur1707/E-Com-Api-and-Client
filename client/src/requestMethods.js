import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ODQyM2Q2NzA3ZWZjN2QxMjVkNTJkNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNDE4MjU4NSwiZXhwIjoxNzA0NDQxNzg1fQ.YXGc6pJQNZQWLAYWDNUs2nDuqdA84eeBmlWmPLg239k"

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});


export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token :`Bearer ${TOKEN}`}
});
