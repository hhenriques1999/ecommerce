const Livro = ({ imagem, nome, autor, preco }) => (
	<div className="book-container">
		<img src={imagem} alt={nome} />
		<div>
			<h5>{nome}</h5>
			<p>{autor}</p>
			<br />
			<p>R$ {preco}</p>
		</div>
	</div>
);

export default Livro;