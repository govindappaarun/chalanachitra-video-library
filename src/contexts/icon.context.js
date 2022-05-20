import { IconContext } from "react-icons";

const IconProvider = ({ children }) => (
  <IconContext.Provider value={{ className: "react-icon", size: "1.75rem" }}>
    {children}
  </IconContext.Provider>
);

export default IconProvider;
