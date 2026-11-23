import styled, { keyframes } from "styled-components";

const blink = keyframes`
  50% {
    opacity: 0;
  }
`;

export const TerminalWindow = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  box-sizing: border-box;
  background: #282a36;
  color: #f8f8f2;
  border: 1px solid #44475a;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(40, 42, 54, 0.15);

  font-family: "JetBrains Mono", monospace;

  @media (max-width: 768px) {
    border-radius: 8px;
  }
`;

export const TerminalHeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  gap: 10px;
  height: 46px;
  min-height: 46px;
  padding: 0 16px;
  box-sizing: border-box;
  background: #21222c;
  border-bottom: 1px solid #44475a;

  @media (max-width: 400px) {
    padding: 0 10px;
    gap: 6px;
  }
`;

export const WindowControls = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  gap: 7px;

  @media (max-width: 400px) {
    gap: 5px;
  }
`;

export const WindowDot = styled.span<{ $color: string }>`
  width: 11px;
  height: 11px;
  flex-shrink: 0;
  border-radius: 50%;
  background: ${({ $color }) => $color};

  @media (max-width: 400px) {
    width: 9px;
    height: 9px;
  }
`;

export const TerminalTitle = styled.span`
  color: #a6a6a6;
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 400px) {
    font-size: 10px;
  }
`;

export const TerminalStatus = styled.span`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  gap: 6px;
  color: #50fa7b;
  font-size: 10px;
  letter-spacing: 1px;

  @media (max-width: 400px) {
    font-size: 9px;
    letter-spacing: 0;
    gap: 4px;
  }
`;

export const StatusDot = styled.span`
  width: 6px;
  height: 6px;
  flex-shrink: 0;
  border-radius: 50%;
  background: #50fa7b;
`;

export const TerminalBody = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  min-width: 0;
  min-height: 0;
  padding: 20px;
  overflow-y: auto;
  overflow-x: hidden;
  box-sizing: border-box;

  scrollbar-width: thin;
  scrollbar-color: #44475a #282a36;

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-track {
    background: #282a36;
  }

  &::-webkit-scrollbar-thumb {
    background: #44475a;
    border-radius: 10px;
  }

  @media (max-width: 600px) {
    padding: 14px;
  }

  @media (max-width: 360px) {
    padding: 10px;
  }
`;

export const TerminalLines = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  min-width: 0;
`;

export const TerminalLineContainer = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 0;
  min-height: 20px;
  gap: 10px;
  line-height: 1.6;
  font-size: 12px;
  overflow-wrap: anywhere;
  white-space: pre-wrap;

  @media (max-width: 600px) {
    gap: 7px;
    font-size: 11px;
  }

  @media (max-width: 360px) {
    font-size: 10px;
  }
`;

export const TerminalPrompt = styled.span`
  flex-shrink: 0;
  color: #50fa7b;
`;

export const TerminalText = styled.span<{ $color: string }>`
  min-width: 0;
  color: ${({ $color }) => $color};
  overflow-wrap: anywhere;
`;

export const InputContainer = styled.form`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  gap: 9px;
  min-width: 0;
  min-height: 48px;
  padding: 12px 20px 16px;
  box-sizing: border-box;
  border-top: 1px solid #44475a;

  @media (max-width: 600px) {
    gap: 7px;
    padding: 10px 14px 14px;
  }

  @media (max-width: 360px) {
    padding: 10px;
  }
`;

export const InputPrompt = styled.span`
  flex-shrink: 0;
  color: #50fa7b;
  font-size: 12px;

  @media (max-width: 600px) {
    font-size: 10px;
  }

  @media (max-width: 360px) {
    font-size: 9px;
  }
`;

export const CommandInput = styled.input`
  flex: 1;
  width: 100%;
  min-width: 0;
  border: none;
  outline: none;
  background: transparent;
  color: #f8f8f2;
  caret-color: #50fa7b;
  font-family: inherit;
  font-size: 12px;

  &::placeholder {
    color: #6272a4;
  }

  @media (max-width: 600px) {
    font-size: 11px;
  }

  @media (max-width: 360px) {
    font-size: 10px;
  }
`;

export const Cursor = styled.span`
  display: inline-block;
  width: 7px;
  height: 15px;
  flex-shrink: 0;
  background: #50fa7b;
  animation: ${blink} 1s step-end infinite;
`;
