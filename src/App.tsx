import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './assets/styles/global.style';
import Homepage from './pages/homepage/homepage';
import { colors } from './assets/styles/config/variables.style';
import LoginPage from './pages/login/loginPage';
import { User } from './models/user';
import { useUserContext } from './context/user.context';
import PageLayout from './components/page-layout/page-layout';

function ProtectedRoute({ user, redirectPath = '/' }: { user: User | null; redirectPath: string }) {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
}

function App() {
  const { user } = useUserContext();
  return (
    <ThemeProvider theme={colors}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<LoginPage />} />
          <Route element={<PageLayout />}>
            <Route element={<ProtectedRoute user={user} redirectPath="/" />}>
              <Route path="/home" element={<Homepage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
