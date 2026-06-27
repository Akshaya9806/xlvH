import api from "./api";

export async function runWorkflow(query) {

  const response = await api.post("/run", {
    user_query: query,
  });

  return response.data;

}