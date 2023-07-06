import { ChangeEvent } from 'react';
import styles from './AvatarUploadTrigger.module.css';
import { HiOutlinePencilSquare } from "react-icons/hi2";

type Props = {
  onNewSelectedFile: (imageResult: string) => void;
};
function AvatarUploadTrigger({ onNewSelectedFile }: Props) {
  const onSelectFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      // on load the reader.result is always an image
      reader.addEventListener('load', () => {
        onNewSelectedFile(reader.result as string);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  return (
    <label className={styles.container}>
      <input
        type="file"
        accept="image/*"
        onChange={onSelectFile}
        onClick={e => {
          e.currentTarget.value = "";
        }}
      />
      <HiOutlinePencilSquare />
    </label>
  );
}
export default AvatarUploadTrigger;
