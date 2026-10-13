import Utils from '../API/utils';
import { useEffect, useState } from 'react';
import { PostProps } from './../interface';



const useFetchPosts = () => {
	const [postList, setPostList] = useState<PostProps[]>([]);
  useEffect(() => {
    let isMounted = true;
    Utils.fetchData().then(posts => {
      if(isMounted) {
        setPostList(posts)
      } 
    });
    return () => {
      isMounted = false;
    }
  }, [])

	return { postList }
}

export default useFetchPosts