import { useContext } from 'react';
import { CharacterContext } from '../../context/CharacterContext';

const Pagination = () => {
  const { nextPage, previousPage } = useContext(CharacterContext);

  return (
    <div>
      <button onClick={previousPage}>Previous</button>
      <button onClick={nextPage}>Next</button>
    </div>
  );
};

export default Pagination;