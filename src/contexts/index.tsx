import { AuthProvider, useAuth } from "./auth.context";
import { ThemeProvider, useTheme } from "./theme.context";
import { BrowsingProvider, useBrowse } from "./browsing.context";
import { AlertProvider } from "./alert.context";
import IconProvider from "./icon.context";

interface Props {
  children: React.ReactNode;
}

const Provider = ({ children }: Props) => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AlertProvider>
          <BrowsingProvider>
            <IconProvider>{children}</IconProvider>
          </BrowsingProvider>
        </AlertProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export { Provider, useTheme, useAuth, useBrowse };
