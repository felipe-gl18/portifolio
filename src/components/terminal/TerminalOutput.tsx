import { useEffect, useRef } from "react";
import type { TerminalLine } from "./terminal.types";

import {
  TerminalBody,
  TerminalLines,
  TerminalLineContainer,
  TerminalPrompt,
  TerminalText,
} from "./Terminal.styles";

interface TerminalOutputProps {
  lines: TerminalLine[];
}

const colors: Record<TerminalLine["color"], string> = {
  default: "#f8f8f2",
  green: "#50fa7b",
  cyan: "#8be9fd",
  yellow: "#f1fa8c",
  red: "#ff5555",
  muted: "#6272a4",
};

export default function TerminalOutput({ lines }: TerminalOutputProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [lines]);

  return (
    <TerminalBody
      role="log"
      aria-label="Terminal output"
      aria-live="polite"
      aria-relevant="additions"
    >
      <TerminalLines>
        {lines.map((line) => (
          <TerminalLineContainer key={line.id}>
            {line.type === "input" && (
              <TerminalPrompt>visitor@felipe:~$</TerminalPrompt>
            )}

            <TerminalText $color={colors[line.color]}>
              {line.text || "\u00A0"}
            </TerminalText>
          </TerminalLineContainer>
        ))}
      </TerminalLines>

      <div ref={bottomRef} />
    </TerminalBody>
  );
}
