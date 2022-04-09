import { Card } from "src/components";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfileCard = styled(Card)`
  width: 30rem;
  aspect-ratio: 1;
  box-shadow: 2px 3px 2px ${(p) => p.theme.background.bg30};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(p) => p.theme.background.bg40};
`;
