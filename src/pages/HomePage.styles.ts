import { styled } from "@mui/system";

export const Container = styled("div")({});

export const DivMain = styled("div")(({theme}) =>({
  marginTop: "30px",
  display: "flex",
  justifyContent: "space-around",
  width: "100%",
  [theme.breakpoints.down(800)]: {
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
  },
}));

export const ProfileInformations = styled("div")({
  maxWidth: "450px",
  top: "200px",
  display: "flex",
  flexDirection: "column",
});

export const ProfileImage = styled("img")({
  borderRadius: "50px",
  borderColor: "#5E30E6 !important",
  borderWidth: "2px !important",
  width: "100px",
});

export const UserNameProfile = styled("h1")({
  margin: 0,
  fontWeight: 500,
  fontSize: "32px",
  lineHeight: "37.5px",
  color: "#0D1117",
  marginTop: "30px",
});

export const LoginProfile = styled("p")({
  color: "#0D1117",
  fontWeight: 400,
  fontStyle: "italic",
  margin: 0,
  fontSize: "24px",
  marginTop: "6px",
});

export const BioProfile = styled("p")({
  fontSize: "24px",
  fontWeight: 400,
  lineHeight: "28px",
  marginTop: "6px",
});

export const DivFollows = styled("div")({
  width: "300px",
  height: "172px",
});

export const DivOptions = styled("div")({
  borderRadius: "20px",
  backgroundColor: "#C5C5C5",
  padding: "0px 10px 1px",
  display: "flex",
  flexDirection: "column",
  ul: {
    maxHeight: "380px",
    overflowY: "auto",
    "::-webkit-scrollbar": {
      width: "10px",
    },
    ":hover": {
      "::-webkit-scrollbar-thumb": {
        backgroundColor: "red",
        borderRadius: "20px",
      },
    },
    padding: 0,
    li: {
      listStyle: "none",
    },
  },
});

export const ButtonsOptions = styled("button")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  cursor: "pointer",
  backgroundColor: "#C5C5C5",
  borderStyle: "none",
  width: "280px",
  borderRadius: "20px",
  textAlign: "start",
  height: "34px",
  marginBotton: "",
  ":hover": {
    backgroundColor: "white",
  },
  span: {
    padding: "2px 2px",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5F30E6",
    minWidth: "25px",
    maxWidth: "auto",
    height: "25px",
    borderRadius: "25px",
  },
});
