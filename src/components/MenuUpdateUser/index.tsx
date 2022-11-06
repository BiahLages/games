import Input from "../Input";
import { error, isPw, validateEmail, validateName, validatePassword } from "../../utils/validation.tools";
import { BackgroundForm, SubmitButton, ContainerVerification, VerificationResponse, FormEdit } from "./styles";
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
			<FormEdit>
				<div>
					<label>Name</label>
					<input
						placeholder="User Name"
						type="text"
						value={states.name}
						onChange={(e: any) => setStates.setName(e.target.value)}
					/>
					<label>CPF</label>
					<input
						placeholder="01234567890"
						type="text"
						value={states.cpf}
						onChange={(e: any) => setStates.setCpf(e.target.value)}
					/>
					<label>Email</label>
					<input
						placeholder="username2022@email.com"
						type="email"
						value={states.email}
						onChange={(e: any) => setStates.setEmail(e.target.value)}
					/>
					<label>Password</label>
					<input
						placeholder="********"
						type="password"
						onChange={(e: any) => setStates.setPassword(e.target.value)}
					/>
					<ContainerVerification>
						<VerificationResponse>{states.password.length > 7 ? "✅" : "⛔️"} 8 characters</VerificationResponse>
						<VerificationResponse>{isPw.test(states.password) ? "✅" : "⛔️"} Uppercase | Lowercase | Symbol | Number</VerificationResponse>
					</ContainerVerification>
				</div>
				<SubmitButton
					onClick={(): void => {
						functions.handdleUpdateUser();
					}}
				>
					Save
				</SubmitButton>
			</FormEdit>
		</BackgroundForm>
	);
};

export default MenuUpdateUser;
