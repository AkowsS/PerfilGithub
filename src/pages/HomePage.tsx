import React from "react";
import { Header } from "../components/Header";
import { useState } from "react";
import { Userprops } from "../utils/user";
import { ProfileImage,UserNameProfile,ButtonsOptions,WarningUser,LoginProfile,DivOptions,DivMain,BioProfile,DivFollows,Container,ProfileInformations} from "./HomePage.styles"
import { Followers } from "../components/Followers";
import axios from "axios";
import { Repositore } from "../components/Repositores";
import { Following } from "../components/Following";
import { Link } from "@mui/material";
import { Theme } from "../utils/ModeTheme";


export const HomePage : React.FC = () => {
  const [user, setUser] = useState<Userprops | null>(null);
  const [option, setOption] = useState(0);
  const [followers,setFollowers] = useState<any>([]);
  const [repositore,setRepositore] = useState<any>([]);
  const [following,setFollowing] = useState<any>([]);
  const [stars,setStars] = useState<any>([]);
  const [verifyUser, setVerifyUser] = useState(false);
  const [themeButton, setThemeButton] = useState(false);
  const [selectColor, setSelectColor] = useState("#E7E7E7");

  const ontheme = ()=>{
    console.log(themeButton);
    if(themeButton===false){
      setSelectColor("#1E2228");
      return setThemeButton(true);
    }else{
      setSelectColor("#E7E7E7");
      return setThemeButton(false);
    };
  }
  
  const onSelectOption = (valueOption:number) => {
    if(valueOption == 1){
      return setOption(1);
    }
    else if(valueOption == 2){
      return setOption(2);
    }
    else if(valueOption == 3){
      return setOption(3);

    }else if(valueOption == 4){
      return setOption(4);

    }else{
      return setOption(0);
    }
  };
  const findUser= async(userName:string)=>{
    loadUser(userName);
    loadFollowers(userName);
    loadRepositores(userName);
    loadFollowings(userName);
    loadStars(userName);
    onSelectOption(0);
  };
  const loadUser = async(userName:string)=>{
    const res = await fetch(`https://api.github.com/users/${userName}`)
    const data = await res.json();
    const {avatar_url, login, bio, html_url, public_repos, name, location, followers, following } = data;
    const userData: Userprops = {
      avatar_url,
      name,
      html_url,
      login,
      location,
      followers,
      following,
      public_repos,
      bio,
    };
    setUser(userData);
    setVerifyUser(true);
  };
  const loadFollowers = async(userName:string)=>{
    axios.get(`https://api.github.com/users/${userName}/followers`).then((response:any)=>{
      const dataFollowers=response.data
      setFollowers(dataFollowers);
    });
  };
  const loadFollowings = async(userName:string)=>{
    axios.get(`https://api.github.com/users/${userName}/following`).then((response:any)=>{
      const dataRepos=response.data
      setFollowing(dataRepos);
    });
  };
  const loadRepositores = async(userName:string)=>{
    axios.get(`https://api.github.com/users/${userName}/repos`).then((response:any)=>{
      const dataRepos=response.data
      setRepositore(dataRepos)
    });
  };
  const loadStars = async(userName:string)=>{
    axios.get(`https://api.github.com/users/${userName}/starred`).then((response:any)=>{
      const dataRepos=response.data
      setStars(dataRepos);
    });
  };

  return (
    <Theme>
      <Container className={themeButton?"darkThemeInfo darkThemeDiv":"lightThemeInfo"}>
        <Theme className={themeButton?"darkThemeDiv darkThemeElement":"lightThemeDiv"}>
          <Header findUser={findUser}/>
        </Theme>
        <label className="switch" >
          <input type="checkbox" onClick={()=>ontheme()}/>
          <span className="slider round"></span>
        </label>
        <WarningUser>
          <p style={(user?.login || verifyUser===false)?{display:"none"}:{display:"block",color:"red"}}>USUÁRIO NÃO ENCONTRADO</p>
        </WarningUser>
        <DivMain onLoad={()=>onSelectOption(0)}>
          <div>
            <ProfileInformations>
              <ProfileImage src={user?.avatar_url} style={user?.avatar_url?{border:"solid"}:{border:"none"}}/>
              <Link href={user?.html_url} target="_blank" style={{textDecoration:"none"}}><UserNameProfile>{user?.name}</UserNameProfile></Link>
              <LoginProfile>{user?.login}</LoginProfile>
              <BioProfile>{user?.bio}</BioProfile>
            </ProfileInformations>
          </div>
          <DivFollows className={themeButton?"darkThemeElement":{}}>
            <DivOptions style={user?.name?{display:"block",padding:"15px 10px"}:{display:"none"}} >
              <ButtonsOptions onClick={()=>onSelectOption(1)} style={option===1?{backgroundColor:`${selectColor}`}:{}}><p>Repositórios</p><span>{user?.public_repos}</span></ButtonsOptions>
              <ButtonsOptions onClick={()=>onSelectOption(2)} style={option===2?{backgroundColor:`${selectColor}`}:{}}><p>Seguidores</p><span>{user?.followers}</span></ButtonsOptions>
              <ButtonsOptions onClick={()=>onSelectOption(3)} style={option===3?{backgroundColor:`${selectColor}`}:{}}><p>Seguindo</p><span>{user?.following}</span></ButtonsOptions>
              <ButtonsOptions onClick={()=>onSelectOption(4)} style={option===4?{backgroundColor:`${selectColor}`}:{}}><p>Estrelas</p><span>{stars.length}</span></ButtonsOptions>
            </DivOptions>
            <DivOptions style={option!==0?{display:"block"}:{display:"none"}}>
              <ul style={option===1?{display:"block"}:{display:"none"}}>
                {
                  repositore.map((projects: any)=>
                    <li>
                      <Repositore
                        html_url={projects.html_url}
                        description={projects.description}
                        name={projects.name}
                        language={projects.language}
                        updated_at={projects.updated_at}
                      />
                    </li>
                )}
              </ul>
              <ul style={option===2?{display:"block"}:{display:"none"}}>
                {
                  followers.map((projects: any)=>
                    <li>
                      <Followers
                        findUser={findUser}
                        avatar={projects.avatar_url}
                        login={projects.login}
                      />
                    </li>
                )}
              </ul>
              <ul style={option===3?{display:"block"}:{display:"none"}}>
                {
                  following.map((projects: any)=>
                    <li>
                      <Following
                        findUser={findUser}
                        avatar={projects.avatar_url}
                        login={projects.login}
                      />
                    </li>
                )}
              </ul>
              <ul style={(option===4 && stars.length!==0)?{display:"block"}:{display:"none"}}>
                {
                  stars.map((projects: any)=>
                    <li>
                      <Repositore
                        html_url={projects.html_url}
                        description={projects.description}
                        name={projects.name}
                        language={projects.language}
                        updated_at={projects.updated_at}
                      />
                    </li>
                )}
              </ul>
            </DivOptions>
          </DivFollows>
        </DivMain>
      </Container>
    </Theme>
  );
};