import styled from "styled-components";

export const Task_todo = styled.div`
  width: 100%;
  margin: 10px 0;
  background-color: #3a3a3a;
  border-radius: 30px;
  min-height: 40px;
`
export const Task_items = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding-top: 5px;
  cursor: pointer;
`
export const Close_button = styled.button`
  width: 30px;
  height: 30px;
  font-size: 20px;
  color: crimson;
  border: none;
  background: none;
  cursor: pointer;
`
export const Task_title = styled.div`
  width: 80%;
  height: auto;
  font-size: 24px;
  color: #61dafb;
  overflow-wrap: break-word;
`
export const Styled_checked = styled.input`
  font-size: 18px;
  cursor: pointer;`