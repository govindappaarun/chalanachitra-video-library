import { colors } from "./colors";

const light = {
  primary: {
    dark: colors.primary[700],
    main: colors.primary[600],
    light: colors.primary[500],
    lightest: colors.primary[200],
    shadow: colors.primary[100],
    contrastText: colors.grayscale[100],
  },
  secondary: {
    dark: colors.secondary[700],
    main: colors.secondary[600],
    light: colors.secondary[500],
    lightest: colors.secondary[200],
    contrastText: colors.grayscale[100],
    shadow: colors.secondary[100],
  },
  success: {
    dark: colors.success[700],
    main: colors.success[600],
    light: colors.success[500],
    lightest: colors.success[200],
    contrastText: colors.grayscale[100],
  },
  info: {
    main: colors.alternative[500],
  },
  error: {
    dark: colors.danger[700],
    main: colors.danger[600],
    light: colors.danger[500],
    lightest: colors.danger[200],
    shadow: colors.danger[100],
    contrastText: colors.grayscale[100],
  },
  warning: {
    dark: colors.warning[700],
    main: colors.warning[600],
    light: colors.warning[500],
    lightest: colors.warning[200],
    shadow: colors.warning[100],
    contrastText: colors.grayscale[100],
  },
  neutral: {
    dark: colors.neutral[700],
    main: colors.neutral[600],
    light: colors.neutral[500],
    lightest: colors.neutral[200],
    shadow: colors.neutral[100],
    contrastText: colors.grayscale[100],
  },
  alternate: {
    dark: colors.alternative[700],
    main: colors.alternative[600],
    light: colors.alternative[500],
    lightest: colors.alternative[200],
    contrastText: colors.grayscale[100],
  },
  black: colors.grayscale[900],
  white: colors.grayscale[100],
  text: colors.grayscale[900],
  bg: colors.grayscale[100],

  boxShadow: {
    bs1: "1px 1px 2px grey",
  },
};

const dark = {
  primary: {
    dark: colors.primary[700],
    main: colors.primary[600],
    light: colors.primary[500],
    lightest: colors.primary[200],
    contrastText: colors.grayscale[100],
  },
  secondary: {
    dark: colors.secondary[700],
    main: colors.secondary[600],
    light: colors.secondary[500],
    lightest: colors.secondary[200],
    contrastText: colors.grayscale[100],
  },
  success: {
    dark: colors.success[700],
    main: colors.success[600],
    light: colors.success[500],
    lightest: colors.success[200],
    contrastText: colors.grayscale[100],
  },
  info: {
    main: colors.alternative[500],
  },
  error: {
    dark: colors.danger[700],
    main: colors.danger[600],
    light: colors.danger[500],
    lightest: colors.danger[200],
    contrastText: colors.grayscale[100],
  },
  warning: {
    dark: colors.warning[700],
    main: colors.warning[600],
    light: colors.warning[500],
    lightest: colors.warning[200],
    contrastText: colors.grayscale[100],
  },
  neutral: {
    dark: colors.grayscale[800],
    main: colors.grayscale[500],
    light: colors.grayscale[400],
  },
  alternate: {
    dark: colors.alternative[700],
    main: colors.alternative[600],
    light: colors.alternative[500],
    lightest: colors.alternative[200],
    contrastText: colors.grayscale[100],
  },
  black: colors.grayscale[900],
  white: colors.grayscale[100],
  text: colors.grayscale[900],
  bg: colors.grayscale[100],

  boxShadow: {
    bs1: "1px 1px 2px grey",
  },
};

export default { light, dark };
