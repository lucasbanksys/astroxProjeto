import Slider from "../../components/Slider/Slider";
import Search from "../../components/Search/Search";
import Container from "../../components/Container/Container";
import Card from "../../components/Card/Card";
import "./Home.css";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [games, setGames] = useState([]);
  const [mounted, setMounted] = useState(false);

  const getData = async () => {
    await axios.get("/game/findMany").then((response) => {
      if (mounted) {
        setGames(response.data);
      }
    });
  };

  useEffect(() => {
    setMounted(true);
    getData();
  }, [mounted]);

  return (
    <div className="home">
      <Slider
        id="08014b08-6cbc-4c49-b5b9-1886fd44c2ac"
        classificationNumber="L"
        classificationText="Livre para qualquer idade"
      />
      <Search />
      <Container title="Destaques">
        {games.map((game) => (
          <Card
            id={game.id}
            image={game.image}
            title={game.name}
            preco={game.price}
            key={game.id}
          />
        ))}
      </Container>
    </div>
  );
}
