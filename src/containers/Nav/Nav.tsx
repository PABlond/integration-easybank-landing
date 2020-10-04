import React, { useState, useEffect } from "react"

import styled from "styled-components"

import { Icon } from "../../components"
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
    padding: 0 8.7804%;

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

    .cta {
      overflow: hidden;
      white-space: nowrap;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.875rem 2rem;
      border-radius: 2rem;
      color: ${colors.neutral.white};
      text-decoration: none;
      background: linear-gradient(
        to right,
        ${colors.primary.limeGreen},
        ${colors.primary.brightCyan}
      );
      border: 1px solid ${colors.primary.brightCyan};
      transition: 0.4s;

      &:hover {
        opacity: 0.6;
      }

      @media (max-width: 768px) {
        display: none;
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
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>

        <a className="cta" href="#">
          Request Invite
        </a>

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
