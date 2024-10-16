"use client";
import { useEffect } from 'react';
import Link from 'next/link';

import Image from 'next/image';

const Navbar = () => {
  useEffect(() => {
    const sphereContainer = document.querySelector('.headerEffect');
    if (!sphereContainer) return;
    const sphereContainerWidth = (sphereContainer as HTMLElement).offsetWidth;
    const minSphereSize = 15;
    const maxSphereSize = 70;
    const numberOfSpheres = Math.ceil(sphereContainerWidth / minSphereSize); // Use minSphereSize to ensure enough spheres are created

    const sphereTemplate = document.querySelector('.sphere');
    if (sphereTemplate) {
      animateSphere(sphereTemplate as HTMLElement, minSphereSize, maxSphereSize); // Animate the first sphere

      for (let i = 1; i < numberOfSpheres; i++) { // Start from 1 because the first sphere is already in the HTML
        const sphere = sphereTemplate.cloneNode(true);
        animateSphere(sphere as HTMLElement, minSphereSize, maxSphereSize);
        sphereContainer.appendChild(sphere);
      }
    }

    function animateSphere(sphere: HTMLElement, minSize: number, maxSize: number) {
      const randomSize = Math.random() * (maxSize - minSize) + minSize; // Generate a random number between minSize and maxSize
      const randomDelay = Math.random() * 2; // Generate a random number between 0 and 2
      const randomDuration = Math.random() * (5 - 2) + 2; // Generate a random number between 2 and 5
      sphere.style.width = randomSize + 'px'; // Apply the random size to the width of the sphere
      sphere.style.height = randomSize + 'px'; // Apply the random size to the height of the sphere
      sphere.style.position = 'relative';
      sphere.style.animation = `moveUpDown ${randomDuration}s ease-in-out ${randomDelay}s infinite alternate`; // Add CSS animation with random delay and duration

      // Change the size of the sphere at the end of each animation iteration
      sphere.addEventListener('animationiteration', function() {
        const newSize = Math.random() * (maxSize - minSize) + minSize; // Generate a new random size
        sphere.style.width = newSize + 'px'; // Apply the new size to the width of the sphere
        sphere.style.height = newSize + 'px'; // Apply the new size to the height of the sphere

        // Occasionally make the sphere fall to the bottom of the page
        if (Math.random() < 0.01) { // 1% chance
          sphere.style.borderRadius = "50% 50% 50% 50%/60% 60% 40% 40%";
          if (sphere.style.borderRadius === "50% 50% 50% 50%/60% 60% 40% 40%") {
            sphere.style.animation = `fallToBottom 2s ease-in forwards`;
          }
        }
      });

      // Put the sphere back to its original position after it falls
      sphere.addEventListener('animationend', function() {
        sphere.style.animation = `moveUpDown ${randomDuration}s ease-in-out ${randomDelay}s infinite alternate`;
      });
    }

    // CSS for the animation
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes moveUpDown {
        0% { transform: translateY(0); }
        100% { transform: translateY(50%); }
      }
      @keyframes fallToBottom {
        0% { transform: translateY(0); }
        100% { transform: translateY(100vh); }
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <div className="navContainer">
      <div className="logoAndTabs">
        <div className="logoContainer">
          <Image className="navLogo" src="/paintLogoWhite.png" alt="Logo" width={300} height={400} />
        </div>
        <nav className="navBar">
          <div className="linkContainer">
            <Link href="/" className="navLink">Home</Link>
            <Image className="brush" src="/brush.png" alt="Brush" width={200} height={200} />
          </div>
          <div className="linkContainer">
            <Link href="/services" className="navLink">Services</Link>
            <Image className="brush" src="/brush.png" alt="Brush" width={200} height={200} />
          </div>
          <div className="linkContainer">
            <Link href="/reviews" className="navLink">Reviews</Link>
            <Image className="brush" src="/brush.png" alt="Brush" width={200} height={200} />
          </div>
        </nav>
      </div>
      <div className="headerEffect">
        <div className="sphere"></div>
      </div>
    </div>
  );
};

export default Navbar;