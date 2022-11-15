import { useState } from 'react';
import { Banner } from './components/Banner';
import Form from './components/Formulary';
import Time from './components/Time';

function App() {
  const [colaboretors, setColaboretors] = useState('') 

  const onNewColaboretorAdd = (colaboretor) => {
    console.log(colaboretor)
    setColaboretors([...colaboretors, colaboretor])
  }

  return (
    <div className="App">
      <Banner />
      <Form onNewColaboretorRegister={colaboretor => onNewColaboretorAdd(colaboretor)}/>
      <Time />
    </div>
  );
}

export default App;
