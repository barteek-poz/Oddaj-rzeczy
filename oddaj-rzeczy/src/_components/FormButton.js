import styles from "../_styles/FormButton.module.scss"
const FormButton = ({children, onBtnClick}) => {
return <button className={styles.formButton} onClick={onBtnClick}>{children}</button>
}

export default FormButton