import { SyntheticEvent, useCallback, useState } from 'react';
import Modal from '../shared/modal/modal';

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onCloseHandler = (e: SyntheticEvent) => {
    if (e.currentTarget) {
      setIsOpen(false);
    }
  };

  const onToggleHandler = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const createModal = useCallback(
    ({ children }: { children: any }) => <Modal isOpen={isOpen}>{children}</Modal>,
    [isOpen],
  );

  return {
    isOpen,
    onToggleHandler,
    onCloseHandler,
    createModal,
  };
};

export default useModal;
