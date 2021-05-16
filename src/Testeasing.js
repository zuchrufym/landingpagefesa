import React from 'react'
import anime from 'react-animejs'
// const {Anime, stagger} = ReactAnime

const Testeasing = () => {

    const tests = anime({
        targets:"#tet",
        translateX:100,
        easing:'easeOutElastic(2, 1)', 
        loop:"true"
    })
    return (
        <div className="haha" id="tet" style={tests}>
            {/* <Anime
  initial={[
    {
      targets: "#Box",
      translateX: 500,
      translateY:250,
      easing: "linear",
      loop:true
      
    }
  ]}
>
  <div id="Box" style={{ height: 50, width: 50, background: "#d3d" }} />
</Anime> */}
<div id="Box" style={{ height: 50, width: 50, background: "#d3d" }} />
        </div>
    )
}


export default Testeasing
