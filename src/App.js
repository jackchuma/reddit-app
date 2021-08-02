import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadPosts } from './components/Posts/postsSlice';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  const dispatch = useDispatch();
  const { isLoading, hasError } = useSelector(state => state.posts);

  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  const onTryAgainHandler = () => {
    dispatch(loadPosts());
  };

  if (isLoading) {
    return (
      <div className='App'>
        <Header />
        <h1 style={{marginTop: '60px'}} >Loading...</h1>
      </div>
    );
  };

  if (hasError) {
    return (
      <main>
        <h1>An error has occured.</h1>
        <button onClick={onTryAgainHandler}>Try Again</button>
      </main>
    );
  };

  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
