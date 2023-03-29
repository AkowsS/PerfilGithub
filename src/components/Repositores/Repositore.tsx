
import Link from "@mui/material/Link";
import {Container, LanguageAndUpdate, NameRepo, DescriptionRepostyled} from "./Repositore.styles";

interface Repositoresprops{
  html_url:string;
  description:string;
  name:string;
  language:string;
  updated_at:string;
}

export const Repositore : React.FC <Repositoresprops>= ({
  description,
  html_url,
  name,
  language,
  updated_at,
}) => {
  return(
    <Container>
        <Link href={html_url} target="_blank"><NameRepo>{name}</NameRepo></Link>
          <DescriptionRepostyled>{description?description:"None"}</DescriptionRepostyled>
          <LanguageAndUpdate>
            <span>{language?language:"None"}</span>
            <span>{updated_at}</span>
          </LanguageAndUpdate>
      
    </Container>
  );
};