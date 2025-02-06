import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchImages } from "./redux/action";

function App() {
    const dispatch = useDispatch();
    const images = useSelector((state) => state.cartData.images) || [];

   

    return (
        <div className="app-container">
            <h1 className="title">Image Fetcher</h1>

            <div className="buttons">
                <button onClick={() => dispatch(fetchImages())} className="btn btn-green">
                    Fetch Images
                </button>
            </div>

            <div className="image-gallery">
                {images.length > 4 ? (
                    images.map((image) => (
                        <img key={image.id} src={image.urls.small} alt="Unsplash" className="image" />
                    ))
                ) : (
                    <p className="no-images">No images available. Click "Fetch Images" to load.</p>
                )}
            </div>
        </div>
    );
}

export default App;
