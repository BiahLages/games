import { OrderSettingsProviderData } from "../types/interfaces/order";
import { AllProvidersProps } from "../types/interfaces/system";
import { createContext, useContext, useState } from "react";

const OrderContext = createContext({} as OrderSettingsProviderData);

export const OrderSettingsProvider = ({ children }: AllProvidersProps): JSX.Element => {
	const [orderBy, setOrderBy] = useState("score");
	const [orderDirection, setOrderDirection] = useState("desc");
	const [pageLength, setPageLenght] = useState(5);

	return (
		<OrderContext.Provider
			value={{
				orderBy,
				orderDirection,
				pageLength,
				setOrderBy,
				setOrderDirection,
				setPageLenght,
			}}
		>
			{children}
		</OrderContext.Provider>
	);
};

export const useOrderSettings = (): OrderSettingsProviderData => useContext(OrderContext);
