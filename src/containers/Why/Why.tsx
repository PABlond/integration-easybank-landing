import React, { FC } from "react"

import { Icon, Section, Wrapper as WrapMe } from "../../components"
import { colors } from "../../utils"
import { Wrapper, Container } from "./Why.style"

export const Why: FC = () => {
  return (
    <Section style={{ background: `${colors.neutral.lightGrayishBlue}` }}>
      <Wrapper>
        <h1>Why choose Easybank?</h1>
        <p className="sub-title">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
        <Container>
          <div>
            <Icon.Online />
            <h3>Online Banking</h3>
            <p>
              Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world.
            </p>
          </div>
          <div>
            <Icon.Budgeting />
            <h3>Simple Budgeting</h3>
            <p>
              See exactly where your money goes each month. Receive
              notifications when you’re close to hitting your limits.
            </p>
          </div>
          <div>
            <Icon.OnBoarding />
            <h3>Fast Onboarding</h3>
            <p>
              We don’t do branches. Open your account in minutes online and
              start taking control of your finances right away.
            </p>
          </div>
          <div>
            <Icon.API />
            <h3>Open API</h3>
            <p>
              Manage your savings, investments, pension, and much more from one
              account. Tracking your money has never been easier.
            </p>
          </div>
        </Container>
      </Wrapper>
    </Section>
  )
}
