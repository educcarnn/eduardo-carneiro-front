import { useState } from "react";
import { Api, ApiPages } from "../../services/api";
import { useEffect } from "react";
import { DivApp, DivCards, DivCardsMain, DivMain } from "./style";
import ReactLoading from "react-loading";

export default function Cards({ type, color, itemsPerPage }) {
  const [content, setContent] = useState([]);
  const [isLoad, setIsLoad] = useState(true);
  const dataTypes = ["films", "people", "planets", "species", "vehicles"];
  const [swapiData, setSwapiData] = useState(null);
  const [category, setCategory] = useState(null);

  const getData = async (type) => {
    setCategory(type);
    const response = await fetch(`https://swapi.dev/api/${type}/`);
    const data = await response.json();
    setSwapiData(data);
  };

  const getPage = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setSwapiData(data);
  };

  useEffect(() => {
    async function getContent() {
      try {
        const { data } = await Api.get("people");
        setContent(data.results);
      } catch (error) {
        console.log("Ocorreu um erro ao buscar os items");
      } finally {
        setIsLoad(false);
      }
    }
    getContent();
  }, [content]);

  return (
    <div>
      {isLoad ? (
        <ReactLoading type={type} color={color} height={"20%"} width={"20%"} />
      ) : (
        <>
          {dataTypes.map((type) => (
            <div>
              <button name={type} onClick={(e) => getData(e.target.name)}>
                {type}
              </button>
            </div>
          ))}
          <DivApp>
            {swapiData &&
              swapiData.results.map((item) =>
                category === "films" ? (
                  <p>{item.title}</p>
                ) : (
                  <DivMain>
                    <div className="DivCards">
                      <p>Nome{item.name} </p>
                      <span>{item.mass}</span>
                      <span>Aniversário: {item?.birth_year}</span>
                      <button>Saiba mais</button>
                    </div>
                  </DivMain>
                )
              )}
            {swapiData && (swapiData.next || swapiData.previous) ? (
              <div>
                <button
                  disabled={!swapiData.previous}
                  onClick={() => getPage(swapiData.previous)}
                >
                  Página anterior
                </button>
                <button
                  disabled={!swapiData.next}
                  onClick={() => getPage(swapiData.next)}
                >
                  Próxima página
                </button>
              </div>
            ) : null}
          </DivApp>
        </>
      )}
    </div>
  );
}
