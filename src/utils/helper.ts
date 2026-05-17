let touchStartY = 0;
let isAnimating = false;

const ANIMATION_TIME = 700;

function changeSection(direction: 1 | -1) {
  if (isAnimating) return;

  const sections =
    document.querySelectorAll<HTMLDivElement>('.section');

  const current =
    [...sections].findIndex(section =>
      section.classList.contains('active')
    );

  const next = current + direction;

  if (
    next < 0 ||
    next >= sections.length
  ) {
    return;
  }

  isAnimating = true;

  const enterClass =
    direction > 0
      ? 'enter-from-bottom'
      : 'enter-from-top';

  const leaveClass =
    direction > 0
      ? 'leave-to-top'
      : 'leave-to-bottom';

  // Prepare next section
  sections[next].classList.add(
    'active',
    enterClass
  );

  // Animate current section out
  sections[current].classList.add(
    leaveClass
  );

  setTimeout(() => {
    sections[current].classList.remove(
      'active',
      leaveClass
    );

    sections[next].classList.remove(
      enterClass
    );

    isAnimating = false;
  }, ANIMATION_TIME);
}

function wheelHandler(event: WheelEvent) {
  event.preventDefault();

  if (isAnimating) return;

  // ignore tiny trackpad movement
  if (Math.abs(event.deltaY) < 20) return;

  changeSection(
    event.deltaY > 0 ? 1 : -1
  );
}

function touchStartHandler(event: TouchEvent) {
  touchStartY =
    event.changedTouches[0].clientY;
}

function touchEndHandler(event: TouchEvent) {
  if (isAnimating) return;

  const touchEndY =
    event.changedTouches[0].clientY;

  const diff =
    touchStartY - touchEndY;

  // ignore tiny movement
  if (Math.abs(diff) < 40) return;

  changeSection(
    diff > 0 ? 1 : -1
  );
}

export function applySinglePageScroll() {
  const sections =
    document.querySelectorAll<HTMLDivElement>('.section');

  if (!sections.length) return;

  // reset states
  sections.forEach(section => {
    section.classList.remove(
      'active',
      'leave-to-top',
      'leave-to-bottom',
      'enter-from-top',
      'enter-from-bottom'
    );
  });

  // activate first section
  sections[0].classList.add('active');

  window.addEventListener(
    'wheel',
    wheelHandler,
    { passive: false }
  );

  window.addEventListener(
    'touchstart',
    touchStartHandler,
    { passive: true }
  );

  window.addEventListener(
    'touchend',
    touchEndHandler,
    { passive: true }
  );
}

export function removeSinglePageScroll() {
  window.removeEventListener(
    'wheel',
    wheelHandler
  );

  window.removeEventListener(
    'touchstart',
    touchStartHandler
  );

  window.removeEventListener(
    'touchend',
    touchEndHandler
  );
}