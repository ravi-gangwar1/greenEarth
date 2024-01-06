import "../style/profileUser.css"
import { FaEdit } from "react-icons/fa";
import { useSelector } from "react-redux"


function UserProfile() {
    const userState = useSelector(state => state.loginUserReducer);
    const {currentUser} = userState;
    console.log(currentUser)


    function handleProfile(){
      alert("Edit profile will be added soon!!!!!")
      return;
    }

  return (
    <div className="profile-page">
      <div className="profile-div"> 
        <img className="profile-img" src="https://i.pinimg.com/564x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg" alt="user profile"/>
            <div className="user-profile-details">
                <span className="profile-spans">Name:<h3>{currentUser.data.name}</h3></span>
                <span className="profile-spans">Role:<h3>{currentUser.data.isAdmin ? "Admin" : currentUser.data.isWorker ? "Employee" : "User"}</h3></span>
                <span className="profile-spans">Membership:<h3>{currentUser.data.isMember ? currentUser.data.isMembership : "No"}</h3></span>
                <span className="profile-spans">Date of Birth: <h3></h3></span>
                <span className="profile-spans">Email: <h3>{currentUser.data.email}</h3></span>
                <span className="profile-spans">Phone: <h3></h3></span>  
                <span className="profile-spans">Address: <h3></h3></span>
            </div>

        
        <button className="edit-btn" onClick={()=> handleProfile()}><FaEdit/></button>        
      </div>
    </div>
  )
}

export default UserProfile
