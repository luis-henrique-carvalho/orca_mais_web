import { AuthProvider } from "@/context/AuthContext";
import { ThemeProvider } from "@/components/theme-provider";
interface AppProvidersProps {
    children: React.ReactNode;
}

const AppProviders = ({ children }: AppProvidersProps) => {
    return (
        <AuthProvider>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                {children}
            </ThemeProvider>
        </AuthProvider>
    );
};

export default AppProviders;
