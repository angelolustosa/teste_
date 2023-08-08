import { Outlet } from 'react-router-dom';

import Header from 'components/Header';

const DashboardSideLayout = () => {
  return (
    <div className={'flex h-screen surface-100'}>
      <Header />
      <main className={'flex-1 p-2'}>
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardSideLayout;
