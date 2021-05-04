import { Theme } from 'theme-ui'

const makeTheme = <T extends Theme>(t: T) => t

const theme = makeTheme({
  space: [0, 4, 8, 16, 24, 32, 64, 128, 256, 512],
  fonts: {
    body: '"Poppins", system-ui, -apple-system, sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    semibold: 600,
    heading: 600,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    accent: '#0E80F1',
    background: '#F8F8F8',
    highlight: '#0E80F1',
    icon: '#BCBCBC',
    interaction: '#0E80F1',
    muted: '#BCBCBC',
    primary: '#21272A',
    secondary: '#0E80F1',
    text: '#21272A',
    white: '#FFFFFF',
  },
  sizes: {
    container: {
      maxWidth: 1280, // just an example related to how define max width directly on theme for a container
      padding: 4, // maps to space index 4, which is 16 (pixels)
    },
  },
  radii: {
    borderRadius: 1,
  },
  shadows: {
    medium: '0 8px 32px rgba(0, 0, 0, .16)',
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    h1: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 5,
    },
    h2: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 4,
    },
    h3: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 3,
    },
    h4: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 2,
    },
    h5: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 1,
    },
    h6: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 0,
    },
    p: {
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    a: {
      color: 'text',
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    img: {
      maxWidth: '100%',
    },
    ol: {
      listStyleType: 'none',
      p: 0,
      m: 0,
    },
    ul: {
      listStyleType: 'none',
      p: 0,
      m: 0,
    },
  },
})

export default theme
