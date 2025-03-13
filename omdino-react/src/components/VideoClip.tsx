export const VideoClip = () => {
    return (
        <>
            <div className="container">
                <div className="d-md-flex d-block items-center justify-around p-3 bg-f5 my-md-5 my-2 rounded-1">
                    <div className="col-md-5 col-12 bg-white rounded-1 overflow-hidden">
                        <div className="ratio ratio-1x1">
                        <div className="ratio ratio-1x1">
                        <video width="600" height="400" controls muted poster="assets/image/covervideo.jpg">
                            <source src="assets/video/ptv.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                            </video>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-12 d-flex flex-column justify-content-center align-items-center">
                        <p className="style-17-lh35 px-2 pt-md-0 pt-1">
                            Discover a world of style at DAYANSHOP! From trendy women’s
                             clothing to stylish men’s wear and must-have accessories, we bring you the latest fashion
                              at unbeatable prices. Enjoy hassle-free shopping, exclusive discounts, and fast delivery 
                              right to your doorstep. Shop now and elevate your wardrobe with just a click! 
                        </p>
                        <button className="btn public-btn bg-white mt-md-3 mt-1">More</button>
                    </div>
                </div>
            </div>
        </>
    );
}