import Image from "next/image";
import decoration from "../../public/assets/Decoration.svg";
import styles from '../_styles/FormThankYou.module.scss'
const FormThankYou = () => {
return <div className={styles.thankYou}>
    <h2>Dziękujemy za przesłanie formularza <br/> Na maila prześlemy wszelkie informacje o odbiorze.</h2>
    <Image src={decoration} alt="decoration" />
</div>
}

export default FormThankYou