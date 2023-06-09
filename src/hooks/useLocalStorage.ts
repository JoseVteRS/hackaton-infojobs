import { useState } from "react";


export const useLocalStorage = (key: string, initialValue?: any) => {
    const [storedValue, setStoredValue] = useState(() => {

        if (typeof window !== 'undefined') {
            const item = localStorage.getItem(key);
            try {
                return item ? JSON.parse(item) : initialValue;
            } catch (error) {
                console.log(error);
            }
        }
        return initialValue;
        
    });

    const setValue = (value: any) => {
        try {
            const valueToStore =
                typeof value === 'function' ? value(storedValue) : value;

            setStoredValue(valueToStore);

            if (typeof window !== 'undefined') {
                localStorage.setItem(key, JSON.stringify(valueToStore));
            }
        } catch (error) {
            console.log(error);
        }
    };

    return [storedValue, setValue];
};