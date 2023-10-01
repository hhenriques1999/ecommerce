import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
	return (
		<div className="header">
			<div className="main-header">
				<div className="ds-flex">
					<h1>Livraria</h1>
				</div>

				<div className="search">
					<input
						id="search-input"
						className="header-input"
						type="text"
						name="input"
						placeholder="Buscar..."
					/>
					<label htmlFor="search-input">
						<i className="fa fa-search" aria-hidden="true"></i>
					</label>
				</div>

				<div className="ds-flex nav-search-section gap-4">


					<div className="ds-flex gap-4 navigation flex-row">
						<Link to="/login">
							<div className="icon-text">
								<i className="fa fa-user-circle-o" aria-hidden="true"></i>
								<br />
								<span>Entrar</span>
							</div>
						</Link>
						<Link to="/cart">
							<div className="icon-text">
								<i className="fa fa-shopping-cart" aria-hidden="true"></i>
								<br />
								<span>Carrinho</span>
							</div>
						</Link>
					</div>

					<Link to="/sobre-nos">
						<Button variant="danger text-black">Sobre Nós</Button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Header;
