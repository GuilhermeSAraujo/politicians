import React from 'react';
import homeService from '../services/homeService';
import { IPartidos } from '../../../models/Partidos';
import { Link } from 'react-router-dom';

const Home = () => {
  const [partidos, setPartidos] = React.useState<IPartidos | null>();

  const fetchPartidos = async () => {
    const partidos = await homeService.getPartidos();
    setPartidos(partidos);
  };

  React.useEffect(() => {
    fetchPartidos();
  }, []);

  return (
    <div>
      <h1>Partidos</h1>
      <div>
        {partidos && partidos.dados
          ? partidos.dados.map((partido) => (
              <h2 key={partido.sigla}>
                <button>
                  <Link to='/deputado' state={{ data: partido }}>
                    {partido.sigla} - {partido.nome}
                  </Link>
                </button>
              </h2>
            ))
          : null}
      </div>
    </div>
  );
};

export default Home;
