import React from 'react'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
import Carousel from 'react-bootstrap/Carousel'
import car1 from './c1.png'
import car2 from './c2.png'
import car3 from './c3.png'
import Header from './Header';
import Pageone from './Pageone';
import Pagetwo from './Pagetwo';
import Pagefour from './Pagefour';
import Pagethree from './Pagethree';

const Testcar = () => {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());

    return (
      <div className="Testcar">
        <ScrollContainer className="Testcar">
          <div id="Pageone">
          <ScrollPage page={0}>
        <Animator className="Testcar" animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
        <Pageone></Pageone>
        </Animator>
      </ScrollPage>
          </div>

      <div id="Pagetwo">
      <ScrollPage page={1}>
        <Animator animation={ZoomInScrollOut}>
          <Pagetwo></Pagetwo>
        </Animator>
      </ScrollPage>
      </div>
      
      <div id="Pagethree">
      <ScrollPage page={2}>
        <Animator animation={FadeUp}>
          <Pagethree></Pagethree>
        </Animator>
      </ScrollPage>
      </div>
      
      <div id="Pagefour">
      <ScrollPage page={3}>
            <Animator animation={ZoomInScrollOut}>
              <Pagefour></Pagefour>
            </Animator>
            {/* <Animator animation={MoveIn(1000, 0)}>Nice to meet you 🙋🏻‍♀️</Animator>- I'm Seonghyeok -
            <Animator animation={MoveOut(1000, 0)}>Good bye ✋🏻</Animator>
            <Animator animation={MoveOut(-1000, 0)}>See you 💛</Animator> */}
      </ScrollPage>

      {/* <ScrollPage page={4}>
        <Animator animation={FadeIn}>
          <Pagefour></Pagefour>
        </Animator>
      </ScrollPage> */}
      </div>
    </ScrollContainer>
      </div>
      
    )
}

export default Testcar
