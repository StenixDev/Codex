'use client';
import { useState } from 'react';
import { BookContext } from './_context/BookContext';

type DataProp = {
  service: string;
  hours: number;
  price: number;
};

function BookProvider({ children }: React.PropsWithChildren) {
  const [data, setData] = useState<DataProp | null>(null);

  return (
    <BookContext.Provider value={{ data, setData }}>
      {children}
    </BookContext.Provider>
  );
}

export default BookProvider;
