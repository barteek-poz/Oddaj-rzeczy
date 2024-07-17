import Image from "next/image";
import decoration from "../../../public/assets/Decoration.svg";
import styles from "../../_styles/FoundationsSection.module.scss";
import Button from "../Button";
import FoundationItem from "../FoundationItem";

const foundationsList = [
  {
    name: "Dbam o zdrowie",
    mission:
      "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
    collects: "ubrania, jedzenie, sprzęt AGD, meble, zabawki",
  },
  {
    name: "Dla dzieci",
    mission: "Cel i misja: Pomoc dzieciom z ubogich rodzin.",
    collects: "ubrania, meble, zabawki",
  },
  {
    name: "Bez domu",
    mission:
      "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
    collects: "ubrania, jedzenie, ciepłe koce",
  },
  {
    name: "Fundacja A",
    mission:
      "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
    collects: "ubrania, jedzenie, ciepłe koce",
  },
  {
    name: "Fundacja B",
    mission: "Cel i misja: Pomoc dzieciom",
    collects: "ubrania, jedzenie, zabawki",
  },
  {
    name: "Fundacja C",
    mission:
      "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
    collects: "ubrania, jedzenie, ciepłe koce",
  },
];

const foundationsDescription =
  "W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.";

const organizationsList = [
  {
    name: "Lorem 1",
    mission: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
    collects: "Egestas, sed, tempus",
  },
  {
    name: "Lorem 2",
    mission:
      "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
    collects: "Egestas, sed, tempus",
  },
  {
    name: "Lorem 3",
    mission: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
    collects: "Egestas, sed, tempus",
  },
  {
    name: "Lorem 4",
    mission:
      "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
    collects: "Ut, aliquam, purus, sit, amet",
  },
  {
    name: "Lorem 5",
    mission: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
    collects: "Egestas, sed, tempus",
  },
  {
    name: "Lorem 6",
    mission: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
    collects: "Egestas, sed, tempus",
  },
];
const organizationsDescription =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.";
const localsList = [
  {
    name: "Local 1",
    mission: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
    collects: "Egestas, sed, tempus",
  },
  {
    name: "Local 2",
    mission:
      "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
    collects: "Egestas, sed, tempus",
  },
  {
    name: "Local 3",
    mission: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
    collects: "Egestas, sed, tempus",
  },
  {
    name: "Local 4",
    mission:
      "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
    collects: "Ut, aliquam, purus, sit, amet",
  },
  {
    name: "Local 5",
    mission: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
    collects: "Egestas, sed, tempus",
  },
  {
    name: "Local 6",
    mission: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
    collects: "Egestas, sed, tempus",
  },
];
const localsDescription =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.";

const FoundationsSection = () => {
  return (
    <section id="foundations" className={styles.foundationsSection}>
      <h2>Komu pomagamy?</h2>
      <Image src={decoration} alt="decoration" />
      <div className={styles.foundationBtns}>
        <Button active={true}>Fundacjom</Button>
        <Button>
          Organizacjom <br /> pozarządowym
        </Button>
        <Button>
          Lokalnym <br /> zbiórkom
        </Button>
      </div>
      <div className={styles.foundationsBox}>
        <p className={styles.foundationTitle}>{foundationsDescription}</p>
        <ul>
          {foundationsList.map((fund) => {
            return (
              <li key={fund.name}>
                <FoundationItem
                  fundType="Fundacja"
                  name={fund.name}
                  mission={fund.mission}
                  collects={fund.collects}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default FoundationsSection;
