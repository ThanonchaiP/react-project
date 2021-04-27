import styled from 'styled-components'

export const Header = styled.div`
  height: 180px;
  background: red url(${props => props.img}) no-repeat center;
  background-size:cover;
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
