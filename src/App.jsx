import "./App.css";
import { useState, useEffect } from "react";
import Card from "./components/card/Card";
import CircularProgress from "@mui/material/CircularProgress";
function App() {
  const [cards, setCards] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setPage] = useState(1);

  const getCardData = async () => {
    try {
      setloading(true);
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?limit=9&_page=${page}`
      );
      const data = await response.json();
      setloading(false);
      if(data.length) setCards(prev => [...prev, ...data]);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleScroll = () => {
    try {
      // console.log("window.innerHeight: " + window.innerHeight);
      // console.log("document.documentElement.scrollTop: " + document.documentElement.scrollTop);
      // console.log("document.documentElement.scrollHeight: " + document.documentElement.scrollHeight);
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setPage((prev) => prev + 1);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCardData();
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  if (loading) {
    return (
      <div className="container">
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className="container">
      {cards.length > 0 &&
        cards.map((item) => {
          return <Card itemData={item} key={`${item.id}-${item.title}-${Math.random(0,50)}`} />;
        })}
    </div>
  );
}

export default App;
