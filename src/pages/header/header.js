import React from "react";
import { Button, NavBar } from "src/components";
import { Wrapper, ThemeIcon, StyledNavBar } from "./header.styled";
import Box from "src/components/Box";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useAuth, useTheme } from "src/contexts";
import clsx from "clsx";
import {
  RiNotificationLine,
  RiSearchLine,
  RiUserLine,
  RiVideoLine,
} from "react-icons/ri";

export default function Header({ ...rest }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { authState, signOut } = useAuth();
  const { theme, toggleTheme } = useTheme();

  const doLogout = () => {
    signOut();
    navigate("/login");
  };

  return (
    <Wrapper as="header" {...rest}>
      <StyledNavBar
        justifyContent="space-between"
        alignItems="center"
        className="navbar py-1"
      >
        <div className="nav-left flex-gap-2">
          <Box
            display="flex"
            onClick={() => navigate("/home")}
            alignItems="center"
            gap="xs"
            className="brand-container"
          >
            <RiVideoLine style={{ fontSize: "2rem" }} />
            <h3>Chalanachitra</h3>
          </Box>
        </div>

        <div className="nav-right flex-gap-2">
          {authState.isLoggedIn ? (
            <>
              {/* <div className="search-bar">
                <RiSearchLine style={{ fontSize: "2rem" }} />
                Enter something to search
              </div> */}
              {/* <RiNotificationLine
                style={{ fontSize: "2rem" }}
                className="mx-1"
              /> */}
              <ThemeIcon
                className={clsx("mx-1", { reverse: theme === "dark" })}
                onClick={toggleTheme}
              >
                {theme}
              </ThemeIcon>
              <Link to="/home/profile">
                <RiUserLine className="mx-1" style={{ fontSize: "2rem" }} />
              </Link>
              <Button
                onClick={doLogout}
                color="warning"
                outline
                className="btn btn-link btn-link-warning"
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              {!location.pathname.includes("signup") && (
                <Button
                  onClick={() => navigate("/signup")}
                  color="primary"
                  outline
                  className="btn btn-link btn-link-warning"
                >
                  Create Account
                </Button>
              )}

              {!location.pathname.includes("login") && (
                <Button
                  onClick={() => navigate("/login")}
                  color="primary"
                  className="btn btn-warning"
                >
                  Sign In
                </Button>
              )}
            </>
          )}
        </div>
      </StyledNavBar>
    </Wrapper>
  );
}
