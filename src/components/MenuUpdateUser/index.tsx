import Input from "../Input";
import { error, isPw, validateEmail, validateName, validatePassword } from "../../utils/validation.tools";
import { BackgroundForm, SubmitButton, ContainerVerification, VerificationResponse } from "./styles";
// import { DataType } from "../../types/interfaces/users";
// import { useAuth } from "../../contexts/AccountContext";
import { useEffect, useState } from "react";
import { useConfigUser } from "src/contexts/ConfigUserContext";
// import { api } from "../../helpers/Api";

const MenuUpdateUser = () => {
	const { states, setStates, functions } = useConfigUser();

	// useEffect(() => {
	// 	setValidPasswordCharacters(isPw.test(valuePassword));
	// 	setValidPasswordLength(valuePassword.length > 7);
	// }, [valuePassword]);

	return (
		<BackgroundForm>
			<h1>Edit Info</h1>
			<form name="Edit">
				<div>
					<input
						placeholder="User Name"
						type="text"
						value={states.name}
						onChange={(e: any) => setStates.setName(e.target.value)}
					/>
					<input
						// label="CPF"
						placeholder="01234567890"
						type="text"
						value={states.cpf}
						onChange={(e: any) => setStates.setCpf(e.target.value)}
					/>

					<input
						// label="email"
						placeholder="username2022@email.com"
						type="email"
						value={states.email}
						onChange={(e: any) => setStates.setEmail(e.target.value)}
					/>
					<input
						// label="password"
						placeholder="********"
						type="password"
						value=""
						onChange={(e: any) => setStates.setPassword(e.target.value)}
					/>
					{/* <ContainerVerification>
						<VerificationResponse>{validPasswordLength ? "✅" : "⛔️"} 8 characters</VerificationResponse>
						<VerificationResponse>{validPasswordCharacters ? "✅" : "⛔️"} Uppercase | Lowercase | Symbol | Number</VerificationResponse>
					</ContainerVerification> */}
				</div>
				<SubmitButton
					onClick={(): void => {
						functions.handdleUpdateUser();
					}}
				/>
			</form>
		</BackgroundForm>
	);
};

export default MenuUpdateUser;
