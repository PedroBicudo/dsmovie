import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');

    /* Resets */
    html {
      box-sizing: border-box;
    }

    *, *::after, *::before {
        box-sizing: inherit;
    }

    a, a:hover {
      text-decoration: none;
      color: unset;
    }

    body {
      margin: 0;
      padding: 0;
    }

    /* Variables */
    :root {
      /* Font size */
      --fs-sm: 0.75rem; /* 12px */
      --fs-base: 0.875rem; /* 14px */
      --fs-lg: 1rem; /* 16px */
      --fs-xlg: 1.5rem; /* 24px */
      --fs-xxlg: 2.5rem; /* 40px */


      /* Colors */
      --color-black-0: #161616;
      --color-black-10: #1C1C1C;
      --color-black-20: #434343;
      --color-black-30: #939393;
      --color-white: #fff;
      --color-black: #000;
      --color-gold: #FFBB3A;


      /* Dark theme */
      --color-dark-theme-background-0: #161616;
      --color-dark-theme-background-10: #1C1C1C;
      --color-dark-theme-background-20: #434343;
      --color-dark-theme-background-30: #939393;
    
      --color-dark-theme-text-color-0: var(--color-white);
      --color-dark-theme-text-color-1: #1C1C1C;
      --color-dark-theme-text-color-2: var(--color-white);

      --color-dark-theme-border-color-0: #161616;
      --color-dark-theme-border-color-1: var(--color-white);

      /* Light theme */
      --color-light-theme-background-0: #5386E4;
      --color-light-theme-background-10:#E6EFFF;
      --color-light-theme-background-20:#5386E4;
      --color-light-theme-background-30:#0042BB;
    
      --color-light-theme-text-color-0: var(--color-white);
      --color-light-theme-text-color-1: var(--color-white);
      --color-light-theme-text-color-2: var(--color-black);


      --color-light-theme-border-color-0: #5386E4;
      --color-light-theme-border-color-1: var(--color-black);


      /* Default */
      --color-background-0: var(--color-dark-theme-background-0);
      --color-background-10: var(--color-dark-theme-background-10);
      --color-background-20: var(--color-dark-theme-background-20);
      --color-background-30: var(--color-dark-theme-background-30);

      --color-text-color-0: var(--color-dark-theme-text-color-0);
      --color-text-color-1: var(--color-dark-theme-text-color-1);
      --color-text-color-2: var(--color-dark-theme-text-color-2);

      --color-border-color-0: var(--color-dark-theme-border-color-0);
      --color-border-color-1: var(--color-dark-theme-border-color-1);

    }

    .light-theme {
      --color-background-0: var(--color-light-theme-background-0);
      --color-background-10: var(--color-light-theme-background-10);
      --color-background-20: var(--color-light-theme-background-20);
      --color-background-30: var(--color-light-theme-background-30);

      --color-text-color-0: var(--color-light-theme-text-color-0);
      --color-text-color-1: var(--color-light-theme-text-color-1);
      --color-text-color-2: var(--color-light-theme-text-color-2);

      --color-border-color-0: var(--color-light-theme-border-color-0);
      --color-border-color-1: var(--color-light-theme-border-color-1);

    }

    /* Defaults */
    body {
      background-color: var(--color-background-10);
    }

    *, *::after, *::before {
      font-family: 'Open Sans', sans-serif;
    }

`
export default GlobalStyles;