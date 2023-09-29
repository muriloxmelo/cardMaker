export const API_URL = "http://localhost:4000/api/v1";

export function CARD_POST(body) {
  return {
    url: API_URL + "/cards",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}
