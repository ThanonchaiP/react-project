import styled from "styled-components";

export const Header = styled.div`
  height: 180px;
  background:url(${(props) => props.img}) no-repeat center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  position: relative;
  z-index: 0;

  &:before {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #444;
    z-index: -1;
    content: '';
    opacity: .45;
  }
`;

export const TextHeader = styled.h3`
  font-size: 50px;
  color: white;
  margin: 0;
  font-weight: 800px;
`;
