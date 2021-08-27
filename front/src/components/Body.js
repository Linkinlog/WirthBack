import React from 'react'

export const Body = () => {
    return (
        <div className="container">
            <div className="landing-link">
                <div className="container text-center">
                    <h1 className="welcome">Welcome</h1>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-9 offset-md-1 text-center welcome-message">
                    <h6 className="text-start ">Hi! We are the Wirth Family!</h6>
                    <p className="text-start mt-3">For half a decade we have been learning and growing in the art of modern homesteading! We strive to bring you along in our journey of gardening, parenting, natural living, and of course suburban homesteading!  We live our life for the glory of God and for the health of our family. Our heart’s desire is to bring you authentic content, including hard-learned lessons and hearty, belly laughs; and we choose to take the good ‘ole front porch approach to do so! So come on in, kick off your shoes, and stay awhile—the coffee’s always on! </p>
                    <div className=" offset-md-5 button btn btn-blog">Check out our blog!</div>
                </div>
            </div>
            <div className="row mt-5 welcome-message">
                <div className="col-md-6 offset-md-1">
                    <h2 className="glad">We are so glad you're here!</h2>
                </div>
                    <div className="col-md-10 offset-md-1 border-top border-bottom">
                        <p className="border-start border-2 border-danger ps-2">“The true way to live is to enjoy every moment as it passes, and surely it is in the everyday things around us that the beauty of life lies.”<br/> -Laura Ingalls Wilder</p>
                        <button className="btn"><i className="fab fa-instagram"></i></button>
                        <button className="btn"><i className="fab fa-facebook"></i></button>
                        <button className="btn"><i className="fas fa-envelope-open-text"></i></button>
                    </div>
            </div>
            <p className="text-muted mt-5 pt-2">Powered by Coffee</p>
        </div>
    )
}
