import React from "react";
import { Button, NavBar } from "src/components";
import { Wrapper, ThemeIcon, StyledNavBar } from "./header.styled";
import Box from "src/components/Box";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth, useCart, useTheme } from "src/contexts";
import clsx from "clsx";

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
            <h3>Chalanachitra</h3>
          </Box>
        </div>

        <div className="nav-right flex-gap-2">
          {authState.isLoggedIn ? (
            <>
              <ThemeIcon
                className={clsx("mx-1", { reverse: theme === "dark" })}
                onClick={toggleTheme}
              >
                {theme}
              </ThemeIcon>
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
