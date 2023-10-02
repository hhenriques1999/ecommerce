import React from 'react';
import './Login.css';

function Login() {
	return (
		<div className="login-bg">
			<div className="login-container">
				<h2>Login</h2>
				<form className="login-form">
					<div className="form-group">
						<label htmlFor="usuario">Usuário</label>
						<input type="text" id="usuario" name="usuario" required />
					</div>
					<div className="form-group">
						<label htmlFor="senha">Senha</label>
						<input type="senha" id="senha" name="senha" required />
					</div>
					<button type="submit">Login</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
