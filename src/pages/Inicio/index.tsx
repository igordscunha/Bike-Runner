import cardapio from 'data/estoque.json';
import styles from './Inicio.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import nossaCasa from 'assets/nossa_casa.png';
import { useNavigate } from 'react-router-dom';
import { Bike } from 'types/Estoque';

export default function Inicio() {
  let bikesRecomendadas = [...cardapio];
  bikesRecomendadas = bikesRecomendadas.sort(() => 0.5 - Math.random()).splice(0, 3);
  const navigate = useNavigate();

  function redirecionarParaDetalhes(bike: Bike) {
    navigate(`/bike/${bike.id}`, { state: { bike }, replace: true });
  }
  return (
    <section>
      <h3 className={stylesTema.titulo}>
        Recomendações
      </h3>
      <div className={styles.recomendados}>
        {bikesRecomendadas.map(item => (
          <div key={item.id} className={styles.recomendado}>
            <div className={styles.recomendado__imagem}>
              <img src={item.photo} alt={item.title} />
            </div>
            <button
              className={styles.recomendado__botao}
              onClick={() => redirecionarParaDetalhes(item)}
            >
              Ver mais
            </button>
          </div>
        ))}
      </div>
      <h3 className={stylesTema.titulo}> Nossa casa </h3>
      <div className={styles.nossaCasa}>
        <img src={nossaCasa} alt="Bike Runner" />
        <div className={styles.nossaCasa__endereco}>
          Rua da Alfândega, 31 <br /> <br /> Centro - RJ
        </div>
      </div>
    </section>
  );
}