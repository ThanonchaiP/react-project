import styled from "styled-components";
import {Table} from 'react-bootstrap';

export const Header = styled.div`
  height: 180px;
  background: url(${(props) => props.img}) no-repeat center;
  background-size: cover;
  display: flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  color: white;
  position: relative;
  z-index: 0;

  p{
      font-size:25px;
  }

  &:before {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #444;
    z-index: -1;
    content: "";
    opacity: 0.45;
  }
`;

export const TextHeader = styled.h3`
  font-size: 50px;
  color: white;
  margin: 0;
  font-weight: 800px;
`;

export const Container = styled.div`
  max-width:1100px;
  margin:0 auto;
  padding:1rem;
  text-align:center;
`;

export const Tables = styled(Table)`
  font-size:22px;
  margin-top:1rem;
  border:1.5px solid #000;
  thead{
    background-color:#273746;
    color:#fff;
  }
  td{
    cursor: pointer;
  }
`;
