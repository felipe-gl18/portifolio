import type { FormEvent, KeyboardEvent } from "react";
import { InputContainer, InputPrompt, CommandInput } from "./Terminal.styles";

interface TerminalInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  onHistoryNavigate: (direction: "up" | "down") => string;
  onClear: () => void;
}

export default function TerminalInput({
  value,
  onChange,
  onSubmit,
  onHistoryNavigate,
  onClear,
}: TerminalInputProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowUp") {
      event.preventDefault();
      onChange(onHistoryNavigate("up"));
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      onChange(onHistoryNavigate("down"));
    }

    if (event.ctrlKey && event.key.toLowerCase() === "l") {
      event.preventDefault();
      onClear();
    }
  };

  return (
    <InputContainer onSubmit={handleSubmit}>
      <InputPrompt>visitor@felipe:~$</InputPrompt>

      <CommandInput
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type 'help' to get started..."
        autoComplete="off"
        autoCapitalize="off"
        spellCheck={false}
        aria-label="Enter terminal command"
      />
    </InputContainer>
  );
}
