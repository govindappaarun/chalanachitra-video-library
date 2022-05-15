import { Box } from "src/components";
import { LinkButton } from "src/components/Button";
import { useBrowse } from "src/contexts";
import styled from "styled-components";
import { BsHeart, BsClockHistory } from "react-icons/bs";
import { MdOutlineWatchLater, MdOutlineFeaturedPlayList } from "react-icons/md";
import { FaFirefoxBrowser } from "react-icons/fa";

const Wrapper = styled(Box)`
  min-width: 15rem;
  padding: 1rem;
  background-color: ${(p) => p.theme.base.main};
  color: ${(p) => p.theme.base.contrast};
  box-shadow: 1px 0px 5px ${(p) => p.theme.background.bg40};
`;

const SideNavBar = ({ categories }) => {
  const { browsingState } = useBrowse();
  const isActiveLink = ({ isActive }) => (isActive ? "active" : "");
  return (
    <Wrapper display="flex" gap="sm" direction="column">
      <hr />
      <LinkButton className={isActiveLink} color="primary" to="/home">
        <BsHeart /> Browse
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
      <hr />
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
      <hr />
    </Wrapper>
  );
};

export default SideNavBar;
