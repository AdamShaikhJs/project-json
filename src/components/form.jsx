import React, { useState, useEffect } from "react";
import { addUser1, getUsers, deleteUser } from "../Service/api";
import TableForm from "./TableForm";
import {
  Grid,
  TextField,
  FormLabel,
  FormControlLabel,
  FormControl,
  FormGroup,
  Button,
  Slider,
  makeStyles,
  MenuItem,
  Select,
  Radio,
  RadioGroup,
} from "@material-ui/core";

const defaultValues = {
  name: "",
  age: 0,
  gender: "",
  os: "",
  favoriteNumber: 0,
};
const Form = () => {
  const [formValues, setFormValues] = useState(defaultValues);
  const [user1, setUser] = useState([]);

  //handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  // handle silder change
  const handleSliderChange = (name) => (e, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  //POst data
  const tablesubmit = async (e) => {
    e.preventDefault();
    await addUser1(formValues);
  };

  // Get data
  const getAllUsers = async () => {
    const response = await getUsers();
    setUser(response.data);
    getAllUsers();
  };

  //rerender
  useEffect(() => {
    getAllUsers();
  }, []);

  //delete data
  const deleteUserData = async (id) => {
    await deleteUser(id);
    getAllUsers();
  };
  return (
    <>
      <FormGroup>
        <Grid
          container
          alignItems="center"
          justify="center"
          direction="column"
          backgroundColor="primary"
        >
          <Grid item>
            <TextField
              id="name-input"
              name="name"
              label="Name"
              type="text"
              required
              value={formValues.name}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item>
            <TextField
              id="age-input"
              name="age"
              label="Age"
              type="number"
              value={formValues.age}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item>
            <FormControl>
              <FormLabel>Gender</FormLabel>
              <RadioGroup
                name="gender"
                value={formValues.gender}
                onChange={handleInputChange}
                row
              >
                <FormControlLabel
                  key="male"
                  value="male"
                  control={<Radio size="small" />}
                  label="Male"
                  required="required"
                />
                <FormControlLabel
                  key="female"
                  value="female"
                  control={<Radio size="small" />}
                  label="Female"
                />
                <FormControlLabel
                  key="other"
                  value="other"
                  control={<Radio size="small" />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl>
              <Select
                name="os"
                value={formValues.os}
                onChange={handleInputChange}
              >
                <MenuItem key="mac" value="mac">
                  Mac
                </MenuItem>
                <MenuItem key="windows" value="windows">
                  Windows
                </MenuItem>
                <MenuItem key="linux " value="linux">
                  Linux
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <div style={{ width: "400px" }}>
              Favorite Number
              <Slider
                value={formValues.favoriteNumber}
                onChange={handleSliderChange("favoriteNumber")}
                // defaultValue={1}                                 by default value is 0
                // step={1}
                min={1}
                max={10}
                //.......................This is  the optional..............................................
                // marks={[
                //   {
                //     value: 1,
                //     label: "1",
                //   },
                //   {
                //     value: 2,
                //     label: "2",
                //   },
                //   {
                //     value: 3,
                //     label: "3",
                //   },
                // ]}
                valueLabelDisplay="on" // or off button
              />
            </div>
          </Grid>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={tablesubmit}
          >
            Submit
          </Button>
        </Grid>
      </FormGroup>

      <TableForm deleteUserData={deleteUserData} user1={user1} />
    </>
  );
};
export default Form;
