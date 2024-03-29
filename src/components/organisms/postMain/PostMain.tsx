import PostTitle from "@/components/molecules/postTitle/PostTitle";
import styles from "./PostMain.module.scss";
import PostContent from "@/components/molecules/postContent/PostContent";
import PostReaction from "../postReaction/PostReaction";
import Comments from "../comments/Comments";

interface IProps {
  post: IPost;
  comments: IPost[];
}

function PostMain({ post, comments }: IProps): JSX.Element {
  return (
    <>
      <div className={styles.container}>
        <PostTitle post={post} />
        <PostContent post={post} />
        <PostReaction post={post} />
        <Comments comments={comments} />
      </div>
    </>
  );
}

export default PostMain;
