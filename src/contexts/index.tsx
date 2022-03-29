import { AuthProvider, useAuth } from "./auth.context";
import { ThemeProvider, useTheme } from "./theme.context";
import { BrowsingProvider, useBrowse } from "./browsing.context";

interface Props {
  children: React.ReactNode;
}

const Provider = ({ children }: Props) => {
  return (
    <AuthProvider>
      <BrowsingProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </BrowsingProvider>
    </AuthProvider>
  );
};

export { Provider, useTheme, useAuth, useBrowse };
