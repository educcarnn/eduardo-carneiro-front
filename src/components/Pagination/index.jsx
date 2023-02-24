import { useContext } from 'react';
import { CharacterContext } from '../../context/CharacterContext';

const Pagination = () => {
  const { nextPage, previousPage } = useContext(CharacterContext);

  return (
    <div>
      <button onClick={previousPage}>Anterior</button>
      <button onClick={nextPage}>Próxima</button>
    </div>
  );
};

export default Pagination;