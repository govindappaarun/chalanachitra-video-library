import { createContext, useContext, useEffect, useReducer } from "react";
import { authReducer, initialState } from "src/reducers/auth.reducer";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    if (user && token) {
      dispatch({ type: "DO_LOGIN", payload: JSON.parse(user) });
    }
  }, []);

  const signOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    dispatch({ type: "DO_LOGOUT" });
  };

  return (
    <AuthContext.Provider
      value={{ authState: state, authDispatch: dispatch, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
