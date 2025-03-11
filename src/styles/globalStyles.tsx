import { css } from "@emotion/react";

export const globalStyles = css`
  @import "@fontsource/inter/400.css";
  @import "@fontsource/inter/700.css";
  @import "@fontsource/inter/variable.css";

  @font-face {
    font-family: "Inter";
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Playfair Display";
    src: url("/fonts/PlayfairDisplay-Italic-VariableFont.ttf")
      format("truetype");
    font-weight: normal;
    font-style: italic;
  }

  @font-face {
    font-family: "Nunito Sans";
    src: url("/fonts/NunitoSans-Italic-VariableFont.ttf") format("truetype");
    font-weight: normal;
    font-style: italic;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Playfair Display", serif;
    background-color: #06080c;
    color: white;
  }
`;
