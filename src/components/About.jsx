import React from 'react';
import './About.css';

function About() {
	return (
		<div className="about-bg">
			<div className="about-container">
				<h2>Sobre Nós</h2>
				<p>
					A Livraria se dedica a compartilhar o amor pela leitura aos leitores.
					Fundada em 2020, trabalhamos dia e noite para selecionar livros que inspirem, eduquem e
					entretenham nossos clientes.
				</p>
				<h3>Nossa Missão</h3>
				<p>
					Nossa missão é fornecer um espaço acolhedor e inclusivo onde os amantes de livros possam
					encontrar o seu próximo livro favorito.
				</p>
				<h3>Nossa Equipe</h3>
				<p>
					Nossa equipe possui indivíduos apaixonados pela leitura que estão sempre prontos
					para ajudá-lo a encontrar o livro perfeito.
				</p>
			</div>
		</div>
	);
};

export default About;
