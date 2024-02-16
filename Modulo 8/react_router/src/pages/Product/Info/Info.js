import { useParams } from "react-router-dom";

const Info = () => {
  const { id } = useParams();
  return (
    <>
      <h1>Mais Informações sobre o produto: {id}</h1>
    </>
  );
};

export default Info;
