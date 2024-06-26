import React, { useState, useEffect } from "react"

export const Galaxy = (props) => {

    const [stars, setStars] = useState([])

    const [ATTRACT_SPEED, ] = useState(props.attract || 0.5);
    const [REPULSE_SPEED, ] = useState(props.repulse || 0.2);
    const [STAR_NUMBER, ] = useState(props.quantity || 400);
    const [STAR_COLOR, ] = useState(props.color || "white");

    const mousePosition = useMousePosition()
    var w = window.innerWidth;
    var h = window.innerHeight;

    const [time, setTime] = useState(Date.now());

    useEffect(() => {
      setInterval(() => setTime(Date.now()), 10);
    }, []);

    window.addEventListener('load', () => {
        var createStars = []
        for(let i = 0; i < STAR_NUMBER; i++){
            const size = Math.ceil(Math.random() * 3) + 2
            const x = Math.ceil(Math.random() * w);
            const y = Math.ceil(Math.random() * h);
            createStars.push({x: x, y: y, defaultX: x, defaultY: y, color: STAR_COLOR, size: `${size}px`, attracted: false})
        }
        setStars(createStars)
    })

    useEffect(() => {

      const moveStar = (star, mouse) => {
        if(!((Math.abs(mousePosition.x - star.x) < 5) && (Math.abs(mousePosition.y - star.y) < 5))){
          if(star.x > mouse.x){
            star.x -= ATTRACT_SPEED
          } else {
            star.x += ATTRACT_SPEED
          }
          if(star.y > mouse.y){
            star.y -= ATTRACT_SPEED
          } else{
            star.y += ATTRACT_SPEED
          }
        }
      }
  
      const repulseStars = (star) => {
        if(!(star.x === star.defaultX && star.y === star.defaultY)){
          if(star.x < star.defaultX){
            star.x += REPULSE_SPEED
          }
          else{
            star.x -= REPULSE_SPEED
          }
          if(star.y < star.defaultY){
            star.y += REPULSE_SPEED
          }
          else{
            star.y -= REPULSE_SPEED
          }
        }
        else {
          star.attracted = false
        }
      }

      if(stars.length === STAR_NUMBER){
        for(let i = 0; i < STAR_NUMBER; i++){
            if(((Math.abs(mousePosition.x - stars[i].x) < 100) && (Math.abs(mousePosition.y - stars[i].y) < 100))){
              moveStar(stars[i], mousePosition)
              stars[i].attracted = true
            }
            else{
              if(stars[i].attracted){
                repulseStars(stars[i])
              }
            }
        }
      }

    }, [time, ATTRACT_SPEED, REPULSE_SPEED, mousePosition, STAR_NUMBER, stars])


    return ( 
      <div style={{width: '100vw', height: '100vh', position: 'fixed', zIndex: '0'}}>
          <div style={{overflow: 'hidden', width: '100%', height: '100%', position: "relative"}}>
              {stars.length === STAR_NUMBER && stars.map((item) => (
                  <div style={{borderRadius: '50%', position: 'absolute', top: '0', left: '0', marginLeft: item.x + 'px', marginTop: item.y + "px", width: item.size, height: item.size, backgroundColor: item.color}}/>
              ))}
          </div>
      </div>
     );
}
 

const useMousePosition = () => {
  const [ mousePosition, setMousePosition] = useState({ x: null, y: null });

  useEffect(() => {
    window.addEventListener('mousemove', ev => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    });
  }, []);

  return mousePosition;
};
