import { BrowserRouter as Router ,Routes,Route} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Work from "./components/Work";
import Skills from "./components/Skills";
const App = () => {
     return(
      <div>
      
      <Router>
        <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="/education" element={<Education/>} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/work" element={<Work/>} />
          <Route path="/contact" element={<Contact/>} />
          </Route>
        </Routes>
      </Router>
      
      </div>
    );
};
// import { BrowserRouter as Router ,Routes,Route} from "react-router-dom";
// import Layout from "./components/Layout";
// import Home from "./components/Home";
// import Contact from "./components/Contact";
// import Education from "./components/Education";
// import Work from "./components/Work";
// import { useCallback } from "react";
// import Particles from "react-particles";
// //import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
// import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

// const App = () => {
//     const particlesInit = useCallback(async engine => {
//         console.log(engine);
//         // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
//         // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
//         // starting from v2 you can add only the features you need reducing the bundle size
//         //await loadFull(engine);
//         await loadSlim(engine);
//     }, []);

//     const particlesLoaded = useCallback(async container => {
//         await console.log(container);
//     }, []);

//     return (
//       <>
//        <Router>
//         <Routes>
//            <Route path="/" element={<Layout/>}>
//            <Route index element={<Home/>} />
//           <Route path="/contact" element={<Contact/>} />
//           <Route path="/education" element={<Education/>} />           <Route path="/work" element={<Work/>} />
//           </Route>
//          </Routes>
// /      </Router>
      
//         <Particles
//             id="tsparticles"
//             init={particlesInit}
//             loaded={particlesLoaded}
//             options={{
//                 background: {
//                     color: {
//                         value: "#EAEDED",
//                     },
//                 },
//                 fpsLimit: 120,
//                 interactivity: {
//                     events: {
//                         onClick: {
//                             enable: true,
//                             mode: "push",
//                         },
//                         onHover: {
//                             enable: true,
//                             mode: "repulse",
//                         },
//                         resize: true,
//                     },
//                     modes: {
//                         push: {
//                             quantity: 4,
//                         },
//                         repulse: {
//                             distance: 200,
//                             duration: 0.4,
//                         },
//                     },
//                 },
//                 particles: {
//                     color: {
//                         value: "#000000",
//                     },
//                     links: {
//                         color: "#000000",
//                         distance: 150,
//                         enable: true,
//                         opacity: 0.5,
//                         width: 1,
//                     },
//                     move: {
//                         direction: "none",
//                         enable: true,
//                         outModes: {
//                             default: "bounce",
//                         },
//                         random: false,
//                         speed: 6,
//                         straight: false,
//                     },
//                     number: {
//                         density: {
//                             enable: true,
//                             area: 800,
//                         },
//                         value: 80,
//                     },
//                     opacity: {
//                         value: 0.5,
//                     },
//                     shape: {
//                         type: "circle",
//                     },
//                     size: {
//                         value: { min: 1, max: 5 },
//                     },
//                 },
//                 detectRetina: true,
//             }}
//         />
//         </>
//     );
// };

export default App;
