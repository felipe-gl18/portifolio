import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { TerminalLine } from "./terminal.types";
import { createCommands } from "./terminal.commands";
import { useTranslation } from "../i18n/useTranslation";

const createLine = (
  text: string,
  type: TerminalLine["type"] = "output",
  color: TerminalLine["color"] = "default",
): TerminalLine => ({
  id: crypto.randomUUID(),
  text,
  type,
  color,
});

export function useTerminal() {
  const { language, t } = useTranslation();

  const commands = useMemo(() => createCommands(language), [language]);

  const [lines, setLines] = useState<TerminalLine[]>(() => [
    createLine(t.terminal.welcome, "output", "cyan"),
    createLine(t.terminal.help, "output", "muted"),
    createLine(""),
  ]);

  const previousWelcome = useRef(t.terminal.welcome);
  const previousHelp = useRef(t.terminal.help);

  // Atualiza as mensagens iniciais quando o idioma muda,
  // sem apagar os comandos já executados.
  useEffect(() => {
    setLines((prev) =>
      prev.map((line) => {
        if (line.text === previousWelcome.current) {
          return { ...line, text: t.terminal.welcome };
        }

        if (line.text === previousHelp.current) {
          return { ...line, text: t.terminal.help };
        }

        return line;
      }),
    );

    previousWelcome.current = t.terminal.welcome;
    previousHelp.current = t.terminal.help;
  }, [t.terminal.welcome, t.terminal.help]);

  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [historyDraft, setHistoryDraft] = useState("");

  const executeCommand = useCallback(
    (rawCommand: string) => {
      const trimmedCommand = rawCommand.trim();

      if (!trimmedCommand) return;

      const [commandName, ...args] = trimmedCommand.split(/\s+/);
      const normalizedCommand = commandName.toLowerCase();

      const commandLine = createLine(trimmedCommand, "input");

      if (normalizedCommand === "clear") {
        setLines([]);
        setHistory((prev) => [...prev, trimmedCommand]);
        setHistoryIndex(-1);
        setHistoryDraft("");
        return;
      }

      const command = commands[normalizedCommand];

      const output = command
        ? command.execute(args)
        : [
            createLine(
              t.terminal.commandNotFound.replace(
                "{command}",
                normalizedCommand,
              ),
              "output",
              "red",
            ),
          ];

      setLines((prev) => [...prev, commandLine, ...output, createLine("")]);

      setHistory((prev) => [...prev, trimmedCommand]);
      setHistoryIndex(-1);
      setHistoryDraft("");
    },
    [commands, t.terminal.commandNotFound],
  );

  const navigateHistory = useCallback(
    (direction: "up" | "down") => {
      if (history.length === 0) return input;

      if (direction === "up") {
        if (historyIndex === -1) {
          setHistoryDraft(input);
          const newIndex = history.length - 1;
          setHistoryIndex(newIndex);
          return history[newIndex];
        }

        const newIndex = Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        return history[newIndex];
      }

      if (historyIndex === -1) return input;

      const newIndex = historyIndex + 1;

      if (newIndex >= history.length) {
        setHistoryIndex(-1);
        return historyDraft;
      }

      setHistoryIndex(newIndex);
      return history[newIndex];
    },
    [history, historyIndex, historyDraft, input],
  );

  const clearTerminal = useCallback(() => {
    setLines([]);
    setInput("");
  }, []);

  return {
    lines,
    input,
    setInput,
    executeCommand,
    navigateHistory,
    clearTerminal,
  };
}
