import Api from "./api";

export default {
  getAllCategories: async () => {
    try {
      const response = await Api.get("/api/categories");
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getCategory: async ({ _id }) => {
    try {
      const response = await Api.get(`/api/categories/${_id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
