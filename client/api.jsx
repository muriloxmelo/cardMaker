export const API_URL = "http://localhost:4000/api/v1";

export function CARD_POST(formData) {
  return {
    url: API_URL + "/cards",
    options: {
      method: "POST",
      body: formData,
    },
  };
}
