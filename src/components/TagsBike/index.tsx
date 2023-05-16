import classNames from 'classnames';
import { Bike } from 'types/Estoque';
import styles from './TagsBike.module.scss';

export default function TagsBike({category, size, serving, price}: Bike) {
  return (
    <div className={styles.tags}>
      <div className={classNames({
        [styles.tags__tipo]: true,
        [styles[`tags__tipo__${category.label.toLowerCase()}`]]: true
      })}>{category.label}</div>
      <div className={styles.tags__aro}>Aro {size}</div>
      <div className={styles.tags__pessoa}>{serving}</div>
      <div className={styles.tags__valor}>R$ {price.toFixed(2)}</div>
    </div>
  );
}