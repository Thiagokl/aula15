import { createContext, useCallback, useEffect, useState } from "react";

export const  AppContext = createContext({});

const getInicialState = () => {
    const localData = localStorage.getItem('favorites');
    if (!localData) {
        return [];

    }
    return JSON.parse(localData);

}

export const AppProvider = ({ children }) => {
const [favorites, setFavorites] = useState(getInicialState);

const add = useCallback((item) => {
   setFavorites([...favorites, item.id]);
}, [favorites]);

const remove = useCallback((item) => {
  const filtered = favorites.filter((id) => id !== item.id);
  setFavorites(filtered);
}, [favorites]);

const set = useCallback((items) => {
    setFavorites(items);
});

useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
}, [favorites]);

return (
    <AppContext.Provider value={{ favorites, add, remove, set }}>
        { children }
    </AppContext.Provider>
);

}