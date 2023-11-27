export const addAction = (tree, quantity) => (dispatch, getState) => {
    quantity = quantity == null ? 1 : quantity;
    var bucketItem = {
        name: tree.name,
        _id: tree._id,
        imageUrl: tree.imageUrl,
        price: tree.price,
        discription: tree.discription,
        categeory: tree.categeory,
        quantity: quantity
    };
    
    dispatch({ type: "ADD_TO_BUCKET", payload: bucketItem });

    // Use getState() to get the updated state
    const updatedBucketItems = getState().bucketReducer.bucketItems;

    // Save to local storage using the updated state
    localStorage.setItem('bucketItems', JSON.stringify(updatedBucketItems));
};
