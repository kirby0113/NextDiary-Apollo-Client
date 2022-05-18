export const Colors = {
  white: "#fcfcfc",
  black: "#111111",
  darkgrey: "#333333",
} as const;

export const ButtonColor = {
  white: {
    background: Colors.white,
    border: Colors.darkgrey,
    text: Colors.darkgrey,
  },
  black: {
    background: Colors.darkgrey,
    border: Colors.black,
    text: Colors.white,
  },
} as const;
