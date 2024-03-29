import likeApi from "@/api/like/likeApi";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

interface IUseLike {
  handleClickLike: (postId: string | undefined) => void;
  handleLike: () => void;
}

interface IProps {
  setIsLiked: Dispatch<SetStateAction<boolean>>;
  isLiked: boolean;
  post?: IPost;
}

function useLike({ setIsLiked, isLiked, post }: IProps): IUseLike {
  const router = useRouter();
  const handleClickLike = async (postId: string | undefined) => {
    try {
      const { data } = await likeApi(postId);
      router.refresh();

      const JWTExpired = "JWT expired";

      if (data.includes(JWTExpired)) {
        alert("로그인이 만료되었습니다. 재 로그인해주세요.");
        return;
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleLike = () => {
    try {
      setIsLiked(!isLiked);
      handleClickLike(String(post?.id));
    } catch (error) {
      setIsLiked(isLiked);
    }
  };

  return { handleClickLike, handleLike };
}

export default useLike;
