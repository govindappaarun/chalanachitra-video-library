import Api from "./api";

export default {
  getAllVideos: async () => {
    try {
      const response = await Api.get("/api/videos");
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getVideo: async ({ _id }) => {
    try {
      const response = await Api.get(`/api/video/${_id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
