import { useEffect, useState } from 'react';
import "../style/home.css"
import SearchBar from '../components/SearchBar';
import SearchList from '../components/homePage/SearchList';
import ListAllTress from '../components/homePage/ListAllTrees';
import { useSelector } from 'react-redux';
import axios from 'axios';

function Home() {
  const [searchTerm, setSearchTerm] = useState('')

  const userState = useSelector(state => state.loginUserReducer);
  const {currentUser} = userState;


  async function getLocation() {
    const userId = currentUser?.data?._id;
    const name = currentUser?.data?.name;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async(position) => {
          const { latitude, longitude } = position.coords;
          console.log('Latitude:', latitude);
          console.log('Longitude:', longitude);
          await axios.post(`${import.meta.env.VITE_BACKED_DOMAIN}/api/auth/user-location`, {userId, name,  latitude, longitude });
        },
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }

  useEffect(()=> {
    if(currentUser){
      getLocation();
    }
  }, [currentUser])

  useEffect(()=> {
    if(!currentUser) {
      window.location.href = '/login';
    }
  })
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
