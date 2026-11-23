import type { JSX } from "react";
import styled from "styled-components";

interface NetworkBackgroundProps {
  showNetwork?: boolean;
}

const Background = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
`;

const NetworkSvg = styled.svg`
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
`;

export default function NetworkBackground({
  showNetwork = true,
}: NetworkBackgroundProps): JSX.Element {
  return (
    <Background>
      {showNetwork && (
        <NetworkSvg
          viewBox="0 0 800 700"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="590" cy="330" r="230" fill="url(#network-glow)" />

          <g fill="none" stroke="#2563eb" strokeWidth="1.2" strokeOpacity=".25">
            <path d="M350 100 L500 180 L650 120 L750 240" />
            <path d="M350 100 L390 300 L550 400 L750 240" />
            <path d="M390 300 L250 450 L450 570 L550 400" />
            <path d="M500 180 L550 400" />
            <path d="M650 120 L550 400" />
            <path d="M250 450 L180 580" />
            <path d="M450 570 L650 620" />
          </g>

          <g fill="#2563eb">
            <circle cx="350" cy="100" r="3" />
            <circle cx="500" cy="180" r="4" />
            <circle cx="650" cy="120" r="3" />
            <circle cx="750" cy="240" r="4" />
            <circle cx="390" cy="300" r="3" />
            <circle cx="550" cy="400" r="5" />
            <circle cx="250" cy="450" r="3" />
            <circle cx="450" cy="570" r="4" />
            <circle cx="180" cy="580" r="3" />
            <circle cx="650" cy="620" r="3" />
          </g>
        </NetworkSvg>
      )}
    </Background>
  );
}
