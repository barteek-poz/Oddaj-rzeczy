"use client";
import { useState } from "react";
import styles from "../_styles/FoundationList.module.scss";
import Button from "./Button";
import FoundationItem from "./FoundationItem";
import Pagination from "./Pagination";
import usePaginate from "@/_hooks/usePaginate";

const FoundationList = ({ foundationsList }) => {
  const [foundationsType, setFoundationType] = useState(foundationsList.foundations);
  const {
    currentPage,
    setCurrentPage,
    foundationsPerPage,
    firstFoundationIndex,
    lastFoundationIndex,
  } = usePaginate(foundationsType);

  const currFoundations = foundationsType.list.slice(
    firstFoundationIndex,
    lastFoundationIndex
  );

  return (
    <>
      <div className={styles.foundationBtns}>
        <Button
          active={foundationsType === foundationsList.foundations ? true : false}
          onBtnClick={(e) => {
            setFoundationType(foundationsList.foundations)
            setCurrentPage(1);
          }}>
          Fundacjom
        </Button>
        <Button
        active={foundationsType === foundationsList.organizations ? true : false}
          onBtnClick={() => {
            setFoundationType(foundationsList.organizations)
            setCurrentPage(1);
          }}>
          Organizacjom <br /> pozarządowym
        </Button>
        <Button
        active={foundationsType === foundationsList.locals ? true : false}
          onBtnClick={() => {
            setFoundationType(foundationsList.locals)
            setCurrentPage(1);
          }}>
          Lokalnym <br /> zbiórkom
        </Button>
      </div>
      <div className={styles.foundationsBox}>
        <p className={styles.foundationTitle}>{foundationsType.description}</p>
        <ul>
          {currFoundations?.map((foundation) => {
            return (
              <li key={foundation.name}>
                <FoundationItem
                  fundType="Fundacja"
                  name={foundation.name}
                  mission={foundation.mission}
                  collects={foundation.collects}
                />
              </li>
            );
          })}
        </ul>
       {foundationsType.list.length === foundationsPerPage ? null : <Pagination
          totalFoundations={foundationsType.list.length}
          foundationsPerPage={foundationsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />}
      </div>
    </>
  );
};

export default FoundationList;
