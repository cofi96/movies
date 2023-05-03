import { Outlet } from 'react-router-dom';

import Header from '../../shared/header/header';

function PageLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default PageLayout;
