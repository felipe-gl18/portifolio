import TerminalHeader from "./TerminalHeader";
import TerminalOutput from "./TerminalOutput";
import TerminalInput from "./TerminalInput";
import { useTerminal } from "./useTerminal";

import { TerminalWindow } from "./Terminal.styles";

export default function Terminal() {
  const {
    lines,
    input,
    setInput,
    executeCommand,
    navigateHistory,
    clearTerminal,
  } = useTerminal();

  const handleSubmit = () => {
    executeCommand(input);
    setInput("");
  };

  return (
    <TerminalWindow>
      <TerminalHeader />

      <TerminalOutput lines={lines} />

      <TerminalInput
        value={input}
        onChange={setInput}
        onSubmit={handleSubmit}
        onHistoryNavigate={navigateHistory}
        onClear={clearTerminal}
      />
    </TerminalWindow>
  );
}
