export function createDrawer(root: HTMLElement) {
  const container = root.closest('.drawer-container') || root;
  const closeBtns = container.querySelectorAll('.drawer__close, .drawer-overlay');
  
  function open() {
    container.classList.add('is-open');
  }

  function close() {
    container.classList.remove('is-open');
  }

  closeBtns.forEach(btn => {
    btn.addEventListener('click', close);
  });

  return { open, close };
}
