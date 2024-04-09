import { Button } from 'components/common/Button/Button';
import { Providers } from 'hooks/Providers';

export const App = () => {
  return (
    <Providers>
      <main>
        <h1>Receptboken</h1>
        <Button text="Klick" />
      </main>
    </Providers>
  );
};
