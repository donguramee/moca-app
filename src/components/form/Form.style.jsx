import styled from "styled-components";

export const WrapForm = styled.form`
  //.
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
`;

export const WrapEmailPw = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const LabelStyle = styled.label`
  color: #767676;
  font-size: 15px;
  display: flex;
  align-items: center;
  margin: 20px 0 7px 0;
  font-family: "Pretendard-Medium";
`;

export const InputStyle = styled.input`
  font-family: "Pretendard-Regular", sans-serif;
  border: none;
  padding: 6px 0 6px 6px;
  /* width: 100%; */
  border-bottom: 1px solid #dbdbdb;
  color: var(--font-gray-color);

  &:focus {
    outline: 1px solid var(--primary-disabled-color);
    border-radius: 4px;
  }
  &::placeholder {
    color: #b8b8b8;
  }
`;

export const Correct = styled.span`
  box-sizing: border-box;
  color: #03c75a;
  font-size: 12px;
`;

export const Incorrect = styled.span`
  box-sizing: border-box;
  color: #eb5757;
  font-size: 12px;
`;

export const Title = styled.h1`
  display: block;
  text-align: center;
  font-family: "Roboto";
  font-size: 50px;
  font-weight: 200;
  margin-bottom: 16px;
  font-family: "Calfinedemo";
  color: var(--font-gray-color);
`;

export const Submitbutton = styled.button`
  font-family: "Pretendard-Medium", sans-serif;
  font-size: 14px;
  background-color: var(--primary-disabled-color);
  opacity: ${({ disabled }) => (disabled === true ? 0.3 : 1)};
  display: block;
  width: 100%;
  color: white;
  height: 40px;
  border-radius: 10px;
  border: none;
  /* margin-top: 14px; */
  transition: 0.5s;
  border: 2px solid white;

  cursor: ${({ disabled }) => (disabled === true ? "not-allowed" : "pointer")};
  &:hover {
    transition: 0.5s;
    color: ${({ disabled }) =>
      disabled === true ? "" : "var(--primary-disabled-color)"};
    background-color: ${({ disabled }) => (disabled === true ? "" : "white")};
    border: 2px solid
      ${({ disabled }) =>
        disabled === true ? "" : "var(--primary-disabled-color)"};
  }
`;

export const Label = styled.span`
  font-size: 12px;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
  border-radius: 44px;
  display: inline;
  width: auto;
  padding: 5px 8px 5px 8px;
  cursor: pointer;
  margin: 3px;
  transition: 0.3s;

  &:hover {
    color: #fff;
    border: 1px solid #fff;
    background-color: var(--primary-disabled-color);
    transition: 0.3s;
  }
  &.selected {
    color: #fff;
    border: 1px solid #fff;
    background-color: var(--primary-color);
    transition: 0.3s;
  }
`;
