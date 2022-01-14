import styled from 'styled-components';
export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 960px;
  height: 600px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  border-radius: 15px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  background-image: url('https://cdn.pixabay.com/photo/2015/05/31/15/07/coffee-792113_960_720.jpg');
  background-size: cover;
  background-position: center;
  background-color: #aaaaaa;
  h1 {
    text-transform: uppercase;
  }
  h2 {
    margin-bottom: 10px;
  }
`;
export const WorkingSpace = styled.div`
  margin-top: 60px;
  margin-left: 300px;
`;
