import { useState, useEffect } from "react";
import { deleteUser, getUsers } from "../Service/api";
import { Link } from "react-router-dom";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  makeStyles,
  Button,
} from "@material-ui/core";

const useStyle = makeStyles({
  table: {
    width: "80%",
    backgroundColor: "#232f3e",
    color: "white",
    margin: "auto",
    marginTop: "50px",
  },
});
const AllUser = () => {
  const [user, setUser] = useState([]);
  const classes = useStyle();

  useEffect(() => {
    getAllUsers();
  }, []);
  const getAllUsers = async () => {
    const response = await getUsers();
    setUser(response.data);
  };
  const deleteUserData = async (id) => {
    await deleteUser(id);
    getAllUsers();
  };

  return (
    <>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell style={{ color: "white" }}>id </TableCell>
            <TableCell style={{ color: "white" }}>name</TableCell>
            <TableCell style={{ color: "white" }}>user name</TableCell>
            <TableCell style={{ color: "white" }}>email</TableCell>
            <TableCell style={{ color: "white" }}>number</TableCell>
            <TableCell style={{ color: "white" }}></TableCell>
          </TableRow>
        </TableHead>
        <tbody>
          {user.map((val) => {
            return (
              <>
                <TableRow>
                  <TableCell>{val.id}</TableCell>
                  <TableCell>{val.name}</TableCell>
                  <TableCell>{val.username}</TableCell>
                  <TableCell>{val.email}</TableCell>
                  <TableCell>{val.phone}</TableCell>
                  <TableCell>
                    <Button component={Link} to={`/edit/${val.id}`}>
                      edit
                    </Button>
                    <Button onClick={() => deleteUserData(val.id)}>
                      delete
                    </Button>
                  </TableCell>
                </TableRow>
              </>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default AllUser;
