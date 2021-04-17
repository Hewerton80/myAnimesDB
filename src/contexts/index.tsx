import { ReactNode } from "react";
import { SearchProvider } from './SearchContex';

interface ProvidersProps {
    children: ReactNode;
}

function Providers({ children }: ProvidersProps) {
    return (
        <SearchProvider>
            { children}
        </SearchProvider>
    )
}

export default Providers;