import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

import logo from '../../layouts/AuthLayout/assets/logo.png';

const RecuperarSenha = () => {
  return (
    <form className={'w-7 fadeinleft animation-ease-out animation-duration-500'}>
      <img className={'w-6'} src={logo} alt={'LOGO'} />
      <a href={'/'} className={'flex gap-2 align-items no-underline font-bold uppercase text-sm text-primary hover:text-primary-700 transition-duration-200 mt-3'}>
        <i className={'pi pi-arrow-left'}></i>
        {'Voltar'}
      </a>
      <h3 className={'text-3xl text-800'}>{'Informe seu email'}</h3>
      <p className={'text-xs text-500'}>
        {'Enviaremos um link de recuperação para o email informado abaixo.'}
      </p>
      <label className={'block font-bold uppercase text-sm text-500 mb-1'}>
        {'Email'}
      </label>
      <InputText
        className={'w-full'}
        type={'email'}
        placeholder={'email@email.com'}
        required
      />
      <Button className={'w-full mt-4'} label={'Enviar'} />
    </form>
  );
};

export default RecuperarSenha;
