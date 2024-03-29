import { style } from "@vanilla-extract/css";
import { vars } from "./theme.css";

export const container = style({
    borderBottomLeftRadius: "0.5rem",
    borderBottomRightRadius: "0.5rem",
    boxShadow: `0px 10px 15px -3px ${vars.color.background} 0 4px 6px -2px rgba(0,0,0,0.05)`,
    display: "flex",
    background: vars.color.headerBackground,
    color: vars.color.headerText,
    paddingLeft: "1.5rem",
    paddingRight: "1.5rem",
    paddingTop: "0.75rem",
    paddingBottom: "0.75rem",
    fontSize: "1.23rem",
    marginBottom: "1rem",
    gap: "0.5rem"
}); 