import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { addUser } from "../Service/api";
import { useHistory } from "react-router";

const useStyle = makeStyles({
  formbox: {
    width: "40%",
    margin: "auto",
    marginTop: 40,
    boxShadow: "3px 5px 15px  gray",
    "& > *": {
      margin: 4,
    },
  },
});
const intialValue = {
  name: "",
  username: "",
  email: "",
  phone: "",
};
const AddData = () => {
  const classes = useStyle();
  const history = useHistory();
  const [userData, setUserData] = useState(intialValue);
  const { name, username, email, phone } = userData;

  const onValueChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  // Add user data in json server
  const addUserDetail = async () => {
    await addUser(userData);
    history.push("./all");
  };

  return (
    <>
      <FormGroup className={classes.formbox}>
        <Typography align="center" variant="h6">
          Add Data
        </Typography>
        <FormControl>
          <InputLabel>name</InputLabel>
          <Input type="text" name="name" onChange={(e) => onValueChange(e)} />
        </FormControl>
        <FormControl>
          <InputLabel>username</InputLabel>
          <Input
            type="text"
            name="username"
            onChange={(e) => onValueChange(e)}
          />
        </FormControl>
        <FormControl>
          <InputLabel>email</InputLabel>
          <Input
            type="text"
            name="email"
            onChange={(e) => onValueChange(e)}
          />{" "}
        </FormControl>
        <FormControl>
          <InputLabel>phone</InputLabel>
          <Input
            type="text"
            name="phone"
            onChange={(e) => onValueChange(e)}
          />{" "}
        </FormControl>
        <Button onClick={addUserDetail}>add User</Button>
      </FormGroup>
    </>
  );
};

export default AddData;
