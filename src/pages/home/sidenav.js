import { Box } from "src/components";
import { LinkButton } from "src/components/Button";
import { useBrowse } from "src/contexts";
import styled from "styled-components";

const Wrapper = styled(Box)`
  min-width: 15rem;
  padding: 1rem;
`;

const SideNavBar = ({ categories }) => {
  const { browsingState } = useBrowse();
  const isActiveLink = ({ isActive }) => (isActive ? "active" : "");
  return (
    <Wrapper display="flex" direction="column">
      <LinkButton className={isActiveLink} color="primary" to="liked">
        Liked ({browsingState.likes.length})
      </LinkButton>
      <LinkButton className={isActiveLink} color="primary" to="watchLater">
        WatchLater ({browsingState.watchLater.length})
      </LinkButton>
      <LinkButton className={isActiveLink} color="primary" to="history">
        History
      </LinkButton>
      <LinkButton className={isActiveLink} color="primary" to="playlists/list">
        Playlists
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
    </Wrapper>
  );
};

export default SideNavBar;
