import styles from '../_styles/Button.module.scss'
const Button = ({ children, onBtnClick, active }) => {
  return <button onClick={onBtnClick} className={active ?`${styles.btn} ${styles.active}` :`${styles.btn}`}>{children}</button>;
};

export default Button;
