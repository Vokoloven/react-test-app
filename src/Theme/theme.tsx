interface ITheme {
  breakpoints: string[];
  space: number[];
  sizes: number[];
  fonts: { body: string; heading: string; monospace: string };
  fontSizes: number[];
  fontWeights: { body: number; heading: number; bold: number };
  colors: { white: string; black: string; primary: string; secondary: string };
}

export const theme: ITheme = {
  breakpoints: ['40em', '52em', '64em'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: [0, 4, 8, 16, 32, 36, 64, 128, 256, 512],
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  colors: {
    white: '#fff',
    black: '#000',
    primary: '#171A21',
    secondary: '#837F7F',
  },
  //   shadows: {
  //     main: '2px 2px 2px 3px rgba(0, 0, 0, 0.2)',
  //   },
};
