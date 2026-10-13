import axios from 'axios';
import {PostProps} from '../interface'
const Utils = {
    fetchData:  async() => {
    const response = axios.get('https://jsonplaceholder.typicode.com/posts');
    const data = (await response).data;
    return data.map((d:any) => {
      const singlePost:PostProps = {
        id: d.id,
        body: d.body,
        image: {
          url: `https://source.unsplash.com/collection/9948714?${d.id}`,
          alt: `${d.id} post image`
        },
        isFavourite: d.id % 3 === 0 ? true : false,
        title: d.title
      }
      return singlePost
    })
  }
}

export default Utils;