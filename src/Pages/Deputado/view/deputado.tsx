import React from 'react';
import { useLocation } from 'react-router-dom';
import deputadoService from '../services/deputadoService';
import { IPartido } from '../../../models/Partidos';
import { IDeputados } from '../../../models/Deputados';

interface ILocationDeputado {
  partido: IPartido;
}

const Deputado = () => {
  const location = useLocation();
  const { partido } = location.state as ILocationDeputado;

  const [deputados, setDeputados] = React.useState<IDeputados | null>();

  const fetchDeputados = async () => {
    const deputados = await deputadoService.getMembros(partido.id);
    setDeputados(deputados);
  };

  React.useEffect(() => {
    fetchDeputados();
  }, []);

  return (
    <div>
      <h1>Deputados do partido {partido.nome}</h1>
			{deputados && deputados.dados ? deputados.dados.map((deputado) => (
				<h2 key={deputado.id}>
					{deputado.nome}
				</h2>
			))}
    </div>
  );
};

export default Deputado;
