import likeApi from "@/api/like/likeApi";

interface IUseLike {
  handleClickLike: (postId: string | undefined) => void;
}

function useLike(): IUseLike {
  const handleClickLike = async (postId: string | undefined) => {
    try {
      const { data } = await likeApi(postId);

      const JWTExpired = "JWT expired";

      if (data.includes(JWTExpired)) {
        alert("로그인이 만료되었습니다. 재 로그인해주세요.");
        return;
      }

      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return { handleClickLike };
}

export default useLike;
