import React, { useState, useEffect } from "react";
import { editUser, getUsers } from "../Service/api";
import { useHistory, useParams } from "react-router-dom";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  makeStyles,
  Typography,
} from "@material-ui/core";

const initialValue = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

const useStyles = makeStyles({
  container: {
    width: "50%",
    margin: "5% 0 0 25%",
    "& > *": {
      marginTop: 20,
    },
  },
});

const EditUser = () => {
  const [user, setUser] = useState(initialValue);
  const { name, username, email, phone } = user;
  const { id } = useParams(); // gives us access to the params of that particular route
  const classes = useStyles();
  let history = useHistory();

  useEffect(() => {
    loadUserDetails();
  }, []);

  const loadUserDetails = async () => {
    const response = await getUsers(id); //particular obj
    setUser(response.data);
  };

  const editUserDetails = async () => {
    await editUser(id, user); //editUser= async (id, user) => await axios.put(`${userUrl}/${id}`, user);
    history.push("/all");
  };

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <FormGroup className={classes.container}>
      <Typography variant="h4">Edit User</Typography>
      <FormControl>
        <InputLabel htmlFor="my-input">Name</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="name"
          value={name}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Username</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="username"
          value={username}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Email</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="email"
          value={email}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Phone</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="phone"
          value={phone}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <Button
          variant="contained"
          color="primary"
          onClick={() => editUserDetails()}
        >
          edit User
        </Button>
      </FormControl>
    </FormGroup>
  );
};

export default EditUser;
