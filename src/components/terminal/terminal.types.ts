export type TerminalColor =
  | "default"
  | "green"
  | "cyan"
  | "yellow"
  | "red"
  | "muted";

export interface TerminalLine {
  id: string;
  text: string;
  color: TerminalColor;
  type: "input" | "output";
}

export interface TerminalCommand {
  description: string;
  execute: (args: string[]) => TerminalLine[];
}
