import React, { useEffect } from 'react';
import { tsParticles } from 'tsparticles';

const Particles = () => {
  useEffect(() => {
    tsParticles.load('tsparticles', {
      particles: {
        number: {
          value: 150,  // Increase the number of particles
          density: {
            enable: true,
            value_area: 800,  // Spread particles around
          },
        },
        color: {
            value: ['#ffd700' , '#ffff'],
        },
        shape: {
          type: 'circle',  // Use circle particles
        },
        opacity: {
          value: 0.7,  // Make them semi-transparent
          random: true,  // Random opacity for each particle
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.1,  // Minimum opacity when particles are animated
          },
        },
        size: {
          value: 3,  // Particle size
          random: true,  // Random size for each particle
          anim: {
            enable: true,
            speed: 4,  // Speed of size change
            size_min: 0.3,  // Minimum size when animating
          },
        },
        // links: {
        //   enable: true,  // Enable links between particles
        //   distance: 150,  // Max distance for link visibility
        //   color: '#ffffff',  // Link color
        //   opacity: 0.5,  // Link opacity
        //   width: 1,  // Link width
        // },
        move: {
          enable: true,  // Enable movement
          speed: 2,  // Movement speed
          direction: 'none',  // Free movement (no fixed direction)
          random: true,  // Random movement direction
          straight: false,
          outModes: {
            default: 'out',  // Let particles flow out of the screen
          },
        },
        glow: {
          enable: true,  // Enable glowing
           color:' #ffd700' ,  //Glow colorf
          intensity: 1.5,  // Intensity of the glow
        },
      },
      interactivity: {
        events: {
          onhover: {
            enable: true,
            mode: 'repulse',  // Particles will move away when hovered
          },
          onclick: {
            enable: true,
            mode: 'push',  // More particles are added when clicked
          },
        },
      },
      retina_detect: true,  // Enable retina support for high resolution displays
    });
  }, []);

  return (
    <div
      id="tsparticles"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,  // Place it in the background
      }}
    />
  );
};

export default Particles;
