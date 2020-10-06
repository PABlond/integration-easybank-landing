import React, { FC } from "react"

import { ButtonLink, Icon, Wrapper } from "../../components"
import { MenuContainer, Section, SocialContainer } from "./Footer.style"

const Socials: FC = () => {
  return (
    <SocialContainer>
      <div className="easybank-logo">
        <Icon.Logo />
      </div>
      <div className="easybank-socials">
        <a href="#">
          <Icon.Socials.Facebook />
        </a>
        <a href="#">
          <Icon.Socials.Youtube />
        </a>
        <a href="#">
          <Icon.Socials.Twitter />
        </a>
        <a href="#">
          <Icon.Socials.Pinterest />
        </a>
        <a href="#">
          <Icon.Socials.Instagram />
        </a>
      </div>
    </SocialContainer>
  )
}

const Menu: FC = () => {
  return (
    <MenuContainer>
      <div>
        <a href="#">About Us</a>
        <a href="#">Contact</a>
        <a href="#">Blog</a>
      </div>
      <div>
        <a href="#">Careers</a>
        <a href="#">Support</a>
        <a href="#">Privacy Policy</a>
      </div>
    </MenuContainer>
  )
}

export const Footer: FC = () => {
  return (
    <Section>
      <Wrapper>
        <div className="footer-container">
          <Socials />
          <Menu />
        </div>
        <div className="cta-container">
          <ButtonLink href="#">Request Invite</ButtonLink>
          <span>© Easybank. All Rights Reserved</span>
        </div>
      </Wrapper>
    </Section>
  )
}
