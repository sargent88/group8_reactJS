import Header from './children/header';
import Form from './children/form';
import Data from './children/data';
import './App.css';

const firstName = prompt('Please enter your first name')
const lastName = prompt('Please enter your last name')
function App() {
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
