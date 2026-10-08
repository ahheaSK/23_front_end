import apiClient from "./apiClient";

export const getCaptcha = async () => {
  try {
    const response = await apiClient.get("/auth/captcha");
    console.log("Captcha response:", response.data); // Log the response data for debugging
    return response.data;
  } catch (error) {
    console.error("Error fetching captcha:", error);
    throw error;
  }
}