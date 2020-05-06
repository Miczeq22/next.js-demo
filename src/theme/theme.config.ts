export type FontFamily = 'primary' | 'secondary';

export interface Theme {
  fontFamily: { [key in FontFamily]: string };
}

export const theme: Theme = {
  fontFamily: {
    primary: 'Montserrat',
    secondary: 'Raleway',
  },
};
