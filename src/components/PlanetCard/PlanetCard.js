import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import ResidentsList from "../ResidentsList/ResidentsList";
import "./PlanetCard.css"; // Import CSS file

const PlanetCard = ({ planet }) => {
  const [planetResidents, setPlanetResidents] = useState([]);
  const [showCard, setShowCard] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchResidents = async () => {
      try {
        const residentRequests = planet.residents.map((residentUrl) =>
          fetch(residentUrl).then((response) => response.json())
        );
        const residentData = await Promise.all(residentRequests);
        setPlanetResidents(residentData);
        setShowCard(true); // Set showCard to true once residents are fetched
      } catch (error) {
        console.error("Error fetching residents:", error);
      } finally {
        setIsLoading(false); // Set isLoading to false after fetching data (whether success or error)
      }
    };

    fetchResidents();
  }, [planet.residents]);

  return (
    <Card className={`planet-card ${showCard ? "show" : ""}`}>
      {isLoading ? ( // Display loading text if isLoading is true
        <CardContent>
          <Typography>Loading...</Typography>
        </CardContent>
      ) : (
        <CardContent className="planet-card-content">
          <Typography variant="h5" component="h2">
            {planet.name}
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            Climate: {planet.climate}
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            Population: {planet.population}
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            Terrain: {planet.terrain}
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            Residents:
          </Typography>
          <div className="scrollable-residents">
            <ResidentsList residents={planetResidents} />
          </div>
        </CardContent>
      )}
    </Card>
  );
};

export default PlanetCard;
