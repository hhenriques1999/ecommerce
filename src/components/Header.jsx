import { Link } from "react-router-dom";
import "./Header.css";
import { Button } from "react-bootstrap";

const Header = () => {
	return (
		<div className="header">
			<div className="main-header">
				<div className="ds-flex">
					<h1>Livraria</h1>
				</div>
				<div st className="ds-flex">
					<Link to="/sobre-nos"><Button>Sobre Nós</Button></Link>
					<div>
						<label for="search-input">
							<i className="fa fa-search" aria-hidden="true"></i>
						</label>
						<input
							id="search-input"
							class="header-input"
							type="text"
							name="input"
							placeholder=""
						/>
					</div>
					<a href="">
						<i style={{ padding: 10 }} class="fa fa-user-circle-o" aria-hidden="true"></i>
						<br />
						Entrar
					</a>
					<a href="">
						<i style={{ padding: 10 }} class="fa fa-shopping-cart" aria-hidden="true"></i>
						<br />
						Carrinho
					</a>
				</div>
			</div>
		</div>
	);
};

export default Header;
