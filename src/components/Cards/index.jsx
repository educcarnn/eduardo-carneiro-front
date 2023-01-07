import { useState } from "react";
import { Api } from "../../services/api";
import { useEffect } from "react";

export default function Cards() {
  const [content, setContent] = useState([]);

  useEffect(() => {
    Api.get("people/").then((res) => {
      setContent(res.data.results);
      console.log(res)
    });
  }, [content]);

  console.log(content)
  return (
    <div>
      {content?.map((item) => (
        <div>{item?.name}</div>
      ))} 
    </div>
  );
}
