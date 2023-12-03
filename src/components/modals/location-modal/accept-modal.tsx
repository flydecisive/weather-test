/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  StyledWrapper,
  StyledIcon,
  StyledButton,
  StyledButtonsWrapper,
  StyledText,
} from "./accept-modal.styled";
import CrossIcon from "../../../assets/img/cross.svg?react";

interface AcceptModalProps {
  city: string;
  setIsAcceptModalOpen: (paraams: boolean) => void;
  setAcceptModalButtonId: (params: string) => void;
}

function AcceptModal({
  city,
  setIsAcceptModalOpen,
  setAcceptModalButtonId,
}: AcceptModalProps) {
  return (
    <StyledWrapper>
      <StyledIcon>
        <CrossIcon
          onClick={() => {
            setIsAcceptModalOpen(false);
          }}
        />
      </StyledIcon>
      <StyledText>Ваш город {city}, верно?</StyledText>
      <StyledButtonsWrapper
        onClick={(e: any) => {
          setAcceptModalButtonId(e.target.id);
        }}
      >
        <StyledButton id={0} $accept={true}>
          Да
        </StyledButton>
        <StyledButton id={1} $accept={false}>
          Нет
        </StyledButton>
      </StyledButtonsWrapper>
    </StyledWrapper>
  );
}

export default AcceptModal;
