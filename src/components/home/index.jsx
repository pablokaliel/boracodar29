import { Container, Swapper, Main, SliderWrapper } from "./styles";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";

import imagecompare from "../../assets/imagecompare.jpg";
import { GithubLogo } from "@phosphor-icons/react";

function Home() {
  return (
    <Container>
      <Swapper>
        <h1>After & Before</h1>
        <Main>
          <ReactCompareSlider
            itemOne={
              <SliderWrapper>
                <ReactCompareSliderImage
                  src={imagecompare}
                  alt="Image one"
                  style={{ filter: "blur(7.5px)" }}
                />
              </SliderWrapper>
            }
            itemTwo={
              <SliderWrapper>
                <ReactCompareSliderImage src={imagecompare} alt="Image two" />
              </SliderWrapper>
            }
          />
        </Main>
        <footer>
          <span>by PabloKaliel</span>
          <a href="https://github.com/pablokaliel/">
            <GithubLogo size={18} color="#ffffff" />
          </a>
        </footer>
      </Swapper>
    </Container>
  );
}

export default Home;
