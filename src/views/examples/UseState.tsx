import { useState } from 'react';
import { PageTitle } from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

function UseState() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  return (
    <div className="UseState">
      <PageTitle
        title="Hook UseState"
        subtitle="Estado em componentes funcionais!"
      />
      <SectionTitle title="Exercicio #01" />
      <div className="center">
        <span className="text">{count}</span>
        <div>
          <button
            className="btn"
            type="button"
            onClick={() => setCount(count - 1)}
          >
            -1
          </button>
          <button
            className="btn"
            type="button"
            onClick={() => setCount(count + 1)}
          >
            +1
          </button>
          <button
            className="btn"
            type="button"
            onClick={() => setCount(state => state + 100)}
          >
            +100
          </button>
        </div>
      </div>

      <SectionTitle title="Exercicio #02" />
      <input
        type="text"
        className="input"
        value={name}
        onChange={event => setName(event.target.value)}
      />
    </div>
  );
}

export default UseState;
