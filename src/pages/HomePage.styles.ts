import { styled } from "@mui/system";

export const Container = styled("div")(({ theme }) =>({
  minHeight:"100vh",
  [theme.breakpoints.down(400)]: {
    label: {
      rotate: "90deg",
      right: "-6px!important",
    },
  },
  label: {
    right: "50px",
    top: "25px",
  },
  ".switch ": {
    position: "absolute",
    display: "inline-block",
    width: "50px",
    height: "30px",
  },
  "& .switch input": {
    opacity: 0,
    width: 0,
    height: 0,
  },
  "& .slider": {
    position: "absolute",
    cursor: "pointer",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: "#2196F3",
    WebkitTransition: ".4s",
    transition: ".4s",
  },
  "& .slider:before": {
    position: "absolute",
    content: '""',
    height: "22px",
    width: "22px",
    left: "1px",
    bottom: "4px",
    backgroundColor: "white",
    WebkitTransition: ".4s",
    transition: ".4s",
  },
  "& input:checked+ .slider": {
    backgroundColor: "#CCC",
  },
  "& input:focus+ .slider": {
    boxShadow: "0 0 1px #2196F3",
  },
  "& input:checked+ .slider:before": {
    WebkitTransform: "translateX(26px)",
    MsTransform: "translateX(26px)",
    transform: "translateX(26px)",
  },
  "& .slider.round": {
    borderRadius: "34px",
  },
  "& .slider.round:before": {
    borderRadius: "50%",
  },
}));

export const DivMain = styled("div")(({theme}) =>({
  overflowY: "auto",
  marginTop: "30px",
  display: "flex",
  justifyContent: "space-around",
  width: "100%",
  height:"100vh", 
  [theme.breakpoints.down(800)]: {
    justifyContent:"flex-start",
    flexDirection:"column",
    alignItems:"center",
    "::-webkit-scrollbar": {
      width: "10px",
    },
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

export const LoginProfile = styled("h2")({
  color: "#0D1117",
  fontWeight: 400,
  fontStyle: "italic",
  margin: 0,
  fontSize: "24px",
  marginTop: "6px",
});

export const BioProfile = styled("h6")({
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
  p:{
    fontWeight:400,
    fontSize:"20px",
    lineHeight:"28px",
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

export const WarningUser = styled("div")({
  width:"100%",
  display:"flex",
  justifyContent:"center",
});