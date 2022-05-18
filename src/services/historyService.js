import Api from "./api";

export default {
  getHistory: async () => {
    try {
      const response = await Api.get("/api/user/history");
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  addToHistory: async (video) => {
    try {
      const response = await Api.post("/api/user/history", { video });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  deleteFromHistory: async ({ _id }) => {
    try {
      const response = await Api.delete(`/api/user/history/${_id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  clearHistory: async () => {
    try {
      const response = await Api.delete("/api/user/history/all");
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
