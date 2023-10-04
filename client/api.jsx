export const API_URL = "https://card-maker-api.vercel.app//api/v1";

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

export function CARDS_GET() {
  return {
    url: API_URL + "/cards",
    options: {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  };
}

export function CARD_GET_ID(id) {
  return {
    url: `${API_URL}/cards/${id}`,
    options: {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  };
}

export function CARD_DELETE_ID(id) {
  return {
    url: `${API_URL}/cards/${id}`,
    options: {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    },
  };
}
