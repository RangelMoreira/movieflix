/*user*/
INSERT INTO tb_user (name, email, password) VALUES ('Bob', 'bob@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (name, email, password) VALUES ('Ana',  'ana@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');

/*Role*/
INSERT INTO tb_role (authority) VALUES ('ROLE_VISITOR');
INSERT INTO tb_role (authority) VALUES ('ROLE_MEMBER');

/*User_Roles*/
INSERT INTO TB_USER_ROLE (user_id,role_id)  VALUES(1,1);
INSERT INTO TB_USER_ROLE (user_id,role_id) VALUES (2,2);

/*Genere*/
INSERT INTO TB_GENERE (name) VALUES ('Terror');
INSERT INTO TB_GENERE (name) VALUES ('Comédia');
INSERT INTO TB_GENERE (name) VALUES ('Desenho');
INSERT INTO TB_GENERE (name) VALUES ('Romance');

/*Movies*/
INSERT INTO TB_MOVIE (title, sub_title, synopsis, year, genere_id, img_url) VALUES 
(
	'It: Uma Obra-Prima do Medo', 
	'Um palhaço não muito engraçado!', 
	'Derry é uma pacata cidade que foi aterrorizada por um ser conhecido como A Coisa, um demônio que pode se transformar em um palhaço e se alimentar dos medos das crianças.', 
	1990, 
	1, 
	'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jKshNbCkQmcu7ja6s14qkmyNZPx.jpg'
);

INSERT INTO TB_MOVIE (title, sub_title, synopsis, year, genere_id, img_url) VALUES 
(
	'Resident Evil: O Hóspede Maldito', 
	'Um experimento secreto. Um vírus mortal. Um erro fatal.', 
	'Alice e Rain Ocampo têm a missão de destruir um laboratório genético operado pela poderosa corporação Umbrella, um dos maiores conglomerados do mundo', 
	 2002, 
	 1, 
	 'https://www.themoviedb.org/t/p/w1066_and_h600_bestv2/4Ni6XbdQV4xpR9IrT94BXH8PCcw.jpg'
);

INSERT INTO TB_MOVIE (title, sub_title, synopsis, year, genere_id, img_url) VALUES 
(
  'Midsommar: O Mal Não Espera a Noite', 
  'Que comecem as festividades.', 
  'Dani, que está de luto, convida-se para se juntar a Christian e seus amigos em uma viagem para um festival de verão único em uma remota vila sueca.', 
  2019, 
  1, 
  'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/g6GtOfXtzDpY73ef7wludoorTti.jpg'
);

INSERT INTO TB_MOVIE (title, sub_title, synopsis, year, genere_id, img_url) VALUES 
(
  'Halloween', 
  'Enfrente seu destino.', 
  'Uma equipe de documentários britânica viaja aos EUA para visitar Michael na prisão, para uma retrospectiva sobre a noite de terror.', 
  2018, 
  1, 
  'https://www.themoviedb.org/t/p/w1066_and_h600_bestv2/4Ni6XbdQV4xpR9IrT94BXH8PCcw.jpg'
);

INSERT INTO TB_MOVIE (title, sub_title, synopsis, year, genere_id, img_url) VALUES 
(
  'Click', 
  'What If You Had A Remote... That Controlled Your Universe?', 
  'Um arquiteto casado e com filhos está cada vez mais frustrado por passar a maior parte de seu tempo trabalhando. Um dia,encontra um inventor excêntrico que lhe dá um controle remoto universal, com capacidade de acelerar o tempo.', 
  2006, 
  2, 
  'https://www.themoviedb.org/t/p/w1066_and_h600_bestv2/mXBDQ9n2osF0BqBjXY9JDyadyRb.jpg'
);

INSERT INTO TB_MOVIE (title, sub_title, synopsis, year, genere_id, img_url) VALUES 
(
  'O Terno de 2 Bilhões de Dólares', 
  'Vista-se para a ação!', 
  'Jimmy Tong é o simpático chofer do milionário Clark Devlin, que acaba sofrendo um acidente que o hospitaliza. Tong é enviado para a casa de seu patrão para resolver alguns assuntos quando, sem saber, decide experimentar seu terno.', 
  2006, 
  2, 
  'https://www.themoviedb.org/t/p/w1066_and_h600_bestv2/emUboqfw2babD1ZnnGg0zoJcDc3.jpg'
);

INSERT INTO TB_MOVIE (title, sub_title, synopsis, year, genere_id, img_url) VALUES 
(
  'Se Eu Fosse Você', 
  'Uma divertida troca!', 
  'Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos.', 
  2006, 
  2, 
  'https://www.themoviedb.org/t/p/w1066_and_h600_bestv2/eC1fznkJT9ErgYGSiunmN8iivpb.jpg'
);

INSERT INTO TB_MOVIE (title, sub_title, synopsis, year, genere_id, img_url) VALUES 
(
  'A Fuga das Galinhas', 
  'Um bom filme de stop-motion.', 
  'Após frustradas tentativas de escapar da granja dos Tweedy, as galinhas, lideradas por Ginger, mantêm poucas esperanças. Mas, quando o galo voador Rocky aparece no galinheiro.', 
  2000, 
  3, 
  'https://www.themoviedb.org/t/p/w1066_and_h600_bestv2/t7aJ7hqsMLEoqBJk7yAXxcAVvcz.jpg'
);

INSERT INTO TB_MOVIE (title, sub_title, synopsis, year, genere_id, img_url) VALUES 
(
  'O Espanta Tubarões', 
  'Behind every little fish is a great white lie.', 
  'Oscar (Will Smith) é um pequeno peixe que tem sonhos grandes, que se torna um herói involuntário após pregar uma grande mentira.', 
  2004, 
  3, 
  'https://www.themoviedb.org/t/p/w1066_and_h600_bestv2/z1oPj03g6b9F5VyUTyQMp7IJ7Y9.jpg'
);

INSERT INTO TB_MOVIE (title, sub_title, synopsis, year, genere_id, img_url) VALUES 
(
  'Madagascar', 
  'Uma conspiração maluca no zoológico.', 
  'O leão Alex é a grande atração do zoológico do Central Park, em Nova York. Ele e seus melhores amigos, a zebra Marty, a girafa Melman e a hipopótamo Gloria, sempre passaram a vida em cativeiro e desconhecem o que é morar na selva.', 
  2005, 
  3, 
  'https://www.themoviedb.org/t/p/w1066_and_h600_bestv2/g2qcCWZlk9Q21B3DE1GiuascFVs.jpg'
);

INSERT INTO TB_MOVIE (title, sub_title, synopsis, year, genere_id, img_url) VALUES 
(
  'Grease - Nos Tempos da Brilhantina', 
  'De volta aos tempos da brilhantina!', 
  'Na Califórnia de 1959, a boa moça Sandy e o metido Danny se apaixonam e aproveitam um verão inesquecível na praia. Quando voltam às aulas, eles descobrem que frequentam a mesma escola.', 
  1978, 
  4, 
  'https://www.themoviedb.org/t/p/w1066_and_h600_bestv2/2SRJMIoJzABzgyGw01U6VbQbvJD.jpg'
);

INSERT INTO TB_MOVIE (title, sub_title, synopsis, year, genere_id, img_url) VALUES 
(
  'Dirty Dancing: Ritmo Quente', 
  'Tenha o tempo da sua vida.', 
  'Na esperança de curtir sua juventude, uma jovem fica decepcionada ao descobrir que seus pais passarão o verão de 1963 com ela em um resort na sonolenta região de Catskills.', 
  1978, 
  4, 
  'https://www.themoviedb.org/t/p/w1066_and_h600_bestv2/pgDeN5g7EBHCU9MwwvVxr4hefs8.jpg'
);

/*Review*/
INSERT INTO TB_REVIEW (text,movie_id,user_id) VALUES ('Uma Palhaçada',1, 2);
INSERT INTO TB_REVIEW (text,movie_id,user_id) VALUES ('Arrepilante',1, 2);

INSERT INTO TB_REVIEW (text,movie_id,user_id) VALUES ('Muito bom!',7, 2);

INSERT INTO TB_REVIEW (text,movie_id,user_id) VALUES ('Me lembra os velhos tempos',12, 2);