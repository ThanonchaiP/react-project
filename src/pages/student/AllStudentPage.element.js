import styled from "styled-components";

export const Container = styled.div`
  max-width: 1450px;
  text-align: center;
  margin: 0 auto;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 2rem;
`;

export const SearchLabel = styled.p`
  font-size: 25px;
  margin: 0 5px 0 1rem;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  @media (max-width: 1445px) {
    max-width: 1100px;
  }
  @media (max-width: 1090px) {
    justify-content: center;
    align-items: center;
  }
`;

export const Card = styled.div`
  background: #31394d;
  text-align: center;
  border-radius: 6px;
  padding: 0 10px;
  height: 385px;
  margin: 1rem;
  position: relative;
  width: 330px;
  box-shadow: 0 12px 13px rgba(0, 0, 0, 0.16), 0 12px 13px rgba(0, 0, 0, 0.16);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: translateY(-10px);
  }
`;

export const ImgProfile = styled.img`
  margin-top: 2rem;
  border-radius: 100%;
  margin-bottom: 0.5rem;
  width: 130px;
  height: 128px;
`;

export const Title = styled.p`
  font-size: 20px;
  color: #fff;

  :nth-child(3) {
    margin-bottom: 10px;
  }
`;

export const Detail = styled.p`
  font-size: 16px;
  color: #e5e7e9;
`;

export const Status = styled.p`
  padding: 10px 20px;
  color: #fff;
  margin-top: 1rem;
  background-color: ${(props) => props.colorStatus};
  border-radius: 6px;
  display: inline-block;
  font-size: 16px;
`;

export const Paging = styled.div`
  background-color: red;
  nav {
    background-color: white;
    justify-content: flex-end;

    @media (max-width: 1445px) {
     padding-right: 10rem;
    }
  }
`;
