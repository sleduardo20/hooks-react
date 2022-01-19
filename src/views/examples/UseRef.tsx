import { useEffect, useRef, useState } from 'react';
import { PageTitle } from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

const merge = (v1: string, v2: string) => {
  return [...v1]
    .map((value, i) => {
      return `${value}${v2[i] || ''}`;
    })
    .join('');
};

function UseRef() {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const count = useRef(0);
  const inputRef1 = useRef<HTMLInputElement>(null);
  const inputRef2 = useRef<HTMLInputElement>(null);

  useEffect(() => {
    count.current += 1;
    inputRef2.current?.focus();
  }, [value1]);

  useEffect(() => {
    count.current += 1;
    inputRef1.current?.focus();
  }, [value2]);

  return (
    <div className="UseRef">
      <PageTitle
        title="Hook UseRef"
        subtitle="Retorna um objeto mutável com a propriedade .current!"
      />
      <SectionTitle title="Exercicio #01" />
      <div className="center">
        <div>
          <span className="text">Valor: </span>
          <span className="text">{merge(value1, value2)}[</span>
          <span className="text red">{count.current}</span>
          <span className="text ">]</span>
        </div>
        <input
          ref={inputRef1}
          type="text"
          className="input"
          value={value1}
          onChange={e => setValue1(e.target.value)}
        />

        <SectionTitle title="Exercicio #02" />
        <div className="center">
          <input
            ref={inputRef2}
            type="text"
            className="input"
            value={value2}
            onChange={e => setValue2(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default UseRef;
