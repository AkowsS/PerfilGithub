import { styled } from "@mui/system";

export const Container = styled("div")(({ theme }) => ({
  width: "100%",
  //backgroundColor: "#C5C5C5",
}));

export const DivHeader = styled("div")({
  minHeight: "80px",
});

export const DivInput = styled("div")(({ theme }) => ({
  paddingTop: "15px",
  display: "flex",
  justifyContent: "center",
  input: {
    width: "410px",
    height: "40px",
    borderColor: "#5F30E6",
    borderStyle: "solid",
    borderWidth: "4px",
    borderRadius: "20px",
    paddingLeft: "20px",
  },
  [theme.breakpoints.down(800)]:{
    justifyContent: "flex-start",
    input: {
      marginLeft: "5px",
      width: " 150px !important",
    },
  },
  button: {
    marginLeft: "10px",
    backgroundColor: "#5E30E6!important",
    borderColor: "#5F30E6",
    cursor: "pointer",
    color: "white",
    borderStyle: "solid",
    borderRadius: "20px",
    fontWeight: 600,
    fontSize: "15px",
    ":hover": {
      backgroundColor: "#5E30A6",
    },
  },
}));
