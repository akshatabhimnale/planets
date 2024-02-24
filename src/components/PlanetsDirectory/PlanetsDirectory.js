import React, { useState, useEffect } from "react";
import PlanetCard from "../PlanetCard/PlanetCard";
import { Pagination, Button } from "@mui/material";
import "./PlanetsDirectory.css";

const PlanetsDirectory = () => {
  const [planets, setPlanets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  const fetchPlanets = async (page) => {
    try {
      const response = await fetch(
        `https://swapi.dev/api/planets/?format=json&page=${page}`
      );
      const data = await response.json();
      setPlanets(data.results);
      setPageCount(Math.ceil(data.count / 10));
    } catch (error) {
      console.error("Error fetching planets:", error);
    }
  };

  useEffect(() => {
    fetchPlanets(currentPage);
  }, [currentPage]);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <div className="planets-directory">
      <div className="planets">
        {planets.map((planet) => (
          <PlanetCard key={planet.name} planet={planet} />
        ))}
      </div>
      <div className="pagination-controls">
        <Pagination
          count={pageCount}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </div>
    </div>
  );
};

export default PlanetsDirectory;
