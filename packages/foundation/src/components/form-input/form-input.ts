export function createPasswordToggle(root: HTMLElement) {
  const input = root.querySelector('input') as HTMLInputElement;
  const btn = root.querySelector('.form-input-toggle') as HTMLButtonElement;
  
  if (!input || !btn) return;
  
  btn.addEventListener('click', () => {
    const isPassword = input.type === 'password';
    input.type = isPassword ? 'text' : 'password';
  });
}
