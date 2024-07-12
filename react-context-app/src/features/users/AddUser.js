import { useState,useContext } from "react"
import { useNavigate } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';
import Button from "../../components/Button"
import TextField from "../../components/TextField"
import { UsersContext } from "../../store/users-context";

const AddUser = () => {
  
  const {dispatch }= useContext(UsersContext);
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: '',
    email: ''
  });

  const handleAddUser = () => {
    //setValues({ name: '', email: '' });
    // usersCtx.addUser({
    //   id: uuidv4(),
    //   name: values.name,
    //   email: values.email
    // });
    const userData = {
        id: uuidv4(),
        name: values.name,
        email: values.email
      }
    dispatch({ type: "ADD", payload: userData });
    setValues({ name: '', email: '' });
    navigate('/');
  }

  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField
        label="Name"
        //value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'React Next' }}
      />
      <br />
      <TextField
        label="Email"
        //value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        inputProps={{ type: 'email', placeholder: 'react@mail.com' }}
      />
      <Button onClick={handleAddUser}>Submit</Button>
    </div>
  )
}

export default AddUser