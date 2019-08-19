import React from 'react';
import PropTypes from 'prop-types';

const Actions = ( {handleClickRepositorios, handleClickFavoritos} ) => (
  <div className="actions">
      <button
      onClick={handleClickRepositorios}>
        Ver Repositórios
      </button>

      <button
      onClick={handleClickFavoritos}>
        Ver favoritos
      </button>
  </div>
)

Actions.propTypes = {
  handleClickRepositorios: PropTypes.func.isRequired,
  handleClickFavoritos: PropTypes.func.isRequired
}

export default Actions;
