import { useEffect, useState } from "react";
import { DataContext } from "./DataContextTS";
import type { ReactNode } from "react";
import type { Item } from "./DataContextTS";

type Props = {
  children: ReactNode;
};

export function DataProvider({ children }: Props) {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const url = "https://dummyjson.com/products";
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setItems(res.products);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products", err);
        setLoading(false);
      });
  }, []);

  return (
    <DataContext.Provider value={{ items, loading }}>
      {children}
    </DataContext.Provider>
  );
}
