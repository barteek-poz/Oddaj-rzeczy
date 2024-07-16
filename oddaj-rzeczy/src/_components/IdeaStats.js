import styles from "../_styles/IdeaStats.module.scss";
const IdeaStats = ({ number, title }) => {
  return (
    <div className={styles.ideaStats}>
      <span>{number}</span>
      <p className={styles.title}>{title}</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a
        elit viverra elementuma. Aliquam erat volutpat.
      </p>
    </div>
  );
};

export default IdeaStats;
