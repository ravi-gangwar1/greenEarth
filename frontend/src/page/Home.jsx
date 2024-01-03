import { useEffect, useState } from 'react';
import "../style/home.css"
import SearchBar from '../components/SearchBar';
import SearchList from '../components/homePage/SearchList';
import ListAllTress from '../components/homePage/ListAllTrees';
import { useSelector } from 'react-redux';

function Home() {
  const [searchTerm, setSearchTerm] = useState('')

  // const userState = useSelector(state => state.loginUserReducer);
  // const {currentUser} = userState;

  // useEffect(()=> {
  //   if(!currentUser) {
  //     window.location.href = '/login';
  //   }
  // })
  return (
    <div className='home'>
        <>
          <div className='search-div'>
           <SearchBar updateSearchTerm={setSearchTerm}/>
            <div className='cetageory'>
              <span>Cetageory:</span>
              <label htmlFor='fruit'>Indoor:</label>
              <input type='checkbox' name='sort' />
              <label htmlFor='fruit'>Outdoor:</label>
              <input type='checkbox' name='sort' />
            </div>
          </div>
          <div className='card-div'>
            {
              searchTerm.length > 0 ? <SearchList searchTerm={searchTerm}/> : <ListAllTress/>
            }

          </div>
        </>
      </div>
  );
}

export default Home;
