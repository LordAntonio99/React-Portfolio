import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+34677062988">+34677062988</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:tonicintora@gmail.com">tonicintora@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Lorem ipsum?</Slogan>
          <SocialContainer>
            <SocialIcons href="http://github.com">
              <AiFillGithub size="3rem"/>
            </SocialIcons>
            <SocialIcons href="http://youtube.com">
              <AiFillYoutube size="3rem"/>
            </SocialIcons>
            <SocialIcons href="http://linkedin.com">
              <AiFillLinkedin size="3rem"/>
            </SocialIcons>
          </SocialContainer>
        </CompanyContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
