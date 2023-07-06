
import React from 'react';
import styles from './Dialog.module.css';
import cx from 'clsx';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { BiCross } from 'react-icons/bi';

type DialogProps = {
  open: boolean;
  onOpenChange: () => void;
  children: React.ReactNode;
};

export function Dialog({ children, open, onOpenChange }: DialogProps) {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Overlay className={styles.overlay} />
      {children}
    </DialogPrimitive.Root>
  );
}

export const DialogContent = React.forwardRef<
  HTMLDivElement,
  { children: React.ReactNode }
>(function DialogContent({ children, ...props }, forwardedRef) {
  return (
    <DialogPrimitive.Content
      {...props}
      ref={forwardedRef}
      className={styles.content}
    >
      <DialogPrimitive.Close
        className={cx(styles.resetButton, styles.closeButton)}
      >
        <BiCross />
      </DialogPrimitive.Close>
      {children}
    </DialogPrimitive.Content>
  );
});

export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogClose = DialogPrimitive.Close;
