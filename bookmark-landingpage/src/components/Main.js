import React from 'react';
import styled from 'styled-components/macro';
import heroimg from '../images/illustration-hero.svg';

const MainSection = styled.section `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    place-items: center;
    position: relative;
    top: 15rem;
    padding-left: 7rem;
`;
const Maintxt = styled.div`
  margin-top: -25rem;
`;
const MainImg = styled.div``;
const HeroIllustration = styled.div`
 width: 35rem;
 height: 20rem;
 background-color: hsl(231, 69%, 60%);
 position: relative;
 top: -20rem;
 left: 6.589rem;
 border-top-left-radius: 5rem;
 border-bottom-left-radius: 10rem;
 z-index: -99;
`;
const Main = () => {
    return (
        <MainSection>
           <Maintxt>
                <h1>A Simple Bookmark Manager</h1>
                <p>A clean and simple interface to organize your favourite
                websites. Open a new browser tab and see your sites load
                instantly. Try it for free.</p>
                <button className="chrom-btn">Get it on chrome</button>
                <button className="fire-btn">Get it on Firefox</button>
           </Maintxt>
           <MainImg>
                <img src={heroimg} alt="hero img"></img>
                <HeroIllustration></HeroIllustration>
           </MainImg>
        </MainSection>
    )
}

export default Main
