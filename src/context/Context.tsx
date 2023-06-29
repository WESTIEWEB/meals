/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useContext} from 'react';
import { mealUrl } from '../config';
import { apiGet } from '../utils/axiosUtils';
import { useState } from 'react';

const AppContext = createContext<unknown | undefined>(undefined);

interface IchildrenProps {
    children: React.ReactNode;
}

const AppProvider = ({ children }: IchildrenProps) => {
    const [meals, setMeals] = useState<Array<Record<string, any>>>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchMeals = async (url: string) => {
        try {
            const { data } = await apiGet(url);
            if(!data) return;
            setMeals(data.meals);
            setLoading(true);
        } catch (error: any) {
            console.log(error.stack)
        }
    }
    // mounting the AppProvider
    React.useEffect(() => {
        fetchMeals(mealUrl);
    }, []);

  return (
    <AppContext.Provider value={{
        meals,
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

