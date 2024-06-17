function initializeTyped(targetElement, stringsElement, typeSpeed, startDelay, backSpeed, backDelay, loop) {
   return new Typed(targetElement, {
      stringsElement: stringsElement,
      typeSpeed: typeSpeed,
      startDelay: startDelay,
      backSpeed: backSpeed,
      backDelay: backDelay,
      loop: loop,
      showCursor: false,
   });
}

setTimeout(() => {
}, 600);