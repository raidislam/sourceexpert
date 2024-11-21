import React from "react"
import Container from "./container"
import Button from "./button"

export default function Hero() {
  return (
    <section className="h-[112rem] sm:h-[80rem] md:h-[100rem] lg:h-[112rem] bg-[#080A32]">
      <Container>
        <div className="">
          <p className="">NUMBER ONE CREATIVE DIGITAL AGENCY </p>
          <h1>
            <span>Smart Choices</span>
            <span>For Your Business Growth</span>
          </h1>
          <p>
            We&apos;re a team of experienced designers, developers, and
            marketers, passionate about delivering exceptional digital
            solutions.
          </p>
          <Button />
        </div>
      </Container>
    </section>
  )
}
