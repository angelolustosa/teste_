import { useState } from 'react';

import { TabMenu } from 'primereact/tabmenu';

const Configuracoes = () => {
  const [tabActive, setTabActive] = useState<number>(0);
  const items = [
    { label: 'Perfil' },
    { label: 'Etapas' },
    { label: 'Valor de alçada' },
    { label: 'Carteiras' },
  ];
  return (
    <div className={'bg-white	p-3 shadow-2 border-round-md overflow-hidden'}>
      <h2 className={'text-600'}>{'Configurações'}</h2>
      <TabMenu model={items} activeIndex={tabActive} onTabChange={(e) => setTabActive(e.index)} />
      <div className={'pt-3'}>
        {
          0 === tabActive &&
            <div>
              {'Home'}
            </div>
        }
        {
          1 === tabActive &&
            <div>
              {'Etapas'}
            </div>
        }
        {
          2 === tabActive &&
            <div>
              {'Valor de alçada'}
            </div>
        }
        {
          3 === tabActive &&
            <div>
              {'Carteiras'}
            </div>
        }
      </div>
    </div>
  );
};

export default Configuracoes;
