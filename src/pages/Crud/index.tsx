import { useEffect, useState, useRef } from 'react';

import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { DataTable } from 'primereact/datatable';
import { InputText } from 'primereact/inputtext';
import { Sidebar } from 'primereact/sidebar';
import { Toast } from 'primereact/toast';

type crudItem = {
  param1: number,
  param2: string
}
const Crud = () => {
  const [visibleCreate, setVisibleCreate] = useState<boolean>(false);
  const [visibleEdit, setVisibleEdit] = useState<boolean>(false);
  const [crudItems, setCrudItems] = useState<crudItem[]>([]);
  const toast = useRef<Toast>(null);
  const accept = () => {
    toast.current?.show({ severity: 'success', summary: 'Aviso:', detail: 'Item deletado!', life: 3000 });
  };

  const confirmDelete = () => {
    confirmDialog({
      message: 'Deseja realmente deletar este item?',
      header: 'Atenção:',
      icon: 'pi pi-exclamation-circle',
      accept,
    });
  };
  const acoesTemplate = (rowData : crudItem) => {
    return (
      <div className={'flex justify-content-between gap-2'}>
        <Button icon={'pi pi-pencil'} rounded size={'small'} onClick={() => setVisibleEdit(true)} />
        <Button icon={'pi pi-trash'} rounded size={'small'} onClick={() => confirmDelete()} />
      </div>
    );
  };

  function getItems() {
    return setCrudItems([{ param1: 1, param2: 'param 1' }, { param1: 2, param2: 'param 2' }]);
  }

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div className={'bg-white	p-3 shadow-2 border-round-md overflow-hidden'}>
      <h2
        className={'flex justify-content-between align-items-center text-600'}
      >
        {'Crud'}
        <Button label={'Novo crud'} onClick={() => setVisibleCreate(true)} />
      </h2>
      <DataTable value={crudItems} size={'small'} stripedRows paginator rows={5} rowsPerPageOptions={[10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
        <Column field={'param1'} header={'Param 1'}></Column>
        <Column field={'param2'} header={'Param 2'}></Column>
        <Column field={'acoes'} header={'Ações'} body={acoesTemplate} className={'w-1 text-center'}></Column>
      </DataTable>

      <Sidebar
        visible={visibleCreate}
        position={'right'}
        onHide={() => setVisibleCreate(false)}
      >
        <form>
          <h3 className={'mt-0'}>{'Criar'}</h3>
          <label className={'block font-bold uppercase text-sm text-500 mb-1'}>
            {'Campo 1'}
          </label>
          <InputText
            className={'w-full mb-3'}
            type={'text'}
            placeholder={'campo 1'}
            required
          />
          <Button className={'w-full'} label={'Salvar'} />
        </form>
      </Sidebar>

      <Sidebar
        visible={visibleEdit}
        position={'right'}
        onHide={() => setVisibleEdit(false)}
      >
        <form>
          <h3 className={'mt-0'}>{'Editar'}</h3>
          <label className={'block font-bold uppercase text-sm text-500 mb-1'}>
            {'Campo 1'}
          </label>
          <InputText
            className={'w-full mb-3'}
            type={'text'}
            placeholder={'campo 1'}
            required
          />
          <Button className={'w-full'} label={'Salvar'} />
        </form>
      </Sidebar>

      <Toast ref={toast} position={'bottom-right'} />
      <ConfirmDialog />
    </div>
  );
};

export default Crud;
