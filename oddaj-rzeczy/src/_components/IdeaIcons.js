import Image from "next/image";
import styles from "../_styles/IdeaIcons.module.scss";
const IdeaIcons = ({ icon, title, children }) => {
  return (
    <div className={styles.ideaIcons}>
      <Image src={icon} />
      <span>{title}</span>
      <p className={styles.border}></p>
      <p>{children}</p>
    </div>
  );
};

export default IdeaIcons;
