export const addAction = (tree) => (dispatch, getState) => {
    console.log(tree, "tree");
    var bucketItem = {
        name: tree.name,
        _id: tree._id,
        image: tree.image,
        price: tree.price,
        discription: tree.discription,
        categeory: tree.categeory
    };

    dispatch({ type: "ADD_TO_BUCKET", payload: bucketItem });

    // Use getState() to get the updated state
    const updatedBucketItems = getState().bucketReducer.bucketItems;

    // Save to local storage using the updated state
    localStorage.setItem('bucketItems', JSON.stringify(updatedBucketItems));
};
