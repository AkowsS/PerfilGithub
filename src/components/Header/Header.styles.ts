import { styled } from "@mui/system";

export const Container = styled("div")(({theme}) =>({
  height:"80px",
  width:"100%",
  backgroundColor:"#C5C5C5",
  [theme.breakpoints.down(400)]: {
    label:{
      rotate:"90deg",
      right:"-6px!important",
    },
  },
  label:{
    right:"50px",
    top:"25px",
  },
  ".switch ":{
    position: "absolute",
    display: "inline-block",
    width: "50px",
    height: "30px",
  },
  "& .switch input":{
    opacity:0,
    width:0,
    height:0,
  },
  "& .slider":{
    position:"absolute",
    cursor:"pointer",
    top:0,
    right:0,
    left:0,
    bottom:0,
    backgroundColor:"#2196F3",
    WebkitTransition:".4s",
    transition:".4s",
  },
  "& .slider:before":{
    position:"absolute",
    content:'""',
    height:"22px",
    width:"22px",
    left:"1px",
    bottom:"4px",
    backgroundColor:"white",
    WebkitTransition:".4s",
    transition:".4s",
  },
  "& input:checked+ .slider":{
    backgroundColor:"#CCC",
  },
  "& input:focus+ .slider":{
    boxShadow:"0 0 1px #2196F3",
  },
  "& input:checked+ .slider:before":{
    WebkitTransform:"translateX(26px)",
    MsTransform:"translateX(26px)",
    transform:"translateX(26px)",
  },
  "& .slider.round":{
    borderRadius:"34px",
  },
  "& .slider.round:before":{
    borderRadius:"50%",
  },

}));

export const DivInput = styled("div")(({theme}) =>({
  paddingTop:"15px",
  display:"flex",
  justifyContent:"center",
  input:{
    width:"410px",
    height:"40px",
    borderColor:"#5F30E6",
    borderStyle:"solid",
    borderWidth:"4px",
    borderRadius:"20px",
    paddingLeft:"20px",
  },
  [theme.breakpoints.down(800)]: {
    justifyContent:"flex-start",
    input:{
      marginLeft:"5px",
      width:" 150px !important",
    },
  },
  button:{
    marginLeft:"10px",
    backgroundColor:"#5E30E6",
    borderColor:"#5F30E6",
    cursor:"pointer",
    color:"white",
    borderStyle:"solid",
    borderRadius:"20px",
    fontWeight:600,
    fontSize:"15px",
    ":hover":{
      backgroundColor:"#5E30A6",
    },
  },
}));