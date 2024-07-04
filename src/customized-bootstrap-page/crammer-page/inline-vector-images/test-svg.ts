/* https://www.svgrepo.com/collection/variety-duotone-filled-icons/2 */

const TestSVG = (fill0: string, fill1: string) => {
  return `
    <svg viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M566.667 66.6667H200C163.181 66.6667 133.333 96.5144 133.333 133.333V666.667C133.333 703.486 163.181 733.333 200 733.333H566.667C603.486 733.333 633.333 703.486 633.333 666.667V133.333C633.333 96.5144 603.486 66.6667 566.667 66.6667Z" fill="${fill0}"/>
      <path d="M166.667 566.667H100C91.1594 566.667 82.6809 563.155 76.4297 556.904C70.1785 550.652 66.6666 542.174 66.6666 533.333C66.6666 524.493 70.1785 516.014 76.4297 509.763C82.6809 503.512 91.1594 500 100 500H166.667C175.507 500 183.986 503.512 190.237 509.763C196.488 516.014 200 524.493 200 533.333C200 542.174 196.488 550.652 190.237 556.904C183.986 563.155 175.507 566.667 166.667 566.667ZM166.667 433.333H100C91.1594 433.333 82.6809 429.821 76.4297 423.57C70.1785 417.319 66.6666 408.841 66.6666 400C66.6666 391.159 70.1785 382.681 76.4297 376.43C82.6809 370.179 91.1594 366.667 100 366.667H166.667C175.507 366.667 183.986 370.179 190.237 376.43C196.488 382.681 200 391.159 200 400C200 408.841 196.488 417.319 190.237 423.57C183.986 429.821 175.507 433.333 166.667 433.333ZM166.667 300H100C91.1594 300 82.6809 296.488 76.4297 290.237C70.1785 283.986 66.6666 275.507 66.6666 266.667C66.6666 257.826 70.1785 249.348 76.4297 243.096C82.6809 236.845 91.1594 233.333 100 233.333H166.667C175.507 233.333 183.986 236.845 190.237 243.096C196.488 249.348 200 257.826 200 266.667C200 275.507 196.488 283.986 190.237 290.237C183.986 296.488 175.507 300 166.667 300ZM630.333 176.667L410 397C406.85 400.087 404.345 403.769 402.628 407.831C400.912 411.894 400.018 416.256 400 420.667V466.667C400 475.507 403.512 483.986 409.763 490.237C416.014 496.488 424.493 500 433.333 500H479.667C484.077 499.982 488.44 499.088 492.502 497.372C496.565 495.655 500.246 493.15 503.333 490L723.667 270C729.774 263.769 733.195 255.392 733.195 246.667C733.195 237.942 729.774 229.564 723.667 223.333L677 176.667C670.769 170.559 662.392 167.138 653.667 167.138C644.942 167.138 636.564 170.559 630.333 176.667Z" fill="${fill1}"/>
    </svg>
  `;
};

export default TestSVG;
