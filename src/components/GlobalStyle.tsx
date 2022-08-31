import { Global, css } from '@emotion/react';

const GlobalStyle = () => (
  <Global
    styles={css`
      @import "//fonts.googleapis.com/earlyaccess/notosanskr.css";

      html,
      body,
      div,
      span,
      applet,
      object,
      iframe,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p,
      blockquote,
      pre,
      a,
      abbr,
      acronym,
      address,
      big,
      cite,
      code,
      del,
      dfn,
      em,
      img,
      ins,
      kbd,
      q,
      s,
      samp,
      small,
      strike,
      strong,
      sub,
      sup,
      tt,
      var,
      b,
      u,
      i,
      center,
      dl,
      dt,
      dd,
      ol,
      ul,
      li,
      fieldset,
      form,
      label,
      legend,
      table,
      caption,
      tbody,
      tfoot,
      thead,
      tr,
      th,
      td,
      article,
      aside,
      canvas,
      details,
      embed,
      figure,
      figcaption,
      footer,
      header,
      hgroup,
      menu,
      nav,
      output,
      ruby,
      section,
      summary,
      time,
      mark,
      audio,
      input,
      textarea,
      video {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font: inherit;
        font-size: 100%;
        vertical-align: baseline;
        border: 0;
      }

      html {
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 62.5%;

        body {
          font-size: 1.6rem;
        }
      }

      ol,
      ul {
        list-style: none;
      }

      a {
        color: inherit;
        text-decoration: none;
        background-color: transparent;
        outline: none;

        &:active,
        &:hover {
          color: inherit;
          text-decoration: none;
          outline: 0;
        }
      }

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        font: inherit;
        color: inherit;
        letter-spacing: inherit;
        white-space: nowrap;
        cursor: pointer;
        user-select: none;
        background: none;
        border: none;
        outline: none;
      }

      input {
        outline: none;
      }
    `}
  />
);
export default GlobalStyle;