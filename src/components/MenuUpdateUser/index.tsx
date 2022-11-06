import { isPw } from "../../utils/validation.tools";
import { BackgroundForm, SaveButton, ContainerVerification, VerificationResponse } from "./styles";
// import { useEffect, useState } from "react";
import { useConfigUser } from "src/contexts/ConfigUserContext";

const MenuUpdateUser = (): JSX.Element => {
	const { states, setStates, functions } = useConfigUser();

	return (
		<BackgroundForm>
			<h1>Edit Info</h1>
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
				<SaveButton
					onClick={(): void => {
						functions.handdleUpdateUser();
					}}
				>
					Save
				</SaveButton>
			</div>
		</BackgroundForm>
	);
};

export default MenuUpdateUser;
