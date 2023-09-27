const SecondaryHeader = () => {
	return (
		<div class="secondary-header">
			<button style={{ backgroundColor: "transparent", border: 0, padding: 0 }} class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"></button>
			<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
				<li><a class="dropdown-item" href="#">Ação</a></li>
				<li><a class="dropdown-item" href="#">Aventura</a></li>
				<li><a class="dropdown-item" href="#">Arquitetura</a></li>
				<li><a class="dropdown-item" href="#">Direito</a></li>
				<li><a class="dropdown-item" href="#">Economia</a></li>
				<li><a class="dropdown-item" href="#">Pedagogia</a></li>
				<li><a class="dropdown-item" href="#"><strong>Ver todos</strong></a></li>
			</ul>

			<p>Mais Vendidos</p>
			<p>Livros Recomendados</p>
			<div className="dropdown">
				<button style={{ backgroundColor: "transparent", border: 0, padding: 0 }} class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
					Livros por Idioma
				</button>
				<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
					<li><a class="dropdown-item" href="#">Inglês</a></li>
					<li><a class="dropdown-item" href="#">Espanhol</a></li>
					<li><a class="dropdown-item" href="#">Alemão</a></li>
					<li><a class="dropdown-item" href="#">Italiano</a></li>
					<li><a class="dropdown-item" href="#">Françês</a></li>
					<li><a class="dropdown-item" href="#">Japonês</a></li>
					<li><a class="dropdown-item" href="#"><strong>Ver todos</strong></a></li>
				</ul>
			</div>
		</div>
	)
}

export default SecondaryHeader;