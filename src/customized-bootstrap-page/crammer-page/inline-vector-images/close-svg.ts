
const CloseSVG = (stroke: string) => {
  return `
    <svg viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M233.333 233.335L566.667 566.67M233.333 566.67L566.667 233.335" stroke="${stroke}" stroke-width="83.3333" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;
};

export default CloseSVG;
