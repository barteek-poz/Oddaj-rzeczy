import styles from '../_styles/FoundationItem.module.scss'
import { Merriweather} from "next/font/google";

const merriweather = Merriweather({ subsets: ["latin"], weight: ["400", '300'] });
const FoundationItem = ({ fundType, name, mission, collects }) => {
  return (
    <div className={`${styles.foundationBox} ${merriweather.className}`}>
      <div className={styles.foundationTitle}>
        <span>{fundType}"{name}"</span>
        <p>{mission}</p>
      </div>
      <p className={styles.foundationCollects}>{collects}</p>
    </div>
  );
};

export default FoundationItem;
