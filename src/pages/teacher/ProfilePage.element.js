import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 1100px;
  margin: 0 auto;
  align-items: center;
  padding: 2rem;
`;

export const ImgContainer = styled.div`
  width: 50%;
  text-align: center;
`;

export const Img = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
`;

export const Content = styled.div`
  width: 50%;

  p {
    margin-bottom: 2px;
    font-size: 25px;
  }
`;

export const ButtonContent = styled.button`
  width: 220px;
  margin-top: 0.5rem;
  border-radius: 6px;
  margin-right: 1rem;
  height: 50px;
  background: #00ad5f;
  color: #fff;
  font-size: 20px;
`;

export const BtnEdit = styled.button`
  background-color:green;
  color:#fff;
  display:inline-block;
  width:200px;
  border-radius:6px;
  padding:10px 0;
  margin-top:1rem;
`;
