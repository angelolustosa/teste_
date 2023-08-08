import { useState } from 'react';

import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

import logo from '../../layouts/AuthLayout/assets/logo.png';

const RedefinirSenha = () => {
  const [passVisibility, setPassVisibility] = useState<string>('password');

  function handleVisibility() {
    if ('password' === passVisibility) {
      setPassVisibility('text');
    } else {
      setPassVisibility('password');
    }
  }

  return (
    <form className={'w-7 fadeinleft animation-ease-out animation-duration-500'}>
      <img className={'w-6'} src={logo} alt={'LOGO'} />
      <h3 className={'text-3xl text-800'}>{'Informe seu email'}</h3>
      <p className={'text-xs text-500'}>
        {'Cadastre sua nova senha.'}
      </p>
      <label className={'block font-bold uppercase text-sm text-500 mb-1'}>
        {'Nova Senha'}
      </label>
      <span className={'block w-full mb-3 p-input-icon-right'}>
        <i
          className={`pi cursor-pointer hover:text-primary-700 ${
            'password' === passVisibility ? 'pi-eye-slash' : 'pi-eye'
          }`}
          onClick={() => handleVisibility()}
        />
        <InputText
          className={'w-full'}
          type={passVisibility}
          placeholder={'*******'}
          required
        />
      </span>
      <label className={'block font-bold uppercase text-sm text-500 mb-1'}>
        {'Confirmar Senha'}
      </label>
      <span className={'block w-full mb-3 p-input-icon-right'}>
        <i
          className={`pi cursor-pointer hover:text-primary-700 ${
            'password' === passVisibility ? 'pi-eye-slash' : 'pi-eye'
          }`}
          onClick={() => handleVisibility()}
        />
        <InputText
          className={'w-full'}
          type={passVisibility}
          placeholder={'*******'}
          required
        />
      </span>
      <Button className={'w-full mt-4'} label={'Confirmar'} />
    </form>
  );
};

export default RedefinirSenha;
