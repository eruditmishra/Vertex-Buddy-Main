export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:4000/api/v1"
    : "https://api.vertexbuddy.com/api/v1";
