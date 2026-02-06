import { jsx } from 'react/jsx-runtime';
import { useState, useEffect, useMemo } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

function ParticlesBackground() {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  const particlesLoaded = async (container) => {
    console.log("Particles loaded", container);
  };
  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent"
        }
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push"
          },
          onHover: {
            enable: true,
            mode: "repulse"
          }
        },
        modes: {
          push: {
            quantity: 4
          },
          repulse: {
            distance: 150,
            duration: 0.4
          }
        }
      },
      particles: {
        color: {
          value: "#10b981"
          // emerald-500
        },
        links: {
          color: "#10b981",
          distance: 150,
          enable: true,
          opacity: 0.2,
          width: 1
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce"
          },
          random: false,
          speed: 1,
          straight: false
        },
        number: {
          density: {
            enable: true
          },
          value: 80
        },
        opacity: {
          value: 0.3
        },
        shape: {
          type: "circle"
        },
        size: {
          value: { min: 1, max: 3 }
        }
      },
      detectRetina: true
    }),
    []
  );
  if (init) {
    return /* @__PURE__ */ jsx(
      Particles,
      {
        id: "tsparticles",
        particlesLoaded,
        options,
        className: "absolute inset-0 z-0"
      }
    );
  }
  return null;
}

export { ParticlesBackground as P };
