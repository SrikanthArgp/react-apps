import { useState,useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Button from "../../components/Button"
import TextField from "../../components/TextField"
import { UsersContext } from "../../store/users-context";

const EditUser = () => {
  const params = useParams();
  const navigate = useNavigate();
  const usersCtx = useContext(UsersContext);
  const users = usersCtx.usersState;
  const dispatch = usersCtx.dispatch
  const existingUser = users.filter(user => user.id === params.id);
  const { name, email } = existingUser[0];
  const [values, setValues] = useState({
    name,
    email
  });

  const handleEditUser = () => {
    //setValues({ name: '', email: '' });
    // usersCtx.updateUser(existingUser[0].id,{
    //   name: values.name,
    //   email: values.email
    // }); 
    const userData = {
      name: values.name,
      email: values.email
    }
    dispatch({ type: "UPDATE", payload: { id: params.id, data: userData } });
    setValues({ name: '', email: '' });
    navigate('/');
  }

  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField
        label="Name"
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'React Next' }}
      />
      <br />
      <TextField
        label="Email"
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        inputProps={{ type: 'email', placeholder: 'react@mail.com' }}
      />
      <Button onClick={handleEditUser}>Edit</Button>
    </div>
  )
}

export default EditUser