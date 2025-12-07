import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import styled from "styled-components";

const StyledTerminal = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background-color: #282a36;
  color: #f8f8f2;
  padding: 24px;
  user-select: none;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 12px; /* scrollbar width */
  }

  &::-webkit-scrollbar-track {
    background: #282a36; /* track color */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #8888883a; /* thumb color */
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555; /* hover effect */
  }
`;
const Line = styled.div`
  display: flex;
  align-items: center;
`;
const LineCircle = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: #44475a;
`;
const LineNumber = styled.div`
  display: inline-block;
  width: 24px; /* FIXO */
  text-align: right; /* deixa alinhado igual terminal real */

  color: #6272a4;
`;
const LineContent = styled.span`
  display: flex;

  align-items: center;
  margin-left: 24px;
`;
const LineContentText = styled.p<{ color?: string }>`
  color: ${({ color }) => (color ? color : "#f8f8f2")};
  margin: 0px;
`;
const Cursor = styled.span`
  display: inline-block;
  width: 10px;
  height: 18px;
  background: #50fa7b;
  animation: blink 1s infinite;

  @keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

type Line = {
  text: string;
  color?: string;
};

const defaultLines: Line[] = [
  { text: "Welcome to Felipe's Portifolio Terminal." },
  { text: "Type !help to see available commands." },
  { text: "" },
];

export default function Terminal() {
  const terminalRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const [previousCommands, setPreviousCommand] = useState<string[]>([]);
  const [currentInput, setCurrentInput] = useState("");
  const [terminalLines, setTerminalLines] = useState<Line[]>(defaultLines);

  const handleTerminalLastLine = (text: string) => {
    setTerminalLines((prev) => {
      const updated = [...prev];
      updated[updated.length - 1].text = text;
      return updated;
    });
  };
  const handleKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      processCommand(currentInput);
      setPreviousCommand((prev) => [...prev, currentInput]);
      setCurrentInput("");
      return;
    }
    if (e.key === "Backspace") {
      const newInput = currentInput.slice(0, currentInput.length - 1);
      setCurrentInput(newInput);
      handleTerminalLastLine(newInput);
      return;
    }
    if (e.key.length === 1) {
      const newInput = currentInput + e.key;
      setCurrentInput(newInput);
      handleTerminalLastLine(newInput);
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (previousCommands.length === 0) return;
      const indexOfCommand = previousCommands.indexOf(currentInput);
      const lastItemIndex = previousCommands.length - 1;
      if (indexOfCommand !== -1) {
        const newIndex = indexOfCommand - 1;
        const newInput = previousCommands[newIndex < 0 ? 0 : newIndex];
        setCurrentInput(newInput);
        handleTerminalLastLine(newInput);
        return;
      }
      setCurrentInput(previousCommands[lastItemIndex]);
      handleTerminalLastLine(previousCommands[lastItemIndex]);
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (previousCommands.length === 0) return;
      const indexOfCommand = previousCommands.indexOf(currentInput);
      const newInput = previousCommands[indexOfCommand + 1];
      if (newInput) {
        setCurrentInput(newInput);
        handleTerminalLastLine(newInput);
        return;
      }
      setCurrentInput("");
      handleTerminalLastLine("");
    }
  };
  const processCommand = (command: string) => {
    switch (command) {
      case "!help":
        addLines([
          { text: "Available commands:" },
          { text: "!aboutme – Short summary", color: "#50fa7b" },
          { text: "!projects – My best work", color: "#50fa7b" },
          { text: "!experience – Past jobs", color: "#50fa7b" },
          { text: "!contact – Ways to reach me", color: "#50fa7b" },
          {
            text: "!curriculum – Download my updated curriculum",
            color: "#50fa7b",
          },
          { text: "!clear – Clear terminal", color: "#50fa7b" },
        ]);
        break;
      case "!aboutme":
        addLines([
          { text: "──── About Me ────", color: "#8be9fd" },
          { text: "Felipe Gadelha – Software Engineer", color: "#f1fa8c" },
          { text: "" },
          {
            text: "Fullstack engineer specialized in Node.js, React and TypeScript.",
            color: "#a6a6a6",
          },
          {
            text: "Experienced in scalable architectures, real-time systems, CI/CD,",
            color: "#a6a6a6",
          },
          {
            text: "testing, cloud, and high-performance UI development.",
            color: "#a6a6a6",
          },
          { text: "──────────────────", color: "#44475a" },
        ]);
        break;
      case "!projects":
        addLines([
          { text: "──── Projects ────", color: "#8be9fd" },
          {
            text: "- Real-time communication platform (Node.js, Socket.io, Prisma)",
          },
          {
            text: "- Geolocation dashboard with interactive mapping (React + Leaflet)",
          },
          { text: "- Automated PDF reporting engine (Node Workers, pdf-lib)" },
          { text: "- Modern Next.js application with Shadcn + Tailwind" },
          { text: "" },
          { text: "GitHub → github.com/felipe-gl18", color: "#8be9fd" },
          { text: "──────────────────", color: "#44475a" },
        ]);
        break;
      case "!experience":
        addLines([
          { text: "──── Experience ────", color: "#8be9fd" },
          { text: "" },
          {
            text: "FlowBit Tech – Mid Software Engineer (2025–Present)",
            color: "#f1fa8c",
          },
          {
            text: "• Scalable real-time architecture, REST API, Jest/Supertest",
            color: "#a6a6a6",
          },
          {
            text: "• High-performance frontend (React, Tailwind, Leaflet)",
            color: "#a6a6a6",
          },
          {
            text: "• Firebase Storage + FCM (12k+ notifications/month)",
            color: "#a6a6a6",
          },
          { text: "• CI/CD with Docker + GitHub Actions", color: "#a6a6a6" },
          { text: "" },
          {
            text: "Síntese BI – Junior Software Engineer (2023–2024)",
            color: "#f1fa8c",
          },
          {
            text: "• Automated reporting (Node Workers, pdf-lib, Nodemailer)",
            color: "#a6a6a6",
          },
          { text: "• Auth + RBAC with NestJS", color: "#a6a6a6" },
          { text: "• CI/CD on AWS", color: "#a6a6a6" },
          { text: "• Frontend refactor (React + Tailwind)", color: "#a6a6a6" },
          { text: "" },
          { text: "Center Cartuchos – Intern (2021–2022)", color: "#f1fa8c" },
          { text: "• Navigation improvements (React)", color: "#a6a6a6" },
          {
            text: "• Payment stability (Stripe) – 15% fewer errors",
            color: "#a6a6a6",
          },
          { text: "──────────────────", color: "#44475a" },
        ]);
        break;
      case "!contact":
        addLines([
          { text: "──── Contact ────", color: "#8be9fd" },
          { text: "Email: felipegadelha2004@gmail.com" },
          { text: "Phone: +55 88 99204-8450" },
          {
            text: "LinkedIn: linkedin.com/in/felipe-lino-developer",
            color: "#8be9fd",
          },
          { text: "GitHub: github.com/felipe-gl18", color: "#8be9fd" },
          { text: "──────────────────", color: "#44475a" },
        ]);
        break;
      case "!curriculum":
        downloadCurriculum();
        break;
      case "!clear":
        removeLines();
        break;
      default:
        addLines([{ text: "Unknown command", color: "#ff5555" }]);
    }
  };
  const addLines = (lines: Line[]) => {
    setTerminalLines((prev) => [...prev, ...lines, { text: "" }]);
  };
  const removeLines = () => {
    setCurrentInput("");
    setTerminalLines(defaultLines);
    handleTerminalLastLine("");
  };
  const downloadCurriculum = () => {
    const link = document.createElement("a");
    link.href = "/felipe-gadelha-software-engineer.pdf";
    link.download = "felipe-gadelha-software-engineer.pdf";
    link.click();
  };

  useEffect(() => terminalRef.current?.focus(), []);
  useEffect(
    () => bottomRef.current?.scrollIntoView({ behavior: "smooth" }),
    [terminalLines]
  );

  return (
    <StyledTerminal tabIndex={0} onKeyDown={handleKey} ref={terminalRef}>
      {terminalLines.map((line, i) => (
        <Line key={i}>
          <LineCircle />
          <LineNumber>{i + 1}</LineNumber>
          <LineContent>
            <LineContentText color={line.color}>{line.text}</LineContentText>{" "}
            {i === terminalLines.length - 1 && <Cursor />}
          </LineContent>
        </Line>
      ))}
      <div ref={bottomRef} />
    </StyledTerminal>
  );
}
