import { StyledModal } from './modal.style';

function Modal({ children, isOpen }: { children: any; isOpen: boolean }) {
  return isOpen ? <StyledModal>{children}</StyledModal> : null;
}

export default Modal;
