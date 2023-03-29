import React, { useState } from "react";
import { Container, DivInput } from "./Header.styles";

type FindUserProps = {
  findUser:(userName:string) => Promise<void>
}

export const Header : React.FC<FindUserProps> = ({findUser}) => {
  const [userName, setUserName] = useState("");
  return (
    <Container>
      <DivInput>
        <input placeholder="Digite o nome do usuário" onChange={(e)=>setUserName(e.target.value)}/>
        <button onClick={()=>findUser(userName)}>Pesquisar</button>
      </DivInput>
      <label className="switch">
        <input type="checkbox"/>
        <span className="slider round"></span>
      </label>
    </Container>
  );
};