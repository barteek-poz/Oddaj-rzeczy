import { useState } from "react";

const usePaginate = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [foundationsPerPage, setFoundationsPerPage] = useState(3);
    const lastFoundationIndex = currentPage * foundationsPerPage;
    const firstFoundationIndex = lastFoundationIndex - foundationsPerPage;
    return {currentPage, setCurrentPage, foundationsPerPage, firstFoundationIndex, lastFoundationIndex}
}

export default usePaginate