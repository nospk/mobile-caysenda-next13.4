import type { FC } from 'react';

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
	styleModal: string;
	styleModalOverlay: string;
}

const Modal: FC<ModalProps> = ({ styleModal, styleModalOverlay, isOpen, onClose, children }) => {
	const closeModal = () => {
		onClose();
	};
	return (
		<>
			{isOpen && (
				<div className={styleModalOverlay} onDrag={closeModal} onClick={closeModal}>
					<div className={styleModal} onClick={(e) => e.stopPropagation()}>
						{children}
					</div>
				</div>
			)}
		</>
	);
};

export default Modal;
