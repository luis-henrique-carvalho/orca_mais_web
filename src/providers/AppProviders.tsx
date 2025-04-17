import { AuthProvider } from "@/context/AuthContext";
import { ThemeProvider } from "@/components/theme-provider";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
interface AppProvidersProps {
    children: React.ReactNode;
}

const queryClient = new QueryClient()

const AppProviders = ({ children }: AppProvidersProps) => {
    return (
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                    {children}
                </ThemeProvider>
            </AuthProvider>
        </QueryClientProvider>
    );
};

export default AppProviders;
