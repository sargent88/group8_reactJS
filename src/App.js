import Header from './children/header';
import Form from './children/form';
import Data from './children/data';
import './App.css';

let firstName = prompt('Please enter your first name')
let lastName = prompt('Please enter your last name')
function App() {
  // const firstName = 'Steen'
  // const lastName = 'Sargent'
  return (
    <>
      <Header firstName={firstName} lastName={lastName}></Header>
      <hr></hr>
      <Form></Form>
      <hr></hr>
      <Data></Data>
    </>
  );
}

export default App;
