import About from "@/Pages/About";
import Contact from "@/Pages/Contact";
import Home from "@/Pages/Home";
import { Link } from "@inertiajs/react";
import React from "react";

export default function Header() {
    return (
        <>
            {/*<!-- header top area start -->*/}
            <div className="rr-header-1-top rr-header-1-shap d-none d-xl-block grey-bg p-relative">
                <div className="container custom-container-1 z-index-3">
                    <div className="rr-header-1-before">
                        <div className="row align-items-center">
                            <div className="col-xxl-5 col-xl-6 col-lg-6">
                                <div className="rr-header-1-top-info text-end">
                                    <ul className="d-flex align-items-center">
                                        <li>
                                            <Link to="mailto:support@gmail.com ">
                                                <span>
                                                    <i className="fa-solid fa-envelope"></i>
                                                </span>
                                                support@gmail.com{" "}
                                            </Link>
                                        </li>
                                        <li className="ml-50">
                                            <b>
                                                <span>
                                                    <i className="fa-solid fa-clock"></i>
                                                </span>
                                                Sun - Fri :6.00am - 02.00pm
                                            </b>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xxl-3 col-xl-3  col-lg-1 d-none d-xxl-block">
                                <div className="rr-header-1-top-btn-text">
                                    <span>We are open hours staff!</span>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-xl-6 col-lg-5">
                                <div className="rr-header-2-top-info d-flex align-items-center justify-content-end text-end">
                                    <div className="rr-header-2-lang rr-header-lang-main d-none d-md-block ml-60">
                                        <select style={{ display: "none" }}>
                                            <option>English</option>
                                            <option>Bangla</option>
                                            <option>French</option>
                                        </select>
                                        <div
                                            className="nice-select"
                                            tabIndex="0"
                                        >
                                            <span className="current">
                                                <img
                                                    src="assets/img/header/avata.png"
                                                    alt="img"
                                                />{" "}
                                                English
                                            </span>
                                            <ul className="list z-index-2">
                                                <li
                                                    data-value="English"
                                                    className="option selected focus"
                                                >
                                                    English
                                                </li>
                                                <li
                                                    data-value="Bangla"
                                                    className="option"
                                                >
                                                    Bangla
                                                </li>
                                                <li
                                                    data-value="French"
                                                    className="option"
                                                >
                                                    French
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*<!-- header top area end -->*/}

            {/*<!-- header main area start -->*/}
            <section className="rr-header-1-main d-none d-xl-block">
                <div className="container custom-container-1">
                    <div className="row align-items-center">
                        <div className="col-xl-4">
                            <div className="rr-header-main-social d-flex align-items-center">
                                <h4 className="rr-header-1-title">
                                    Follow Social:
                                </h4>
                                <div className="rr-header-1-social ml-20">
                                    <Link to="#">
                                        <i className="fa-brands fa-facebook-f"></i>
                                    </Link>
                                    <Link to="#">
                                        <i className="fa-brands fa-instagram"></i>
                                    </Link>
                                    <Link to="#">
                                        <i className="fa-brands fa-pinterest-p"></i>
                                    </Link>
                                    <Link to="#">
                                        <i className="fa-brands fa-twitter"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="rr-herader-1-logo text-center">
                                <Link to="index.html">
                                    <img
                                        src="assets/img/logo/logo-black.png"
                                        alt="img"
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="rr-header-1-contat d-flex align-items-center justify-content-end">
                                <div className="rr-header-1-contat-icon p-relative">
                                    <span>
                                        <i className="fa-solid fa-phone"></i>
                                    </span>
                                </div>
                                <div className="rr-header-1-contat-text ml-20">
                                    <h4>Appointment Call</h4>
                                    <b>
                                        <Link to="tel:+99584554">
                                            24/7 – quick and easy
                                        </Link>
                                    </b>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*<!-- header main area end -->*/}

            
            <header className="rr-header-height z-index-3">
                {/*<!-- header area start -->*/}
                <div id="header-sticky" className="rr-header-area">
                    <div className="container custom-container-1 rr-header-bg">
                        <div className="row align-items-center">
                            <div className="col-xl-7 col-lg-7 col-md-6 col-6">
                                <div className="rr-header-1-logo d-xl-none">
                                    <img
                                        src="assets/img/logo/logo-black.png"
                                        alt="img"
                                    />
                                </div>
                                <div className="rr-header-main-menu rr-header-menu ml-30  d-none d-xl-block">
                                    <nav className="rr-main-menu-content">
                                        <ul>
                                            <li className="">
                                                <Link href={route('home')}>Home</Link>
                                            </li>
                                            <li>
                                                <Link href={route('about')}>
                                                    about us
                                                </Link>
                                            </li>
                                            <li className="has-dropdown">
                                                <Link to="service-details.html">
                                                    Service
                                                </Link>
                                                <ul className="submenu rr-submenu">
                                                    <li>
                                                        <Link to="service-details.html">
                                                            Service
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="service-details.html">
                                                            Service Details
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="has-dropdown">
                                                <Link to="#">Pages</Link>
                                                <ul className="submenu rr-submenu">
                                                    <li>
                                                        <Link to="team.html">
                                                            team
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="team-details.html">
                                                            team details
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="pricing.html">
                                                            pricing{" "}
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="project.html">
                                                            project
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="project-details.html">
                                                            project-details
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="doctors.html">
                                                            doctors
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="doctor-details.html">
                                                            doctors-details
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="404.html">
                                                            error
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="has-dropdown">
                                                <Link to="blog.html">Blog</Link>
                                                <ul className="submenu rr-submenu">
                                                    <li>
                                                        <Link to="blog.html">
                                                            Blog Grid
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="blog-sidebar.html">
                                                            Blog Standard
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="blog-details.html">
                                                            Blog Details
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link href={route('contact')}>
                                                    Contact
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-5 col-md-6 col-6">
                                <div className="rr-header-right d-flex align-items-center justify-content-end">
                                    <div className="rr-header-icon d-none rr-header-2-search d-xl-block">
                                        <button className="search-open-btn">
                                            <i className="fa-solid fa-magnifying-glass"></i>
                                        </button>
                                    </div>
                                    <div className="rr-header-1-contat d-none d-md-block ml-30">
                                        <Link
                                            className="rr-btn-border"
                                            href={ route('frontend_appointment.create') }
                                        >
                                            <span>
                                                Make Appointment{" "}
                                                <i className="fa-sharp fa-solid fa-plus"></i>
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="rr-header-bar d-xl-none">
                                        <button className="rr-menu-bar">
                                            <i className="fa-solid fa-bars"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<!-- header area end -->*/}
            </header>
        </>
    );
}
