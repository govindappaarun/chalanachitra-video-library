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
    <AuthProvider>
      <AlertProvider>
        <BrowsingProvider>
          <IconProvider>
            <ThemeProvider>{children}</ThemeProvider>
          </IconProvider>
        </BrowsingProvider>
      </AlertProvider>
    </AuthProvider>
  );
};

export { Provider, useTheme, useAuth, useBrowse };
