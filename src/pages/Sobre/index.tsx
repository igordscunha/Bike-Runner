import styles from './Sobre.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import loja from 'assets/sobre/loja.png';
import bike1 from 'assets/sobre/bike1.png';
import bike2 from 'assets/sobre/bike2.png';

const imagens = [bike1, bike2];

export default function Sobre() {
  return (
    <section>
      <h3 className={stylesTema.titulo}> Sobre </h3>
      <div className={styles.sobreNos}>
        <img src={loja} alt="Bike Runner" className={styles.sobreNos__imagemprincipal}/>
        <div className={styles.sobreNos__texto}>
          <p>
            A Bike Runner tem o diferencial de ser feito por ciclistas. Por isso, entendemos e entregamos exatamente o que você precisa, seja iniciante ou intermediário pra cima.
          </p>
          <p>
            Com mais de 30 anos de mercado, a Bike Runner hoje está consolidada no topo do país na questão bicicletas e acessórios.
          </p>
          <p>
            Nossas bikes tem a mais alta excelência de qualidade e entregamos para todo o Brasil.
          </p>
        </div>
      </div>
      <div className={styles.imagens}>
        {imagens.map((imagem, index) => (
          <div key={index} className={styles.imagens__imagem}>
            <img src={imagem} alt="imagem de bike" />
          </div>
        ))}
      </div>
    </section>
  );
}