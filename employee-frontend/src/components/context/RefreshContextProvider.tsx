import { ReactNode, createContext, useState } from "react";

export interface RefreshContextType {
    refresh: number;
    setRefresh: React.Dispatch<React.SetStateAction<number>>;
}

export const RefreshContext = createContext<RefreshContextType | null>(null);

interface RefreshContextProviderProps {
    children: ReactNode;
}

const RefreshContextProvider: React.FC<RefreshContextProviderProps> = ({
    children,
}) => {
    const [refresh, setRefresh] = useState(0);

    return (
        <RefreshContext.Provider value={{ refresh, setRefresh }}>
            {children}
        </RefreshContext.Provider>
    );
};
export default RefreshContextProvider;
