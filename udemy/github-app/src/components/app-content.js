import React from 'react';
import PropTypes from 'prop-types';

import Search from './search';
import UserInfo from './userinfo';
import Actions from './actions';
import Repos from './repos';

const AppContent = ( {
  userinfo,
  repos,
  starred,
  isFetching,
  isError,
  handleSearch,
  handleClickRepositorios,
  handleClickFavoritos
}) => (
  <div className='app'>
        <Search isDisabled={isFetching} handleSearch={handleSearch} />

        { isError && <div>Erro, ou usuário não encontrado</div> }

        { !isError && isFetching && <div>Carregando...</div> }

        { !isError && !isFetching && !!userinfo && <UserInfo userinfo={ userinfo } /> }
        { !isError && !isFetching && !!userinfo &&
          <Actions
            handleClickRepositorios={ handleClickRepositorios }
            handleClickFavoritos={ handleClickFavoritos }
          /> }

        {!!repos.length && <Repos
          className='repos'
          title="Repositórios:"
          repos={repos}
        />
        }

        {!!starred.length && <Repos
          className='starred'
          title="Favoritos:"
          repos={starred}
        />
        }
    </div>
);

AppContent.propTypes = {
  userinfo: PropTypes.object,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  handleSearch: PropTypes.func.isRequired,
  handleClickRepositorios: PropTypes.func.isRequired,
  handleClickFavoritos: PropTypes.func.isRequired
}

export default AppContent;