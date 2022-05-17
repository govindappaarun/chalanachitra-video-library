import Api from "./api";

export default {
  getWatchlater: async () => {
    try {
      const response = await Api.get("/api/user/watchlater");
      // console.log({ response });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  postUserWatchlater: async (video) => {
    try {
      const response = await Api.post("/api/user/watchlater", { video });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  deleteWatchlater: async ({ _id }) => {
    try {
      const response = await Api.delete(`/api/user/watchlater/${_id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getUserLikes: async () => {
    try {
      const response = await Api.get("/api/user/likes");
      // console.log({ response });
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
      const response = await Api.delete(`/api/user/likes/${_id}`);
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

  createPlayList: async (playlist) => {
    try {
      const response = await Api.post("/api/user/playlists", { playlist });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  deletePlayList: async ({ _id }) => {
    try {
      const response = await Api.delete(`/api/user/playlists/${_id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getVideosInPlaylist: async ({ _id }) => {
    try {
      const response = await Api.get(`/api/user/playlists/${_id}/videos`);
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
