let lastScrollTop = 0;
let debounceTimer: any;
let pos = 0;

const debounce = (callback: Function, time: number) => {
  window.clearTimeout(debounceTimer);
  debounceTimer = window.setTimeout(callback, time);
};

function handleScroll() {
  const sections = document.querySelectorAll<HTMLDivElement>('.section');
  const elements = document.querySelectorAll<HTMLDivElement>('.section');
  let currentActiveIndex = 0;

  sections.forEach((item, index) => {
    if (item.classList.contains('active')) {
      currentActiveIndex = index;
    }
  });
  let st = window.pageYOffset || document.documentElement.scrollTop;

  if (st > lastScrollTop) {
    if (currentActiveIndex === elements.length - 1) {
      return;
    }
    elements.forEach((item, index) => {
      if (index === currentActiveIndex) {
        item.classList.remove('active');
      }
      elements[currentActiveIndex + 1].classList.add('active');
    });
  } else if (st < lastScrollTop) {
    if (currentActiveIndex === 0) {
      return;
    }
    elements.forEach((item, index) => {
      if (index === currentActiveIndex) {
        item.classList.remove('active');
      }
      elements[currentActiveIndex - 1].classList.add('active');
    });
  }
  lastScrollTop = st <= 0 ? 0 : st;
}

function mouseWheelHndler(event: any) {
  const sections = document.querySelectorAll<HTMLDivElement>('.section');
  const elements = document.querySelectorAll<HTMLDivElement>('.section');
  let currentActiveIndex = 0;

  sections.forEach((item, index) => {
    if (item.classList.contains('active')) {
      currentActiveIndex = index;
    }
  });

  let e = window.event || event;
  let delta = Math.max(-1, Math.min(1, event.wheelDelta || -e.detail));
  if (delta > 0) {
    if (currentActiveIndex === 0) {
      return;
    }
    elements.forEach((item, index) => {
      if (index === currentActiveIndex) {
        item.classList.remove('active');
      }
      elements[currentActiveIndex - 1].classList.add('active');
    });
  } else {
    if (currentActiveIndex === elements.length - 1) {
      return;
    }
    elements.forEach((item, index) => {
      if (index === currentActiveIndex) {
        item.classList.remove('active');
      }
      elements[currentActiveIndex + 1].classList.add('active');
    });
  }
}

function touchHandler(event: TouchEvent) {
  const sections = document.querySelectorAll<HTMLDivElement>('.section');
  const elements = document.querySelectorAll<HTMLDivElement>('.section');
  let currentActiveIndex = 0;

  sections.forEach((item, index) => {
    if (item.classList.contains('active')) {
      currentActiveIndex = index;
    }
  });

  let newPos = event.changedTouches[0].clientY;

  // let e = window.event || event;
  // let delta = Math.max(-1, Math.min(1, event.wheelDelta || -e.detail));
  if (newPos > pos) {
    if (currentActiveIndex === 0) {
      return;
    }
    elements.forEach((item, index) => {
      if (index === currentActiveIndex) {
        item.classList.remove('active');
      }
      elements[currentActiveIndex - 1].classList.add('active');
    });
  } else {
    if (currentActiveIndex === elements.length - 1) {
      return;
    }
    elements.forEach((item, index) => {
      if (index === currentActiveIndex) {
        item.classList.remove('active');
      }
      elements[currentActiveIndex + 1].classList.add('active');
    });
  }
}

export function applySinglePageScroll() {
  const sections = document.querySelectorAll<HTMLDivElement>('.section');
  sections[0].classList.add('active');

  window.addEventListener('wheel', (event) =>
    debounce(() => mouseWheelHndler(event), 250)
  );

  window.addEventListener('touchstart', (event: TouchEvent) => {
    pos = event.changedTouches[0].clientY;
  });

  window.addEventListener('touchmove', (event: TouchEvent) => {
    debounce(() => touchHandler(event), 500);
  });
}
