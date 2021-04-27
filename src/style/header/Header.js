import styled from 'styled-components'

export const Header = styled.div`
  height: 180px;
  background-color:${props => props.img};
  display:flex;
  align-items:center;
  justify-content:center;
  color:white;
`;

export const TextHeader = styled.h3`
  font-size:50px;
  color:white;
  margin:0;
  font-weight:800px
`;
