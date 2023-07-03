import "./App.css";
import { animated, useSpring } from "@react-spring/web";

function App() {
  // const springs = useSpring({
  //   from: { x: -100 },
  //   to: { x: 0 },
  // });

  // const [springs, api] = useSpring(() => ({
  //   from: {x: 0}
  // }))

  // const handleClick = () => {
  //   api.start({
  //     from: {
  //       x: 100,
  //     },
  //     to: {
  //       x: 0,
  //     },
  //   });
  // };

  const [props, api] = useSpring(() => ({
    from: { opacity: 0 },
    to: { opacity: 1 },
  })
  );

  return (
    <>
      <div></div>
      <h1>React Spring simple animation</h1>
      <div className="card">
        <animated.div
          style={{
            width: 80,
            height: 80,
            background: "#ff6d6d",
            borderRadius: 8,
            
          }}
        ></animated.div>
        <animated.div
          // onClick={handleClick}
          style={{
            width: 80,
            height: 80,
            background: "#ff6d6d",
            borderRadius: 8,
            ...props
          }}
        ></animated.div>
      </div>
    </>
  );
}

export default App;
