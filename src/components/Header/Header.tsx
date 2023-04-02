import React, { useState } from "react";
import { Container, DivInput,DivHeader } from "./Header.styles";
import { onThemeChange } from "../../utils/ModeTheme";
import { Theme } from "../../utils/ModeTheme";

type FindUserProps = {
  findUser:(userName:string) => Promise<void>
}

export const Header : React.FC<FindUserProps> = ({findUser}) => {
  const [userName, setUserName] = useState("");
  const [themeButton, setThemeButton] = useState(false);

  const ontheme = ()=>{
    console.log(themeButton);
    if(themeButton===false){
      return setThemeButton(true);
    }else{
      return setThemeButton(false);
    };
  }

  return (
    <Theme>
      <Container >
        <DivHeader className={"lightThemeDiv"}>
          <DivInput >
          <input 
            placeholder="Digite o nome do usuário" 
            onChange={(e)=>setUserName(e.target.value)}
          />
          <button onClick={()=>findUser(userName)}>Pesquisar</button>
        </DivInput>
        </DivHeader>
      </Container>
    </Theme>
  );
};