import { Link, NavLink } from "react-router-dom";
import { Box } from "src/components";
import { LinkButton } from "src/components/Button";
import { useBrowse } from "src/contexts";

const SideNavBar = ({ categories }) => {
  const { browsingState } = useBrowse();
  const isActiveLink = ({ isActive }) => (isActive ? "active" : "");
  return (
    <Box display="flex" direction="column" style={{ minWidth: "15rem" }}>
      <h3>Home</h3>
      <hr />
      <LinkButton className={isActiveLink} color="primary" to="/home/liked">
        Liked ({browsingState.likes.length})
      </LinkButton>
      <LinkButton
        className={isActiveLink}
        color="primary"
        to="/home/watchLater"
      >
        WatchLater ({browsingState.watchLater.length})
      </LinkButton>
      <LinkButton className={isActiveLink} color="primary" to="/history">
        History
      </LinkButton>
      <LinkButton className={isActiveLink} color="primary" to="/playlists">
        Playlists
      </LinkButton>
      <h3>Categories</h3>
      <hr />
      {categories &&
        categories.map((category) => {
          return (
            <LinkButton
              key={category._id}
              color="primary"
              to={`/home/browseCategory/${category.categoryName}`}
            >
              {category.categoryName}
            </LinkButton>
          );
        })}
    </Box>
  );
};

export default SideNavBar;
