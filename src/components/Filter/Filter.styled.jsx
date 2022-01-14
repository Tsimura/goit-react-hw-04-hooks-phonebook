import styled from 'styled-components';
export const FilterWrapper = styled.div`
  margin-bottom: 24px;
  input {
    background-color: #f5f4fa;
    height: 18px;
    border-radius: 5px;
    border: none;
    margin-left: 12px;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
      color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
      background-color: #aaaaaa;
    }
  }
`;
