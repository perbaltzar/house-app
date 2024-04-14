import { RecipeForm } from 'components/forms/RecipeForm';
import { PageWrapper } from 'components/layouts/PageWrapper';
import { Heading } from 'components/typography/Heading/Heading';
import { Providers } from 'hooks/Providers';
import './root.css';

export const App = () => {
  return (
    <Providers>
      <main>
        <PageWrapper>
          <Heading>Receptboken</Heading>
          <RecipeForm />
        </PageWrapper>
      </main>
    </Providers>
  );
};
