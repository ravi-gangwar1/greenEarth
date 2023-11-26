export const addAction = (tree) => (dispatch, getState) => {
    console.log(tree, "tree")
    var bucketItem = {
        name: tree.name,
        _id: tree._id,
        image: tree.image,
        price : tree.price,
        discription: tree.discription,
        categeory: tree.categeory
    };

    dispatch({ type: "ADD_TO_CART", payload: bucketItem });

    // Save to local storage using Redux Thunk
    const updatedBucketItems = getState().bucketReducer.bucketItems;
    localStorage.setItem('cartItems', JSON.stringify(updatedBucketItems));
};
