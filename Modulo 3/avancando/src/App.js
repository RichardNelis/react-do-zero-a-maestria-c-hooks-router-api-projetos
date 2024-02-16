import { useState } from 'react';
import './App.css';

import City from "./assets/img1.png";
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';

function App() {
  //const name = "Richard"
  const [userName] = useState("Bia")

  const cars = [
    { id: 1, brand: "Ferrari", color: "Vermelho", newCar: true, km: 0 },
    { id: 2, brand: "Kia", color: "Branco", newCar: false, km: 8979870 },
    { id: 3, brand: "Renault", color: "Azul", newCar: false, km: 5676 },
  ]

  function showMessage() {
    console.log("Evento do compoenente pai!")
  }

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/*Imagem em Public*/}
      <div>
        <img src="/img1.png" alt="Paisagem" />
      </div>
      {/*Imagem em Assets*/}
      <div>
        <img src={City} alt="Paisagem" />
      </div>
      <div>
        <ManageData />
        <ListRender />
        <ConditionalRender />
        <ShowUserName name={userName} />
        <CarDetails brand="VW" km={100000} color="Azul" newCar={false} />
        <CarDetails brand="Ford" km={0} color="Vermelho" newCar={true} />
        <CarDetails brand="Fiat" km={23465} color="Preto" newCar={false} />
        {cars.map((car) => (
          <CarDetails
            key={car.id}
            brand={car.brand}
            color={car.color}
            km={car.km}
            newCar={car.newCar} />
        ))}
        <Fragment propFragment="tese" />
        <Container myValue="meu valor">
          <p>Este é o conteúdo</p>
        </Container>
        <ExecuteFunction myFunction={showMessage} />
        <Message msg={message}/>
        <ChangeMessageState handleMessage={handleMessage} />
      </div>
    </div>
  );
}

export default App;
