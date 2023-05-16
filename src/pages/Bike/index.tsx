import styles from './Bike.module.scss';
import { useParams, useNavigate, Routes, Route } from 'react-router-dom';
import estoque from 'data/estoque.json';
import NotFound from 'pages/NotFound';
import PaginaPadrao from 'components/PaginaPadrao';
import TagsBike from 'components/TagsBike';

export default function Bike() {
  const { id } = useParams();
  const navigate = useNavigate();
  const bike = estoque.find(item => item.id === Number(id));
  if (!bike) {
    return <NotFound />;
  }
  return (
    <Routes>
      <Route path="*" element={<PaginaPadrao />}>
        <Route index element={
          <>
            <button className={styles.voltar} onClick={() => navigate(-1)}>
              {'< Voltar'}
            </button>
            <div className={styles.container}>
              <h1 className={styles.titulo}>
                {bike.title}
              </h1>
              <div className={styles.imagem}>
                <img src={bike.photo} alt={bike.title} />
              </div>
              <div className={styles.conteudo}>
                <p className={styles.conteudo__descricao}>
                  {bike.description}
                </p>
              </div>
              <TagsBike {...bike} />
              <div className={styles.container}>
                <button className={styles.container__botao}>Adicionar ao Carrinho</button>
              </div>
            </div>
          </>
        } />
      </Route>
    </Routes>
  );
}