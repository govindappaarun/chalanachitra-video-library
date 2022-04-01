export type Video = {
  _id: string;
};

export type BrwosingState = {
  likes: Video[];
  watchLater: Video[];
  history: Video[];
};

export const initialState: BrwosingState = {
  likes: [],
  watchLater: [],
  history: [],
};

type Action =
  | { type: "DO_LIKE"; payload: Record<string, any> }
  | { type: "REMOVE_LIKE"; payload: Record<string, any> }
  | { type: "DO_WATCHLATER"; payload: Record<string, any> }
  | { type: "REMOVE_FROM_WATCHLATER"; payload: Record<string, any> }
  | { type: "ADD_TO_HISTORY"; payload: Record<string, any> }
  | { type: "CLEAR_HISTORY"; payload: null };

export const browsingReducer = (
  state: BrwosingState,
  { type, payload }: Action
) => {
  switch (type) {
    case "DO_LIKE": {
      const { _id } = payload;
      return {
        ...state,
        likes: [...state.likes, _id],
      };
    }
    case "REMOVE_LIKE": {
      const { _id } = payload;
      return {
        ...state,
        likes: state.likes.filter((id) => id !== _id),
      };
    }
    case "DO_WATCHLATER": {
      const { _id } = payload;
      return {
        ...state,
        watchLater: [...state.watchLater, _id],
      };
    }
    case "REMOVE_FROM_WATCHLATER": {
      const { _id } = payload;
      return {
        ...state,
        watchLater: state.watchLater.filter((id) => id !== _id),
      };
    }
    case "ADD_TO_HISTORY": {
      const { _id } = payload;
      return {
        ...state,
        history: [...state.history, _id],
      };
    }
    case "CLEAR_HISTORY": {
      return {
        ...state,
        history: [],
      };
    }
    default:
      throw new Error(`Invalid action type ${type}`);
  }
};
