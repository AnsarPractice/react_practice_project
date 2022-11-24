import React, {useState} from 'react';
import AddUser from './components/UI/Users/AddUser';
import UsersList from './components/UI/Users/UsersList';

function App() {

  const [usersList, serUsersList] = useState([])

  const addUserHandler = (uName, uAge) =>{
    serUsersList((prevUsersList)=>{
      // console.log("yes")
      return [...prevUsersList, {name: uName, age: uAge}];
    })
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
