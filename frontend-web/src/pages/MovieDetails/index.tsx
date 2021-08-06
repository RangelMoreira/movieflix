import './styles.scss';

const MovieDetails = () => {
  return (
    <div className="main">
      <div className="card-base details-card">
        <div className="image">
          <img
            src="https://www.themoviedb.org/t/p/w1066_and_h600_bestv2/4Ni6XbdQV4xpR9IrT94BXH8PCcw.jpg"
            alt="imagem"
          />
        </div>
        <div className="details">
          <h1 className="title">Titulo</h1>
          <span className="year">2000</span>
          <div className="description">
            Mussum Ipsum, cacilds vidis litro abertis. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Leite de capivaris, leite de mula manquis sem cabeça. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.
          </div>
        </div>
      </div>

      <div className="make-evaluation card-base">
        <input type="text" placeholder="Deixe sua avaliação aqui" />
        <button className="btn btn-primary ">
          SALVAR AVALIAÇÃO
        </button>
      </div>

      <div className="evaluations card-base">
        <span className="author">⭐Nome</span>
        <div className="description-evaluation">
        Mussum Ipsum, cacilds vidis litro abertis.
        </div>
      </div>

    </div>

  );
}

export default MovieDetails;

