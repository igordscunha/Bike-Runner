import styles from './Item.module.scss';
import { Bike } from 'types/Estoque';
import TagsBike from 'components/TagsBike';
import { useNavigate } from 'react-router-dom';

export default function Item(props: Bike) {
  const { id, title, description, photo } = props;
  const navigate = useNavigate();
  return (
    <div className={styles.item} onClick={() => navigate(`/bike/${id}`)}>
      <div className={styles.item__imagem}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2> {title} </h2>
          <p> {description} </p>
        </div>
        <TagsBike {...props} />
      </div>
    </div>
  );
}