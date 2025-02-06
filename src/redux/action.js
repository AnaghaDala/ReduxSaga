import { FETCH_IMAGES_SUCCESS } from "./constant";

// export const addToCart = (data) => {
//     return {
//         type: ADD_TO_CART,
//         data
//     };
// };

export const fetchImages = () => {
    return async (dispatch) => {
        try {
            const response = await fetch("https://api.unsplash.com/photos/random?count=20&client_id=pBkLtyn2OlpuqZaBbPheu1B5ayndgbT61odjmdzY4Jw");
            const images = await response.json();
            dispatch({
                type: FETCH_IMAGES_SUCCESS,
                payload: images
            });
        } catch (error) {
            console.error("Error fetching images:", error);
        }
    };
};
