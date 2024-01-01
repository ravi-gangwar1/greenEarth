import "../style/getMembership.css"
import { useDispatch, useSelector } from "react-redux"
import { getMembershipAction } from "../actions/getMembershipAction";
function GetMembership() {


    const userState = useSelector((state) => state.loginUserReducer)
    const { currentUser } = userState;

    const dispatch = useDispatch();

    const _id = currentUser.data._id;
    const basic = "Basic";
    const standard = "Standard";
    const premium = "Premium";


    const handleMembership = (_id, membership) => {
        console.log({_id, membership})
        dispatch(getMembershipAction(_id, membership))
    }



  return (
    <div className='getMembership-page'>
        <h1>Become Member</h1>
        <div className='all-membership-div'>
            <table>
                <thead>
                    <tr>
                    <th>Memberships</th>
                    <th>Price</th>
                    <th>Duration</th>
                    <th>Benifits</th>
                    <th>Buy Now</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Basic</td>
                        <td>$10</td>
                        <td>6 Month</td>
                        <td>Free Delivery,<br/> Unlimited Service</td>
                        <td><button onClick={() => handleMembership({_id: _id, membership: basic})}>Get Membership</button></td>
                    </tr>
                    <tr>
                        <td>Standard</td>
                        <td>$15</td>
                        <td>1 year</td>
                        <td>Free Delivery,<br/> Unlimited Service</td>
                        <td><button onClick={() => handleMembership({_id: _id, membership: standard})}>Get Membership</button></td>
                    </tr>
                    <tr>
                        <td>Premium</td>
                        <td>$20</td>
                        <td>2 year</td>
                        <td>Free Delivery,<br/> Unlimited Service</td>
                        <td><button onClick={() => handleMembership({_id: _id, membership: premium})}>Get Membership</button></td>
                    </tr>
                    <tr>

                    </tr>
                    
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default GetMembership
