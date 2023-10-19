"use client";
import Image from "next/image";
import AccountService from "@/services/Account.service";
import styles from "./styles.module.css";
import { openDialog } from "@/redux/features/dialog/dialog.slice";
import { useAppDispatch } from "@/redux/hooks";
import { useRouter } from "next/navigation";

const AvatarPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  //Will get avatar and name from info user when do login
  const avatar: string = "/avatarzalo.jpg";
  const name: string = "Nospk";

  const handleAvatarChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file: File | undefined = event.target.files?.[0];
    if (file) {
      // Thực hiện xử lý tải lên hoặc xử lý ảnh ở đây
      // Ví dụ: Tải lên ảnh và nhận đường dẫn URL
      let result = await AccountService.ChangeAvatar(file);
      if (result.status == 200) {
        dispatch(openDialog({ message: result.message }));
        router.push("/setting");
      } else {
        dispatch(openDialog({ message: result.message }));
      }
    }
  };

  return (
    <div>
      <form className={styles.form}>
        <h1 className={styles.name}>{name}</h1>
        {avatar ? (
          <Image
            src={avatar}
            alt="Avatar"
            width={100}
            height={100}
            className={styles.avatar}
            priority
          />
        ) : (
          <div className={styles.avatar_default}></div>
        )}
        <label className={styles.label}>
          <input
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            className={styles.input}
          />
          <span className={styles.button_text}>Chọn Hình Đại Diện</span>
        </label>
      </form>
    </div>
  );
};

export default AvatarPage;
