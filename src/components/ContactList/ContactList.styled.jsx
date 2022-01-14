import styled from 'styled-components';
export const ContactListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 340px;
  max-height: 240px;
  overflow: hidden;
  overflow-y: auto;
  li {
    width: 100%;
    color: rgba(0, 0, 0, 0.6);
    &:not(:last-child) {
      margin-bottom: 8px;
    }
  }
  button {
    cursor: pointer;
    margin-left: auto;
    float: right;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: none;
    color: rgba(0, 0, 0, 0.6);
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
      color 250ms cubic-bezier(0.4, 0, 0.2, 1),
      box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
    :hover {
      color: #24f9f9;
      background-color: #aaaaaa;
    }
  }
`;
