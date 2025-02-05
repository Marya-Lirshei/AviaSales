export const BASE_URL = "https://aviasales-test-api.kata.academy";

export const getSearchId = () => async () => {
  try {
    const response = await fetch(`${BASE_URL}/search`);
    if (!response.ok) {
      throw new Error("Ошибка при получении searchId");
    }
    const data = await response.json();
    localStorage.setItem("searchId", data.searchId);
  } catch (error) {
    console.error("Ошибка при получении searchId:", error);
    alert(
      "Произошла ошибка при получении searchId."
    );
  }
};
