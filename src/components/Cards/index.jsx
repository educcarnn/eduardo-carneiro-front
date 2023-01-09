import { useState } from "react";
import { Api } from "../../services/api";
import { useEffect } from "react";
import { DivCards, DivCardsMain } from "./style";

export default function Cards() {
  const [content, setContent] = useState([]);
  const [films, setFilms] = useState([]);

  useEffect(() => {
    Api.get("people/").then((res) => {
      setContent(res.data.results);
    });
  }, [content]);

  console.log(content);

  return (
    <DivCardsMain>
      {content?.map((item) => (
        <DivCards>
          <p>Nome: {item?.name}</p>
          <span>Aniversário: {item?.birth_year}</span>
          <span>Massa: {item?.mass}</span >
        </DivCards>
      ))}
    </DivCardsMain>
  );
}
