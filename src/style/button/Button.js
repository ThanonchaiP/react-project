import styled from "styled-components";

export const TermButton = styled.button`
  width: 130px;
  height: 48px;
  background: #6ba368;
  font-size: 20px;
  color: #fff;
  line-height: 1.2;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  border: none;
  border-radius: none;
  transition: all 0.3s;
  margin: 0 5px;

  &:hover {
    background: #598856;
  }
`;

export const SearchBtn = styled.button`
  padding: 10px 10px;
  width:150px;
  margin: 0 1rem;
  background: #00ad5f;
  font-size: 20px;
  color: #fff;
  outline:none;
  transition:.3s;
  border-radius:4px;

  &:hover{
    background: #28B463;
  }
`;
