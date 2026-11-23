import type {
  TerminalCommand,
  TerminalLine,
  TerminalColor,
} from "./terminal.types";

import type { Language } from "../i18n/translations";
import { translations } from "../i18n/translations";

const createLine = (
  text: string,
  color: TerminalColor = "default",
): TerminalLine => ({
  id: crypto.randomUUID(),
  text,
  color,
  type: "output",
});

type OutputLine = {
  text: string;
  color?: TerminalColor;
};

const renderLines = (lines: readonly OutputLine[]): TerminalLine[] =>
  lines.map(({ text, color }) => createLine(text, color));

export function createCommands(
  language: Language,
): Record<string, TerminalCommand> {
  const t = translations[language].terminal;

  return {
    help: {
      description: t.commands.help.description,
      execute: () => renderLines(t.commandOutput.help),
    },

    about: {
      description: t.commands.about.description,
      execute: () => renderLines(t.commandOutput.about),
    },

    projects: {
      description: t.commands.projects.description,
      execute: () => renderLines(t.commandOutput.projects),
    },

    experience: {
      description: t.commands.experience.description,
      execute: () => renderLines(t.commandOutput.experience),
    },

    contact: {
      description: t.commands.contact.description,
      execute: () => renderLines(t.commandOutput.contact),
    },

    stack: {
      description: t.commands.stack.description,
      execute: () => renderLines(t.commandOutput.stack),
    },
  };
}
