import { Container,Swapper,Main,SliderWrapper } from "./styles";
import imagecompare from "../../assets/imagecompare.jpg";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
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
              <ReactCompareSliderImage src={imagecompare} alt="Image one" />
            </SliderWrapper>
          }
          itemTwo={
            <SliderWrapper>
              <ReactCompareSliderImage
                src={imagecompare}
                alt="Image two"
                style={{ filter: "blur(7.5px)" }}
              />
            </SliderWrapper>
          }
        />
      </Main>
      <footer>
        <span>by PabloKaliel</span>
        <a href="https://github.com/pablokaliel/"><GithubLogo size={18} color="#ffffff" /></a>
      </footer>
    </Swapper>
  </Container>
  );
}

export default Home;
