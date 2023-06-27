import React, { createContext, useContext} from 'react';

const AppContext = createContext<unknown | undefined>(undefined);

interface IchildrenProps {
    children: React.ReactNode;
}

const AppProvider = ({ children }: IchildrenProps) => {

    // mounting the context api, and logging random meals to the console
    React.useEffect(() => {
        const fetchMeals = async () => {
            try {
                const response = await fetch('https://randomuser.me/api/?results=10');
                const data = await response.json();
                console.log(data);
            } catch (error: any) {
                console.log(error.stack)
            }
        }
        fetchMeals();
    }, []);

  return (
    <AppContext.Provider value={{

    }}>
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => {
    const context = useContext(AppContext);
    if (context === undefined) 
        throw new Error('useGlobalContext must be used within a AppProvider');
    
    return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { AppProvider, useGlobalContext };

