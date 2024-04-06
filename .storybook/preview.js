// import "../src/index.css";
import "../src/styles/globalCss.module.scss";
import "../src/styles/globalCss.css";
// Registers the msw addon
import { initialize, mswDecorator } from "msw-storybook-addon";

// Initialize MSW
initialize();

//👇 Configures Storybook to log the actions( onArchiveTask and onPinTask ) in the UI.
/** @type { import('@storybook/react').Preview } */
const preview = {
  decorators: [mswDecorator],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: "prefers-color-scheme",
      values: [
        {
          name: "dark",
          value: "var(--brand-black-100)",
        },
        {
          name: "light",
          value: "var(--brand-white-100)",
        },
        {
          name: "prefers-color-scheme",
          value: "var(--background-primary)",
        },
      ],
    },
  },
};

export default preview;
