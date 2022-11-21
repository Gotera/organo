import { useState } from 'react';
import { Banner } from './components/Banner';
import { Footer } from './components/Footer';
import Form from './components/Formulary';
import Time from './components/Time';

function App() {

  const times = [
    {
      name: 'Programação',
      colorPrimary: '#57C278',
      colorSecundary: '#D9F7E9'
    },
    {
      name: 'Front-End',
      colorPrimary: '#82CFFA',
      colorSecundary: '#E8F8FF'
    },
    {
      name: 'Data Science',
      colorPrimary: '#A6D157',
      colorSecundary: '#F0F8E2'
    },
    {
      name: 'Devops',
      colorPrimary: '#E06B69',
      colorSecundary: '#FDE7E8'
    },
    {
      name: 'Ux e Design',
      colorPrimary: '#DB6EBF',
      colorSecundary: '#FAE9F5'
    },
    {
      name: 'Mobile',
      colorPrimary: '#FFBA05',
      colorSecundary: '#FFF5D9'
    },
    {
      name: 'Inovação e Gestão',
      colorPrimary: '#FF8A29',
      colorSecundary: '#FFEEDF'
    },
  ]

  const [colaboretors, setColaboretors] = useState([]) 

  const onNewColaboretorAdd = (colaboretor) => {
    setColaboretors([...colaboretors, colaboretor])
  }

  return (
    <div className="App">
      <Banner />
      <Form 
        times={ times.map(time => time.name) } 
        onNewColaboretorRegister={colaboretor => onNewColaboretorAdd(colaboretor)}
      />

      { times.map(time => <Time name={ time.name } 
      key={ time.name } 
      colorPrimary={ time.colorPrimary }
      colorSecundary={ time.colorSecundary }
      colaboretors={ colaboretors.filter(colaboretor => colaboretor.time === time.name) }
      />) }
      <Footer />
    </div>
  );
}

export default App;
