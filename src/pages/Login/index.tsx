/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';

import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { InputText } from 'primereact/inputtext';

import logo from '../../layouts/AuthLayout/assets/logo.png';

const Login = () => {
  const [passVisibility, setPassVisibility] = useState<string>('password');
  const [staylogged, setStayLogged] = useState<boolean>(false);

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
      <h3 className={'text-3xl text-800'}>{'Seja bem-vindo(a)'}</h3>
      <label className={'block font-bold uppercase text-sm text-500 mb-1'}>
        {'Email'}
      </label>
      <InputText
        className={'w-full mb-3'}
        type={'email'}
        placeholder={'email@email.com'}
        required
      />
      <label className={'block font-bold uppercase text-sm text-500 mb-1'}>
        {'Senha'}
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
      <div className={'flex justify-content-between align-items-center'}>
        <div className={'flex align-items-center gap-2'}>
          <Checkbox
            id={'manterLogado'}
            checked={staylogged}
            onClick={() => setStayLogged(!staylogged)}
          />
          <span
            className={'text-xs text-500 cursor-pointer'}
            onClick={() => setStayLogged(!staylogged)}
          >
            {'Manter-me logado'}
          </span>
        </div>
        <a
          href={'/recuperar-senha'}
          className={
            'text-xs text-primary hover:text-primary-700 transition-duration-200 no-underline'
          }
        >
          {'Esqueci minha senha'}
        </a>
      </div>
      <Button className={'w-full mt-4'} label={'Entrar'} />
    </form>
  );
};

export default Login;
