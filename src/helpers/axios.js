import axios from "axios";
import { api } from "../urlConfig";

const token = window.localStorage.getItem("token");

const axiosInstance = axios.create({
  baseURL: api,
  headers: {
    Authorization: token
      ? `Bearer ${token}`
      : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDEzYjA0MWM1MDQ3MzUzMjZhYmJmZDQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2MTIwMTUwNDd9.Bb222qOCE5vy-KgZImkqk-Twi6ItRK8Ew6Js21OG6gg",
  },
});

export default axiosInstance;
