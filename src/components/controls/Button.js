import { Button, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: { minWidth: 0, margin: theme.spacing(0.5) },
}));

export default function Button(props) {
  const { children, onClick } = props;
  const classes = useStyles();
  return (
    <Button className={classes.root} onClick={onClick}>
      {" "}
      {children}{" "}
    </Button>
  );
}
