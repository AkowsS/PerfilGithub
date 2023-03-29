
import {Container,ImageProfile} from "./Following.styles";

interface Repositoresprops{
  avatar:string;
  login:string;
  findUser:(userName:string) => Promise<void>
}

export const Following : React.FC <Repositoresprops>= ({
  avatar,
  login,
  findUser,
}) => {
  return(
    <Container onClick={()=>findUser(login)}>
        <div>
          <ImageProfile src={avatar} />
          <p>{login}</p>
        </div>
    </Container>
  );
};