import { createContext, useContext, useState } from "react";
import { AllProvidersProps } from "../interfaces/interfaces";
import type { Dispatch, SetStateAction } from "react";

interface OrderSettingsProviderData {
  orderBy: string;
  orderDirection: string;
  category: string;
  pageLength: number;
  setOrderBy: Dispatch<SetStateAction<string>>;
  setOrderDirection: Dispatch<SetStateAction<string>>;
  setCategory: Dispatch<SetStateAction<string>>;
  setPageLenght: Dispatch<SetStateAction<number>>;
}

const OrderContext = createContext({} as OrderSettingsProviderData);

export const OrderSettingsProvider = ({
  children,
}: AllProvidersProps): JSX.Element => {
  const [orderBy, setOrderBy] = useState("creation");
  const [orderDirection, setOrderDirection] = useState("desc");
  const [category, setCategory] = useState("all");
  const [pageLength, setPageLenght] = useState(6);

  return (
    <OrderContext.Provider
      value={{
        orderBy,
        orderDirection,
        category,
        pageLength,
        setOrderBy,
        setOrderDirection,
        setCategory,
        setPageLenght,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrderSettings = (): OrderSettingsProviderData =>
  useContext(OrderContext);
