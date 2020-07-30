import React from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault/index'; 

function CadastroVideo () {
    return (
      <PageDefault>
        <h1>Cadastro de vídeo</h1>

        <Link to="/cadastro/categorias">
          Cadastrar categoria
        </Link>
      </PageDefault>
    );
  };

export default CadastroVideo;