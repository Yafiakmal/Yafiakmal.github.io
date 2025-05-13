// tailwind.config.js
export default {
    // ...
    plugins: [
      function ({ addUtilities }) {
        addUtilities({
          '.no-scrollbar': {
            '-ms-overflow-style': 'none', /* IE/Edge */
            'scrollbar-width': 'none',    /* Firefox */
          },
          '.no-scrollbar::-webkit-scrollbar': {
            display: 'none',              /* Chrome/Safari */
          },
        });
      },
    ],
  };
  