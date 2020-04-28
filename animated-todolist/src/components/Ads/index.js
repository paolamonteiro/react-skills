import React from "react"
import { LoremIpsum } from "react-lorem-ipsum"
import { AdsBox } from "../../styles/StyledAds"
import { Fade } from "react-reveal"

const Ads = () => (
  <AdsBox>
    <Fade bottom>
      <h2>Adicional texts to scroll</h2>
    </Fade>
    <Fade left>
      <LoremIpsum />
    </Fade>
    <Fade right>
      <LoremIpsum />
    </Fade>
    <Fade left>
      <LoremIpsum />
    </Fade>
    <Fade right>
      <LoremIpsum />
    </Fade>
    <Fade left>
      <LoremIpsum />
    </Fade>
  </AdsBox>
)

export default Ads