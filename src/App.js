import { useState } from "react"
import Header from './children/Header';
import Form from './children/Form';
import Data from './children/Data';
import './App.css';

const firstName = prompt('Please enter your first name')
const lastName = prompt('Please enter your last name')
function App() {
  const [dogData, setDogData] = useState([])

  function dataCallback (data) {
    setDogData(dogData => [...dogData, data])
  }

  return (
    <>
      <Header firstName={firstName} lastName={lastName}></Header>
      <hr></hr>
      <Form onChildClick={dataCallback}></Form>
      <hr></hr>
      <Data dogData={dogData}></Data>
    </>
  );
}

export default App;
