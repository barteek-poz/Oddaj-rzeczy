import styles from "../../_styles/IdeaSection.module.scss";
import decoration from "../../../public/assets/Decoration.svg";
import icon1 from "../../../public/assets/Icon-1.svg";
import icon2 from "../../../public/assets/Icon-2.svg";
import icon3 from "../../../public/assets/Icon-3.svg";
import icon4 from "../../../public/assets/Icon-4.svg";
import Image from "next/image";
import IdeaStats from "../IdeaStats";
import IdeaIcons from "../IdeaIcons";
import LinkButton from "../LinkButton";

const IdeaSection = () => {
  return (
    <section>
      <div className={styles.ideaStatsBox} id="idea">
        <IdeaStats number="10" title="Oddanych worków" />
        <IdeaStats number="5" title="Wspartych organizacji" />
        <IdeaStats number="7" title="Zorganizowanych zbiórek" />
      </div>
      <div className={styles.ideaHeaderBox}>
        <h2>Wystarczą 4 proste kroki</h2>
        <Image src={decoration} />
      </div>
      <div className={styles.ideaIconsBox}>
        <IdeaIcons icon={icon1} title="Wybierz rzeczy">
          ubrania, zabawki, sprzęt i inne
        </IdeaIcons>
        <IdeaIcons icon={icon2} title="Spakuj je">
          skorzystaj z worków na śmieci
        </IdeaIcons>
        <IdeaIcons icon={icon3} title="Zdecyduj komu chcesz pomóc">
          wybierz zaufane miejsce
        </IdeaIcons>
        <IdeaIcons icon={icon4} title="Zamów kuriera">
          kurier przyjedzie w dogodnym terminie
        </IdeaIcons>
      </div>
      <div className={styles.ideaBtn}>
        <LinkButton href="/login">
          Oddaj <br /> rzeczy
        </LinkButton>
      </div>
    </section>
  );
};

export default IdeaSection;
