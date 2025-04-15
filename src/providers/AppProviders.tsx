import { AuthProvider } from "@/context/AuthContext";

interface AppProvidersProps {
    children: React.ReactNode;
}

const AppProviders = ({ children }: AppProvidersProps) => {
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    );
};

export default AppProviders;
