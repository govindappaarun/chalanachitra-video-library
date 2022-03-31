import Api from "./api";

export default {
  getWatchLater: async () => {
    try {
      const response = await Api.get("/api/user/watchLater");
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  postUserWatchLater: async (video) => {
    try {
      const response = await Api.post("/api/user/watchLater", { video });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  deleteWatchLater: async ({ _id }) => {
    try {
      const response = await Api.get(`/api/user/watchLater/${_id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getUserLikes: async () => {
    try {
      const response = await Api.get("/api/user/likes");
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  postUserLike: async (video) => {
    try {
      const response = await Api.post("/api/user/likes", { video });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  deleteVideoLike: async ({ _id }) => {
    try {
      const response = await Api.get(`/api/user/likes/${_id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  getUserPlaylists: async () => {
    try {
      const response = await Api.get("/api/user/playlists");
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  createPlayList: async (video) => {
    try {
      const response = await Api.post("/api/user/playlists", { video });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  deletePlayList: async ({ _id }) => {
    try {
      const response = await Api.get(`/api/user/playlists/${_id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getVideosInPlaylis: async ({ _id }) => {
    try {
      const response = await Api.get(`/api/user/playlists/${_id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  addVideoToPlaylist: async ({ _id, video }) => {
    try {
      const response = await Api.post(`/api/user/playlists/${_id}`, { video });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  deleteVideoFromPlaylist: async ({ _id, playlistId }) => {
    try {
      const response = await Api.delete(
        `api/user/playlists/${playlistId}/${_id}`
      );
    } catch (error) {
      throw error;
    }
  },
};
