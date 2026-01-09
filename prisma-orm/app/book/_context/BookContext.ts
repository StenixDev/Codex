import { createContext, useContext } from 'react';
type DataProp = {
  service: string;
  hours: number;
  price: number;
};
type BookContextType = {
  data: DataProp[];
  setData: React.Dispatch<React.SetStateAction<DataProp[]>>;
};
export const BookContext = createContext<BookContextType>({
  data: [],
  setData: () => {}, // Provide a no-op function as default
});

export function useBookContext() {
  const context = useContext(BookContext);

  if (context === undefined) {
    throw new Error(
      'useBookContext must be used within a BookContext.Provider'
    );
  }

  return context;
}
