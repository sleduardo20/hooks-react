import { PageTitle } from '../../components/layout/PageTitle';

function Home() {
  return (
    <div className="Home">
      <PageTitle error title="404" subtitle="Opss... Página Não Encontrada!" />
    </div>
  );
}

export default Home;
