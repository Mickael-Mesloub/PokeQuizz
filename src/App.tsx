import { FC } from 'react';
import { Home } from './pages/Home';
import { LearnPage } from './pages/Learn';
import { LogoApp } from './components/Logo';
import { QuizzPage } from './pages/Quizzpage';
import { LeaderBoard } from './pages/LeaderBoard';
import { LoginPage } from './pages/Login';

export const App: FC = () => {
  return (
    <div>
      <LogoApp />
      {<Home />}
      {/*<LearnPage />*/}
      {/*<QuizzPage />*/}
      {/*<LeaderBoard />*/}
    </div>
  );
};
