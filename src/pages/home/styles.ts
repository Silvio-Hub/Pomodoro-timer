import styled from "styled-components";

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`;

export const BasetCountdownButton = styled.button`
  width: 100%;
  border: none;
  padding: 1rem;
  border-radius: 8px;
  color: ${(props) => props.theme["gray-100"]};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-weight: bold;
  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const StartCountdownButton = styled(BasetCountdownButton)`
  background: ${(props) => props.theme["green-500"]};

  &:not(:disabled)hover {
    background: ${(props) => props.theme["green-700"]};
  }
`;

export const StoptCountdownButton = styled(BasetCountdownButton)`
  background: ${(props) => props.theme["red-500"]};

  &:not(:disabled)hover {
    background: ${(props) => props.theme["red-700"]};
  }
`;
