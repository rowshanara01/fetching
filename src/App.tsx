import PostList from './Components/PostList/PostList';
import Filter from './Components/Filter/Filter';
import useFetchPosts from './CustomHooks/useFetchPosts';
import './App.css';
import { useState } from 'react';



function App() {
  const { postList } = useFetchPosts();
  const [filteredValue, setFilteredValue] = useState<string>('any')

  return (
    <div className="App">
      <Filter setFilteredValue={setFilteredValue} />
      <PostList 
        postList={
            filteredValue === 'any' ? 
              postList : filteredValue === 'favourite' ? 
                postList.filter(post => post.isFavourite) : 
                postList.filter(post => !post.isFavourite) 
            }
      />
    </div>
  );
}

export default App;
