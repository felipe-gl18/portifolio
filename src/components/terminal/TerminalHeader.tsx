import {
  TerminalHeaderContainer,
  WindowControls,
  WindowDot,
  TerminalTitle,
  TerminalStatus,
  StatusDot,
} from "./Terminal.styles";

export default function TerminalHeader() {
  return (
    <TerminalHeaderContainer>
      <WindowControls>
        <WindowDot $color="#ff5555" />
        <WindowDot $color="#f1fa8c" />
        <WindowDot $color="#50fa7b" />
      </WindowControls>

      <TerminalTitle>felipe@portfolio: ~</TerminalTitle>

      <TerminalStatus>
        <StatusDot />
        ONLINE
      </TerminalStatus>
    </TerminalHeaderContainer>
  );
}
