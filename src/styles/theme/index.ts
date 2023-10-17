import { extendTheme } from "@chakra-ui/react";

import colors from "./colors";
import { fonts, fontSizes } from "./typography";
import styles from "./default";

import components from "../components";

const theme = extendTheme({ colors, fonts, fontSizes, styles, components });
export default theme;
