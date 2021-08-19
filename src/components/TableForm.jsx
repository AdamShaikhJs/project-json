import React from "react";
import {
  TableRow,
  TableCell,
  Table,
  TableHead,
  Button,
  TableBody,
  makeStyles,
} from "@material-ui/core";

const useStyle = makeStyles({
  table1: {
    width: "40%",
    margin: "auto",
    marginTop: "3%",
    textTransform: "capitalize",
    fontWeight: "bolder",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .6)",
  },

  "@global": {
    // You should target [class*="MuiButton-root"] instead if you nest themes.
    ".MuiTableCell-root": {
      color: "white",
    },
  },
});
const TableForm = (props) => {
  const classes = useStyle();
  return (
    <>
      <Table className={classes.table1}>
        <TableHead>
          <TableRow>
            <TableCell>id </TableCell>
            <TableCell>name</TableCell>
            <TableCell>age</TableCell>
            <TableCell>gender</TableCell>
            <TableCell>os</TableCell>
            <TableCell>fav number</TableCell>

            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.user1.map((elem) => {
            return (
              <>
                <TableRow>
                  <TableCell>{elem.id}</TableCell>
                  <TableCell>{elem.name}</TableCell>
                  <TableCell>{elem.age}</TableCell>
                  <TableCell>{elem.gender}</TableCell>
                  <TableCell>{elem.os}</TableCell>
                  <TableCell>{elem.favoriteNumber}</TableCell>
                  <TableCell>
                    <Button onClick={() => props.deleteUserData(elem.id)}>
                      delete
                    </Button>
                  </TableCell>
                </TableRow>
              </>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};

export default TableForm;
