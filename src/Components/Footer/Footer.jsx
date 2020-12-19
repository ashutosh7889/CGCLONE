import React from "react";
import Logo from '../../images/Texe-logo.png';



const Footer = () =>{
    return(
        <>
        <div className="container-fluid">
            <div className="container">
                <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                            <img src={Logo} alt="" className="img-fluid" width="100%"/>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                            <div>CareerGrads</div>
                            <div>
                                <ul>
                                    <li><a href="">About US</a></li>
                                    <li><a href="">Blogs</a></li>
                                    <li><a href=""> Privacy Policy</a></li>
                                    <li><a href="">Terms & Conditions</a></li>
                                    <li><a href="">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                            <div>Quick Links</div>
                            <div>
                                <ul>
                                    <li><a href="">Courses</a></li>
                                    <li><a href="">Tutorials</a></li>
                                    <li><a href="">Campus Grads</a></li>
                                    <li><a href="">Internship/Job</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                            <div>
                                <div>Contact Us</div>
                                <div>Email: info@Careergrads.com</div>
                            </div>
                            <div>
                                <div>Follow Us</div>
                                <div>
                                    <ul>
                                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                        {/* <li><a href="#"><i class="fa fa-google"></i></a></li> */}
                                        <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                        <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6 col-12">
                    <div>Copyright &copy 2020 All right reserved | This template is made with by <a href="">Colorlib</a></div>
                </div>
                <div className="col-sm-6 col-12">
                    <ul>
                        <li>Copyright Notification</li>
                        <li>Terms of Use</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer;