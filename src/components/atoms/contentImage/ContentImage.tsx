import styles from "./ContentImage.module.scss";
import Image from "next/image";

function ContentImage(): JSX.Element {
  return (
    <>
      <div className={styles.container}>
        {/* <Image alt="content image" src={""} /> */}
      </div>
    </>
  );
}

export default ContentImage;
