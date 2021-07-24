import styled from "styled-components";
import { Dropdown } from "react-bootstrap";

export const ContentTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
`;

export const Text = styled.h3`
  margin: 0;
  font-weight: 900;
`;

export const ContentContainer = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  text-align: center;
  padding: 2rem;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  width: 450px;
  background-color: #f2f3f4;
  margin: 5px 10px 20px 10px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  transition: 0.3s;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  color: #fff;
  background-color: #34495e;
`;

export const CardContent = styled.div`
  padding: 1rem;
`;

export const DropdownYear = styled(Dropdown)`
  width:130px;

  #dropdown-basic{
    font-size:23px;
  }

  #menu{
    font-size:23px;
  }
`;
