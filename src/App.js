import React, {useState} from 'react';
import Header from './components/header';
import Cars from './components/cars';
import List from './components/list';

const initialFormData = Object.freeze({
  title: "",
  description: "",
  done: false,
  id : Math.ceil(Math.random() * 10000)
});

function App() {

  const [formData, updateFormData] = useState(initialFormData);

  const [cars, addCars] = useState([]);

  return (
    <div className="App">
      <Header/>
      <Cars cars={cars} addCars={addCars} formData={formData} updateFormData={updateFormData}/>
      <List cars={cars} setCars={addCars}/>
    </div>
  );
}

export default App;
