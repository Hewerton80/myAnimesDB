import { createContext, ReactNode, useCallback, useState } from "react";

interface ISearchProps {
    handleShowSearch: (show: boolean) => void;
    showSearch: boolean;
}
interface SearchContexProps {
    children: ReactNode;
}

const SearchContex = createContext<ISearchProps>({} as ISearchProps);

function SearchProvider({ children }: SearchContexProps) {

    const [showSearch, setshowSearch] = useState(false);

    const handleShowSearch = useCallback((show: boolean) => {
        setshowSearch(show);
    }, []);

    return (
        <SearchContex.Provider
            value={{
                handleShowSearch,
                showSearch
            }}
        >
            {children}
        </SearchContex.Provider>
    )
}

export { SearchContex, SearchProvider };