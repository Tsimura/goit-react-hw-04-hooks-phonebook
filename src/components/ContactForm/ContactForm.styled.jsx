import styled from 'styled-components';
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  label {
    display: flex;
    justify-content: space-between;
    width: 340px;
    padding: 12px;
  }
  input {
    background-color: #f5f4fa;
    width: 240px;
    margin-left: 15px;
    border-radius: 5px;
    border: none;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
      color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
      background-color: #aaaaaa;
    }
  }
  button {
    cursor: pointer;
    font-size: 16px;
    line-height: 1.62;
    text-align: center;
    width: 120px;
    background: #f5f4fa;
    border: none;
    border-radius: 4px;
    padding: 4px 10px;
    margin-left: auto;
    margin-right: auto;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
      color 250ms cubic-bezier(0.4, 0, 0.2, 1),
      box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
    color: rgba(0, 0, 0, 0.6);
    text-shadow: 0px 3px 0px #b2a98f, 2 0px 14px 10px rgba(0, 0, 0, 0.15),
      3 0px 24px 2px rgba(0, 0, 0, 0.1), 4 0px 34px 30px rgba(0, 0, 0, 0.1);
    &:hover {
      color: #24f9f9;
      background-color: #aaaaaa;
      box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1),
        0px 1px 2px rgba(0, 0, 0, 0.08), 0px 2px 2px rgba(0, 0, 0, 0.12);
      border-radius: 4px;
    }
  }
`;
