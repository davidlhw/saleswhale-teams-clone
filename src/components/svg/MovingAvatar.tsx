import React from "react";
import styled from "styled-components/macro";

const Wrapper = styled.svg`
  aspect-ratio: 32/28;
  height: auto;
  width: auto;
`;

export default ({ color = "#ffffff4d" }: { color?: string }) => (
  <Wrapper
    width={32}
    height={28}
    viewBox="0 0 32 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 6C16 9.237 13.379 13 10 13C6.621 13 4 9.237 4 6C4 2.691 6.691 0 10 0C13.309 0 16 2.691 16 6ZM20 4H31C31.552 4 32 4.447 32 5C32 5.553 31.552 6 31 6H20C19.448 6 19 5.553 19 5C19 4.447 19.448 4 20 4ZM20 10H31C31.552 10 32 10.447 32 11C32 11.553 31.552 12 31 12H20C19.448 12 19 11.553 19 11C19 10.447 19.448 10 20 10ZM31 16H25C24.448 16 24 16.447 24 17C24 17.553 24.448 18 25 18H31C31.552 18 32 17.553 32 17C32 16.447 31.552 16 31 16ZM25 22H31C31.552 22 32 22.447 32 23C32 23.553 31.552 24 31 24H25C24.448 24 24 23.553 24 23C24 22.447 24.448 22 25 22ZM16.409 15.973C12.009 14.671 7.858 14.696 3.583 15.961C1.439 16.596 0 18.523 0 20.758V27C0 27.553 0.448 28 1 28H19C19.552 28 20 27.553 20 27V20.772C20 18.536 18.557 16.607 16.409 15.973Z"
    />
  </Wrapper>
);
