import { Box } from "src/components";
import { LinkButton } from "src/components/Button";
import { useBrowse } from "src/contexts";
import styled from "styled-components";
import { BsHeart, BsClockHistory } from "react-icons/bs";
import { MdOutlineWatchLater, MdOutlineFeaturedPlayList } from "react-icons/md";
import { FaFirefoxBrowser } from "react-icons/fa";

const Wrapper = styled(Box)`
  min-width: 20rem;
  padding: 1rem;
  background-color: ${(p) => p.theme.base.main};
  color: ${(p) => p.theme.base.contrast};
  .links {
    border-bottom: 1px solid lightgray;
    padding: 2rem auto;
    padding-bottom: 3rem;
    a {
      padding: 1rem;
      font-size: 1.5rem;
      margin: 0.5rem 0;
      gap: 1rem;
    }
    a:hover {
      color: #e88c33;
      font-weight: 500;
    }
  }
`;

const SideNavBar = ({ categories }) => {
  const { browsingState } = useBrowse();
  const isActiveLink = ({ isActive }) => (isActive ? "active" : "");
  return (
    <Wrapper display="flex" gap="sm" direction="column">
      <Box className="links">
        <LinkButton className={isActiveLink} color="primary" to="/home" end>
          <FaFirefoxBrowser /> Browse
        </LinkButton>
        <LinkButton className={isActiveLink} color="primary" to="liked">
          <BsHeart /> Liked ({browsingState.likes.length})
        </LinkButton>
        <LinkButton className={isActiveLink} color="primary" to="watchLater">
          <MdOutlineWatchLater /> WatchLater ({browsingState.watchLater.length})
        </LinkButton>
        <LinkButton className={isActiveLink} color="primary" to="history">
          <BsClockHistory /> History
        </LinkButton>
        <LinkButton className={isActiveLink} color="primary" to="playlists">
          <MdOutlineFeaturedPlayList /> Playlists
        </LinkButton>
      </Box>
      <Box className="links">
        {categories &&
          categories.map((category) => {
            return (
              <LinkButton
                key={category._id}
                color="primary"
                to={`browseCategory/${category.categoryName}`}
              >
                {category.categoryName}
              </LinkButton>
            );
          })}
      </Box>
    </Wrapper>
  );
};

export default SideNavBar;
