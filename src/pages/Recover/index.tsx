import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "src/helpers/Api";
import { isPw } from "src/utils/validation.tools";

function Recover() {
	const { id, token } = useParams();

	const [password, setpassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [validPasswordCharacters, setValidPasswordCharacters] = useState(false);
	const [validPasswordLength, setValidPasswordLength] = useState(false);

	const changePassword = async () => {
		if (validPasswordCharacters && validPasswordLength) {
			if (confirmPassword === password) {
				const headers = {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				};

				const data = {
					password,
				};

				await api
					.patch(`/users/${id}`, data, headers)
					.then(res => {
						console.log("changePassword ", "Senha atualizada");
					})
					.catch(error => console.log("changePassword", `Erro ${error.status} senha não atualizada`));
			} else {
				console.log("changePassword", "As senhas não conferem");
			}
		} else {
			console.log("changePassword", "A senha deve ter senha 8 caracteres com 1 letra 1 número e 1 caractere especial");
		}
	};

	useEffect(() => {
		setValidPasswordCharacters(isPw.test(password));
		setValidPasswordLength(password.length > 7);
	}, [password]);

	return (
		<>
			<fieldset>
				<fieldset>
					<label htmlFor="">Nova Senha</label>
					<input
						type="password"
						onChange={e => {
							setpassword(e.target.value);
						}}
					/>
				</fieldset>

				<br />

				<fieldset>
					<label htmlFor="">Confirme a nova senha</label>
					<input
						type="password"
						onChange={e => {
							setConfirmPassword(e.target.value);
						}}
					/>
				</fieldset>

				<br />

				<button onClick={() => changePassword()}>Enviar</button>
			</fieldset>
		</>
	);
}

export default Recover;
