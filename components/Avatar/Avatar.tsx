'use client';
import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/Avatar/Dialog';
import AvatarEditor from '@/components/Avatar/AvatarEditor';
import AvatarUploadTrigger from '@/components/Avatar/AvatarUploadTrigger';

function Avatar() {
  const [file, setFile] = useState('');
  const [open, setOpen] = useState(false);

  const onFinishUpload = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog open={open} onOpenChange={() => setOpen(!open)}>
        <DialogContent>
          <AvatarEditor sourceImg={file} onFinishUpload={onFinishUpload} />
        </DialogContent>
      </Dialog>

      <AvatarUploadTrigger
        onNewSelectedFile={file => {
          setFile(file);
          setOpen(true);
        }}
      />
    </>
  );
}

export default Avatar;
