import React from "react";
import Container from "../container/container";
import Logo from "../../ui/logo/logo";
import SocialIcon from "../../ui/social-icon/social-icon";
import { StyledFooter, LeftColumn, StyledText, SocialLinks, RightColumn, GroupTitle, LinksList, Link } from "./styles";

export default function Footer({ socialLinks, footerLinks }) {
  return (
    <Container>
      <StyledFooter>
        <LeftColumn>
          <Logo size={54} />
          <StyledText color="white" size={14}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.</StyledText>
          <SocialLinks>
            {socialLinks.map((item) => (
              <li key={item.id}>
                <SocialIcon icon={item.icon} href={item.href} />
              </li>
            ))}
          </SocialLinks>
        </LeftColumn>

        <RightColumn>
          {footerLinks.map((group) => (
            <div className="footer__group" key={group.id}>
              <GroupTitle color="white" size={26} as="h3">{group.title}</GroupTitle>
              <LinksList>
                {group.links.map((link) => (
                  <li key={link.id}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </LinksList>
            </div>
          ))}
        </RightColumn>
      </StyledFooter>
    </Container>
  );
}