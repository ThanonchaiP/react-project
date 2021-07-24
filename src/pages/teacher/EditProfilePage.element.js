import styled from "styled-components";

export const Container = styled.div`
  form {
    display: flex;
    justify-content: center;
    max-width: 1500px;
    margin: 0 auto;
    align-items: center;
    padding: 2rem;
  }
  /* background-color: pink; */
`;

export const ContentLeft = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-basis: 30%;
  img {
    width: 250px;
    height: 250px;
    border-radius: 50%;
  }

  [type="file"] {
    height: 0;
    overflow: hidden;
    width: 0;
  }

  [type="file"] + label {
    background: #ff2424;
    border: none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    text-align: center;
    font-size: 20px;
    font-weight: 800;
    width: 70%;
    outline: none;
    padding: 10px 10px;
    position: relative;
    transition: all 0.3s;
    font-family: "kanit";
    height: 50px;
  }
  [type="file"] + label:hover {
    background: #00ad5f;

    color: white;
  }
`;

export const ContentRight = styled.div`
  padding: 3rem;

  label {
    font-size: 21px;
    font-weight: 800;
  }
  input {
    font-size: 20px;
    border: 1px solid gray;
    width: 270px;
  }

  .selecter{
    width: 270px;
    height: 44px;
    font-size: 20px;
  }

  .border-gray{
    border: 1px solid gray;
  }
`;

export const BtnSubmit = styled.button`
  width: 100%;
  color: #fff;
  padding: 10px;
  background-color: #ff2424;
  font-weight: 800;
  border-radius: 6px;
  margin-top: 1rem;
  transition: 0.3s;

  &:hover {
    background-color: #00ad5f;
  }
`;
