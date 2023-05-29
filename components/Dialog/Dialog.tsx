'use client';
import { type FC } from 'react';
import { useState } from 'react';
import Modal from '@/components/Modal';
import { IconWithLabel } from '@/components/Icon';
import styles from './Dialog.module.css';
interface Props {
	message: string;
  handleCloseModal: any;
  isOpen: boolean;
}
const Dialog: FC<Props> = ({message, handleCloseModal, isOpen}) => {
	return (
		<>
			<Modal
				isOpen={isOpen}
				styleModal={styles.modal}
				styleModalOverlay={styles.modalOverlay}
				onClose={handleCloseModal}
			>
				<span className="text-white font-bold">{message}</span>
			</Modal>
		</>
	);
};
export default Dialog;
