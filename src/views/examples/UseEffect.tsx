import { useEffect, useState } from 'react';
import { PageTitle } from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

const calcFactorial = (value: number) => {
  if (value < 0) {
    return -1;
  }
  if (value === 0) {
    return 1;
  }

  const result: number = calcFactorial(value - 1) * value;
  return result;
};

function UseEffect() {
  const [number, setNumber] = useState<number>(1);
  const [factorial, setFactorial] = useState(1);
  const [status, setStatus] = useState('');

  useEffect(() => {
    setFactorial(calcFactorial(number));

    setStatus(number % 2 === 0 ? 'Par' : 'Impar');
  }, [number]);

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />
      <SectionTitle title="Exercicio #01" />
      <div className="center">
        <div>
          <span className="text">Fatorial:</span>
          <span className="text red">
            {factorial < 0 ? 'Não Existe' : factorial}
          </span>
        </div>
        <input
          type="number"
          className="input"
          value={number}
          onChange={event => setNumber(Number(event.target.value))}
        />
      </div>

      <SectionTitle title="Exercicio #02" />
      <div className="center">
        <span className="text">status:</span>
        <span className="text red">{status}</span>
      </div>
    </div>
  );
}

export default UseEffect;
