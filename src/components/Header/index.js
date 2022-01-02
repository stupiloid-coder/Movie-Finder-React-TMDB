import React from "react";
import { Link } from "react-router-dom";

import RMDBLogo from "../../images/reactLogo.svg";
import TMDBLogo from "../../images/tmdbLogo.svg";

import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.styles";

const Header = () => (
  <Wrapper>
    <Content>
      <Link to="/">
        <LogoImg src={RMDBLogo} alt="rmdb-logo" />
      </Link>
      <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
    </Content>
  </Wrapper>
);

export default Header;