import { Avatar } from 'primereact/avatar';
import { Menu } from 'primereact/menu';

import logo from './assets/logo.png';

const Header = () => {
  const items = [
    { separator: true },
    { label: 'Dashboard', icon: 'pi pi-home', url: '/dashboard', className: 'hover:text-primary-700' },
    { label: 'Crud', icon: 'pi pi-list', url: '/dashboard/crud' },
    { label: 'Configurações', icon: 'pi pi-cog', url: '/dashboard/configuracoes' },
    { separator: true },
    {
      template: () => {
        return (
          <div className={'mt-2 p-2 flex gap-2 align-items-center'}>
            <Avatar label={'G'} size={'large'} shape={'circle'} className={'surface-100 text-800 font-bold'} />
            <div className={'flex-1'}>
              <h5 className={'m-0 text-800'}>{'Gleidson Teixeira'}</h5>
              <a href={'/'} className={'m-0 text-xs text-primary font-bold no-underline'}>{'Sair'}</a>
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <header className={'w-2 p-2  h-full'}>
      <nav className={'surface-0 border-round-md shadow-3'}>
        <img className={'w-full p-3'} src={logo} alt={'LOGO'} />
        <Menu model={items} className={'w-full border-0 text-sm'} />
      </nav>
    </header>
  );
};

export default Header;
