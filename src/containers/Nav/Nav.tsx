import React, { useState, useEffect } from "react"

import { ButtonLink, Icon, Wrapper } from "../../components"
import { ContainerSection } from "./Nav.style"

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
