import Extraordinario from "../imagens/extraordinario.jpg";
import HomemDeGiz from "../imagens/o-homem-de-giz.jpg";
import CaminhoDosReis from "../imagens/o-caminho-dos-reis.jpg";
import Livro from "./Livro";

const Container = () => (
	<div className="container">
		<div className="mais-vendidos">
			<h3>Mais Vendidos</h3>
			<div className="book-carrousel">
				<Livro imagem={HomemDeGiz} nome="O Homem de Giz" autor="C.J. Tudor" preco="15.00" />
				<Livro imagem={Extraordinario} nome="O Extraordinário" autor="R.J. Palacio" preco="15.00" />
				<Livro imagem={CaminhoDosReis} nome="O Caminho dos Reis" autor="Brandon Sanderson" preco="16.00"></Livro>
			</div>
		</div>

		<div className="mais-vendidos">
			<h3>Melhores Avaliados</h3>
			<div className="book-carrousel">
				<Livro imagem={HomemDeGiz} nome="O Homem de Giz" autor="C.J. Tudor" preco="15.00" />
				<Livro imagem={Extraordinario} nome="O Extraordinário" autor="R.J. Palacio" preco="15.00" />
				<Livro imagem={CaminhoDosReis} nome="O Caminho dos Reis" autor="Brandon Sanderson" preco="16.00"></Livro>
			</div>
		</div>
	</div>
);

export default Container;
