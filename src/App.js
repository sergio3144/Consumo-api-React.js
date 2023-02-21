import React from 'react';
import './App.css';
import { Concejos } from './components/concejos';

function App() {

  const [apiText, setApiText] = React.useState('Dont judge a book by its cover, unless it has a synopsis on the back.')
  const [numberApi, setNumberApi] = React.useState('117')

    const api = async () => {
      setApiText('Esperando concejo...');
      await fetch('https://api.adviceslip.com/advice').then(res => res.json()).then(data => {
        const { slip } = data;
        setNumberApi(slip.id)
        setApiText(slip.advice);
      })
    }

  return (
    <div className="App">
      <Concejos
      concejosApi={api}
      numberApi = {numberApi}
      textConcejo = {apiText}
      />
    </div>
  );
}

export default App;
