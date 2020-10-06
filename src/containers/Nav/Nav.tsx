import React, { useState, useEffect } from "react"

import styled from "styled-components"

import { ButtonLink, Icon } from "../../components"
import { colors } from "../../utils"

const ContainerSection = styled(Section)`
  background: ${colors.neutral.veryLightGray};
  position: fixed;
  width: 100%;
  z-index: 123;

  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 11.38888%;

    .responsive-hamburger {
      display: none;

      @media (max-width: 768px) {
        display: block;
      }
    }

    .links-container {
      ul {
        margin: 0;
        display: flex;
        justify-content: space-between;
        list-style: none;
        padding: 0;

        li {
          padding: 2rem 1rem;
          border-bottom: 4px solid transparent;
          list-style-position: outside;

          a {
            color: ${colors.neutral.grayishBlue};
            transition: 0.4s;
            text-decoration: none;
          }
          &:hover {
            border-image-source: linear-gradient(
              to right,
              ${colors.primary.limeGreen},
              ${colors.primary.brightCyan}
            );
            border-image-slice: 5;
          }
        }
      }

      @media (max-width: 768px) {
        box-shadow: 0px 10px 20rem 0px rgba(0, 0, 0, 0.75);
        display: ${({ open }: { open: boolean }) => (open ? "block" : "none")};
        padding: 0;
        margin: 0 1rem;
        border-radius: 0.4rem;
        position: absolute;
        top: 5.5rem;
        left: 0;
        right: 0;
        background: ${colors.neutral.white};

        ul {
          display: block;
          padding: 1rem 0;

          li {
            text-align: center;
            padding: 1rem 0;

            a {
              color: ${colors.primary.darkBlue};
            }

            &:hover {
              border: 0;
            }
          }
        }
      }
    }
  }
  @media (max-width: 768px) {
    position: inherit;
    padding: 1.3125rem 0;
  }
`

import { Section, Wrapper } from "../../components"

export const Nav = () => {
  const [open, setOpen] = useState<boolean>(false)

  const toggleOpen = (): void => {
    setOpen(!open)
  }

  useEffect(() => {
    if (open) {
      window?.addEventListener("click", function onClick() {
        window.removeEventListener("click", onClick, false)
        toggleOpen()
      })
    }
  }, [open])

  return (
    <ContainerSection open={open}>
      <Wrapper>
        <Icon.Logo />

        <div className="links-container">
          <ul>
            {["Home", "About", "Contact", "Blog", "Careers"].map(
              (menuItem: string, key: number) => (
                <li key={key}>
                  <a href="#">{menuItem}</a>
                </li>
              )
            )}
          </ul>
        </div>

        <ButtonLink href="#">Request Invite</ButtonLink>

        {open ? (
          <Icon.Close className="responsive-hamburger" onClick={toggleOpen} />
        ) : (
          <Icon.Hamburger
            className="responsive-hamburger"
            onClick={toggleOpen}
          />
        )}
      </Wrapper>
    </ContainerSection>
  )
}
