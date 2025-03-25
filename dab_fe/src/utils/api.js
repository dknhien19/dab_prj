import axios from "axios";

const API_BASE_URL = "http://localhost:8000"; // Change if backend URL differs

export const fetchQueryResults = async (query) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/query`, { query });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return { error: "Failed to fetch results" };
  }
};
