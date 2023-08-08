import { Outlet } from 'react-router-dom';

import icon from './assets/icon.png';

const AuthLayout = () => {
  return (
    <div className={'flex h-screen align-items-center'}>
      <div className={'flex justify-content-center flex-1'}>
        <Outlet />
      </div>
      <div className={'h-screen flex flex-1 justify-content-center align-items-center surface-100'}>
        <img className={'w-5 opacity-20'} src={icon} alt={'icon'} />
      </div>
    </div>
  );
};

export default AuthLayout;
