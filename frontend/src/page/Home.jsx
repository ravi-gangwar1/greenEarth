import { useEffect, useState } from 'react';
import "../style/home.css"
import SearchBar from '../components/SearchBar';
import SearchList from '../components/homePage/SearchList';
import ListAllTress from '../components/homePage/ListAllTrees';
import { useSelector } from 'react-redux';


function Home() {
  const userState = useSelector(state => state.loginUserReducer);
  const {currentUser} = userState;
  const [searchTerm, setSearchTerm] = useState('')
  const [indoor, setIndoor] = useState(false);
  const [outdoor, setOutdoor] = useState(false);
  
  useEffect(() => {
    if(!currentUser) {
      window.location.href = '/login';
    }
  }, [])

  return (
    <div className='home'>
        <>
          <div className='search-div'>
           <SearchBar updateSearchTerm={setSearchTerm}/>
            <div className='cetageory'>
              <span>Cetageory:</span>
              <label htmlFor='fruit'>Indoor:</label>
              <input type='radio' name='sort' onChange={()=> setIndoor(!indoor)}/>
              <label htmlFor='fruit'>Outdoor:</label>
              <input type='radio' name='sort' onChange={()=> setOutdoor(!outdoor)}/>
            </div>
          </div>
          <div className='card-div'>
            {
              searchTerm.length > 0 ? <SearchList searchTerm={searchTerm}/> : <ListAllTress indoor={indoor} outdoor={outdoor}/>
            }

          </div>
          {
            indoor && indoor === true ? <div className='indoor-trees'>

            </div> : 
            outdoor && outdoor === true ? <div className='outdoor-trees'> 

            </div> : ""
          }
        </>
      </div>
  );
}

export default Home;
