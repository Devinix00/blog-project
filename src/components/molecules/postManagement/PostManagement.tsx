import PostLink from "../postLink/PostLink";
import styles from "./PostManagement.module.scss";
import PageTitle from "@/components/atoms/pageTitle/PageTitle";

function PostManagement(): JSX.Element {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <PageTitle text="글 관리" />
        </div>
        <PostLink props="글 쓰기" type="user" />
      </div>
    </>
  );
}

export default PostManagement;
