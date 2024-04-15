import React from 'react';

const Header = () => {
    return (
        <>
            <nav className='nav-header'>
                <div className='container'>
                    <a href="" className='navbar-brand'>
                        <img src="https://www.tooplate.com/templates/2134_gotto_job/images/logo.png" alt="" className='logo-img' />
                        <div className='header-name'>
                            <strong className='logo-text'>Gotto</strong>
                            <small className='logo-slogan'>ONLINE JOB PORTAL</small>
                        </div>
                    </a>

                    <div className='navbar-collapse'>
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <a href="" className='nav-link homepage'>Homepage</a>
                            </li>

                            <li className='nav-item'>
                                <a href="" className='nav-link'>About Gotto</a>
                            </li>

                            <li className='nav-item'>
                                <a href="" className='nav-link'>Pages </a>
                            </li>

                            <li className='nav-item'>
                                <a href="" className='nav-link'>Contact</a>
                            </li>

                            <li className='nav-item register'>
                                <a href="" className='nav-link'>Register</a>
                            </li>

                            <li className='nav-item'>
                                <a href="" className='nav-link login-btn'>Login</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>


            <main className='main-section'>

                <section className='hero-section'>
                    <div className='section-overlay'>
                    </div>
                    <div className='container'>
                        <div className='row '>
                            <div className='container-col-1'>
                                <div className='hero-section-text'>
                                    <h6 className='dream-job'>Are you looking for your dream job?</h6>
                                    <h1 className='hero-title'>Online Platform.<br></br>Best Job portal</h1>
                                    <a href="" className='custom-btn custom-border-btn btn'>Browse Categories</a>
                                </div>
                            </div>

                            <div className='container-col-2'>
                                <form className='custom-form hero-form'>
                                    <h3 className='search-dream-job'>Search your dream job</h3>
                                    <div className='input-section'>
                                        <div className='input-group-1'>
                                            <div className='input-group'>
                                                <span className='input-group-text'>
                                                    <img width="15" height="15" src="https://img.icons8.com/ios/50/user--v1.png" alt="user--v1" />
                                                </span>
                                                <input type='text' className='input-control' placeholder='Job Title' />
                                            </div>
                                        </div>

                                        <div className='input-group-1'>
                                            <div className='input-group'>
                                                <span className='input-group-text'>
                                                    <img width="15" height="15" src="https://img.icons8.com/ios/50/marker--v1.png" alt="marker--v1" />
                                                </span>
                                                <input type='text' className='input-control' placeholder='Location' />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='form-btn'>
                                        <button className='form-end-btn'>Find a Job</button>
                                    </div>

                                    <div className='form-end-container'>
                                        <div className='end-container'>
                                            <span className='popular'>Popular Keywords</span>
                                            <div className='badge-container'>
                                                <a href="" className='badge'>Web Design</a>
                                                <a href="" className='badge'>Marketing</a>
                                                <a href="" className='badge'>Customer Support</a>
                                            </div>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='section-padding'>
                    <div className='section-container'>
                        <div className='container-row'>
                            <div className='container-content'>
                                <h2>Browse By Categories </h2>
                            </div>


                            <div className='container-container-col'>
                                <div className='categories-block'>
                                    <a href="" className='categories-block-anchor'>
                                        <img width="35" height="35" src="https://img.icons8.com/windows/32/bank-card-back-side--v1.png" alt="bank-card-back-side--v1" className='category-icon' />
                                        <small className='categories-block-title'>Web Design</small>

                                        <div className='category-block-number'>
                                            <span className='category-block-number-text'>320</span>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className='container-container-col'>
                                <div className='categories-block'>
                                    <a href="" className='categories-block-anchor'>
                                        <img width="35" height="35" src="https://img.icons8.com/ios-filled/50/000000/twitch.png" alt="twitch" className='category-icon' />
                                        <small className='categories-block-title'>Marketing</small>

                                        <div className='category-block-number'>
                                            <span className='category-block-number-text'>180</span>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className='container-container-col'>
                                <div className='categories-block'>
                                    <a href="" className='categories-block-anchor'>
                                        <img width="35" height="35" src="https://img.icons8.com/parakeet-line/48/circled-play.png" alt="circled-play" className='category-icon' />
                                        <small className='categories-block-title'>Video</small>

                                        <div className='category-block-number'>
                                            <span className='category-block-number-text'>340</span>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className='container-container-col'>
                                <div className='categories-block'>
                                    <a href="" className='categories-block-anchor'>
                                        <img width="35" height="35" src="https://img.icons8.com/ios/50/internet--v1.png" alt="internet--v1"
                                            className='category-icon' />
                                        <small className='categories-block-title'>Websites</small>

                                        <div className='category-block-number'>
                                            <span className='category-block-number-text'>140</span>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className='container-container-col'>
                                <div className='categories-block'>
                                    <a href="" className='categories-block-anchor'>
                                        <img width="35" height="35" src="https://img.icons8.com/ios/50/000000/user--v1.png" alt="user--v1" className='category-icon' />
                                        <small className='categories-block-title'>Customer Support</small>

                                        <div className='category-block-number'>
                                            <span className='category-block-number-text'>84</span>
                                        </div>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className='about-section'>
                    <div className='container'>
                        <div className='row'>
                            <div className='image-section'>
                                <div className='about-image-wrap custom-border-radius-start'>
                                    <img src="https://www.tooplate.com/templates/2134_gotto_job/images/professional-asian-businesswoman-gray-blazer.jpg" alt="" className='about-image custom-border-radius-start img-fluid' />
                                    <div className='about-info'>
                                        <h4 className='julia'>Julia Ward</h4>
                                        <p className='investor'>Investor</p>
                                    </div>
                                </div>
                            </div>

                            <div className='image-section-2'>
                                <div className='custom-text-block'>
                                    <h2 className='introduction'>Introduction Gotto</h2>
                                    <p className='introduction-paragraph'>Gotto Job is a free website template for job portals. This layout is based on Bootstrap 5 CSS framework. Thank you for visiting <a href="">Tooplate website.</a> Images are from <a href="">FreePik </a> website.</p>

                                    <div className='custom-border-btn-wrap'>
                                        <a href="" className='custom-btn custom-border-btn btn'>Get to know us</a>
                                        <a href="" className='custom-link smoothscroll'>Explore Jobs</a>
                                    </div>
                                </div>
                            </div>

                            <div className='image-section'>
                                <div className='instagram-block'>
                                    <img src="https://www.tooplate.com/templates/2134_gotto_job/images/horizontal-shot-happy-mixed-race-females.jpg" alt="" className='about-image custom-border-radius-start img-fluid' />
                                    <div className='instagram-block-text'>
                                        <a href="" className='insta-custom-btn btn'><img width="15" height="15" src="https://img.icons8.com/ios/50/ffffff/instagram-new--v1.png" alt="instagram-new--v1" className='insta-gotto' />@gotto</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='job-section job-featured-section section-padding'>
                    <div className='job-container'>
                        <div className='row'>
                            <div className='job-section-row'>
                                <h2 className='featured-job'>Featured job</h2>
                                <p className='job-pehra'>
                                    <strong className='openign-jobs'>Over 10k opening jobs </strong>
                                    Feel free to download and use our free HTML <br></br> templates from Tooplate website.
                                </p>
                            </div>

                            <div className='content-job'>

                                <div className='job-thumb'>
                                    <div className='job-image-wrap'>
                                        <img src="https://www.tooplate.com/templates/2134_gotto_job/images/logos/google.png" alt="" className='job-image img-fluid' />
                                    </div>

                                    <div className='job-body'>
                                        <div className='job-body-content'>
                                            <h4 className='job-title'>
                                                <a href="" className='job-title-link'>Technical Lead</a>
                                            </h4>
                                            <div className='job-details'>
                                                <p className='job-location'><img width="20" height="20" src="https://img.icons8.com/ios/50/marker--v1.png" alt="marker--v1" />Kuala, Malaysia</p>
                                                <p className='job-date'> <img width="20" height="20" src="https://img.icons8.com/windows/32/clock--v1.png" alt="clock--v1" /> 10 Hours ago</p>
                                                <p className='job-price'> <img width="20" height="20" src="https://img.icons8.com/windows/32/money-bill.png" alt="money-bill" /> $20k</p>
                                                <div className='job-end-details'>
                                                    <p> <a href="" className='badge badge-level'>Internship</a></p>
                                                    <p> <a href="" className='badge'>Freelance</a></p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='job-section-btn-wrap'>
                                            <a href="" className='apply-custom-btn btn'>Apply now</a>
                                        </div>
                                    </div>
                                </div>


                                <div className='job-thumb job-thumb-shadow'>
                                    <div className='job-image-wrap'>
                                        <img src="https://img.icons8.com/ios-filled/50/mac-os.png" alt="mac-os"
                                            className='job-image img-fluid' />
                                    </div>

                                    <div className='job-body'>
                                        <div className='job-body-content'>
                                            <h4 className='job-title'>
                                                <a href="" className='job-title-link'>Business Director</a>
                                            </h4>
                                            <div className='job-details'>
                                                <p className='job-location'><img width="20" height="20" src="https://img.icons8.com/ios/50/marker--v1.png" alt="marker--v1" />California, USA</p>
                                                <p className='job-date'> <img width="20" height="20" src="https://img.icons8.com/windows/32/clock--v1.png" alt="clock--v1" /> 1 day ago</p>
                                                <p className='job-price'> <img width="20" height="20" src="https://img.icons8.com/windows/32/money-bill.png" alt="money-bill" /> $90k</p>
                                                <div className='job-end-details'>
                                                    <p> <a href="" className='badge badge-level'>Senior</a></p>
                                                    <p> <a href="" className='badge'>Full Time</a></p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='job-section-btn-wrap'>
                                            <a href="" className='apply-custom-btn btn'>Apply now</a>
                                        </div>
                                    </div>
                                </div>

                                <div className='job-thumb'>
                                    <div className='job-image-wrap'>
                                        <img src="https://img.icons8.com/fluency/48/meta.png" alt="meta" className='job-image img-fluid' />
                                    </div>

                                    <div className='job-body'>
                                        <div className='job-body-content'>
                                            <h4 className='job-title'>
                                                <a href="" className='job-title-link'>HR Manager</a>
                                            </h4>
                                            <div className='job-details'>
                                                <p className='job-location'><img width="20" height="20" src="https://img.icons8.com/ios/50/marker--v1.png" alt="marker--v1" />Tower , Paris</p>
                                                <p className='job-date'> <img width="20" height="20" src="https://img.icons8.com/windows/32/clock--v1.png" alt="clock--v1" /> 22 Hours ago</p>
                                                <p className='job-price'> <img width="20" height="20" src="https://img.icons8.com/windows/32/money-bill.png" alt="money-bill" /> $50k</p>
                                                <div className='job-end-details'>
                                                    <p> <a href="" className='badge badge-level'>Junior</a></p>
                                                    <p> <a href="" className='badge'>Contract</a></p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='job-section-btn-wrap'>
                                            <a href="" className='apply-custom-btn btn'>Apply now</a>
                                        </div>
                                    </div>
                                </div>

                                <div className='job-thumb job-thumb-shadow'>
                                    <div className='job-image-wrap'>
                                        <img src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/external-slack-an-online-instant-messaging-and-collaboration-system-logo-shadow-tal-revivo.png" alt="external-slack-an-online-instant-messaging-and-collaboration-system-logo-shadow-tal-revivo"
                                            className='job-image img-fluid' />
                                    </div>

                                    <div className='job-body'>
                                        <div className='job-body-content'>
                                            <h4 className='job-title'>
                                                <a href="" className='job-title-link'>Dev Ops</a>
                                            </h4>
                                            <div className='job-details'>
                                                <p className='job-location'><img width="20" height="20" src="https://img.icons8.com/ios/50/marker--v1.png" alt="marker--v1" />Bangkok, Thailand</p>
                                                <p className='job-date'> <img width="20" height="20" src="https://img.icons8.com/windows/32/clock--v1.png" alt="clock--v1" /> 40 minutes ago</p>
                                                <p className='job-price'> <img width="20" height="20" src="https://img.icons8.com/windows/32/money-bill.png" alt="money-bill" /> $75k - 80k</p>
                                                <div className='job-end-details'>
                                                    <p> <a href="" className='badge badge-level'>Senior</a></p>
                                                    <p> <a href="" className='badge'>Part Time</a></p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='job-section-btn-wrap'>
                                            <a href="" className='apply-custom-btn btn'>Apply now</a>
                                        </div>
                                    </div>
                                </div>

                                <div className='job-thumb'>
                                    <div className='job-image-wrap'>
                                        <img src="https://img.icons8.com/color/48/market-square.png" alt="market-square" className='job-image img-fluid' />

                                    </div>

                                    <div className='job-body'>
                                        <div className='job-body-content'>
                                            <h4 className='job-title'>
                                                <a href="" className='job-title-link'>UX Designer</a>
                                            </h4>
                                            <div className='job-details'>
                                                <p className='job-location'><img width="20" height="20" src="https://img.icons8.com/ios/50/marker--v1.png" alt="marker--v1" /> Bangkok, Thailand</p>
                                                <p className='job-date'> <img width="20" height="20" src="https://img.icons8.com/windows/32/clock--v1.png" alt="clock--v1" /> 2 hours ago</p>
                                                <p className='job-price'> <img width="20" height="20" src="https://img.icons8.com/windows/32/money-bill.png" alt="money-bill" /> $100k</p>
                                                <div className='job-end-details'>
                                                    <p> <a href="" className='badge badge-level'>Entry</a></p>
                                                    <p> <a href="" className='badge'>Remote</a></p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='job-section-btn-wrap'>
                                            <a href="" className='apply-custom-btn btn'>Apply now</a>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </section>

                <section>
                    <div className='container'>
                        <div className='row'>
                            <div className='fifth-col-1'>
                                <div className='custom-text-block custom-border-radius-start'>
                                    <h2 className='custom-text-block-heading'>Gotto helps you an easier way to get new job</h2>
                                    <p className='custom-text-block-pehra'>You are not allowed to redistribute the template ZIP file on any other template collection website. Please contact us for more info. Thank you.</p>

                                    <div className='custom-text-block-number'></div>
                                    <div className='counter-thumb'>
                                        <div className='counter-thumb-content'>
                                            <span className='counter-number'>12</span>
                                            <span className='counter-number-text'>M</span>
                                        </div>
                                        <span className='counter-text'>Daily active users</span>
                                    </div>

                                    {/* <div className='counter-thumb'>
                                        <div className='counter-thumb-content'>
                                            <span className='counter-number'>12</span>
                                            <span className='counter-number-text'>M</span>
                                        </div>
                                        <span className='counter-text'>Daily active users</span>
                                    </div> */}

                                </div>
                            </div>

                            <div className='fifth-col-2'>
                                <div className='video-thumb'>
                                    <img src="https://www.tooplate.com/templates/2134_gotto_job/images/people-working-as-team-company.jpg" alt="" className='about-image custom-border-radius-end img-fluid' />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='job-section recent-jobs-section section-padding'>
                    <div className='container'>
                        <div className='row'>
                            <div className='job-section-main-heading'>
                                <h2 className='recent-job-heading'>Recent Jobs</h2>
                                <p className='recent-job-pehra'><strong>Over 10k opening jobs</strong>  Lorem Ipsum dolor sit amet, consectetur adipsicing <br></br>kengan omeg kohm tokito adipcingi elit eismuod larehai</p>
                            </div>

                            {/* <div className='job-section-flex-container'> */}

                            <div className='job-section-container-1 job-section-content-1'>
                                <div className='job-thumbs job-thumb-box'>
                                    <div className='job-image-box-wrap'>
                                        <a href=""><img src="https://www.tooplate.com/templates/2134_gotto_job/images/jobs/it-professional-works-startup-project.jpg" alt="" className='job-images img-fluid' /></a>
                                        <div className='job-image-box-wrap-info'>
                                            <p><a href="" className='badge badge-level'>Internship</a></p>
                                            <p><a href="" className='badge '>Freelance</a></p>
                                        </div>
                                    </div>
                                    <div className='job-bodys'>
                                        <h4 className='job-title'>
                                            <a href="" className='job-title-link'> Technical lead</a>
                                        </h4>

                                        <div className='job-recent-body-content'>
                                            <div className='job-image-wrap shadow-lg'>
                                                <img src="https://www.tooplate.com/templates/2134_gotto_job/images/logos/salesforce.png" alt="" className='jobs-images image-fluids saleforce-img' />
                                            </div>
                                            <p className='salesforce'>Salesforce</p>
                                        </div>

                                        <div className='recent-job-content-body-1'>
                                            <p className='job-location'><img width="20" height="20" src="https://img.icons8.com/ios/50/marker--v1.png" alt="marker--v1" />Kuala, Malaysia</p>
                                            <p className='job-date'> <img width="20" height="20" src="https://img.icons8.com/windows/32/clock--v1.png" alt="clock--v1" /> 10 Hours ago</p>
                                        </div>

                                        <div className='recent-job-content-body-2'>
                                            <p className='job-price'> <img width="20" height="20" src="https://img.icons8.com/windows/32/money-bill.png" alt="money-bill" /> $50k</p>
                                            <a href="" className='apply-custom-btn btn'>Apply now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='job-section-container-1 job-section-content-1'>
                                <div className='job-thumbs job-thumb-box'>
                                    <div className='job-image-box-wrap'>
                                        <a href=""><img src="https://www.tooplate.com/templates/2134_gotto_job/images/jobs/marketing-assistant.jpg" alt="" className='job-images img-fluid' /></a>
                                        <div className='job-image-box-wrap-info'>
                                            <p><a href="" className='badge badge-level'>Senior</a></p>
                                            <p><a href="" className='badge '>Part Time</a></p>
                                        </div>
                                    </div>
                                    <div className='job-bodys'>
                                        <h4 className='job-title'>
                                            <a href="" className='job-title-link'> Marketing Assistant</a>
                                        </h4>

                                        <div className='job-recent-body-content'>
                                            <div className='job-image-wrap shadow-lg'>
                                                <img src="https://www.tooplate.com/templates/2134_gotto_job/images/logos/spotify.png" alt="" className='jobs-images image-fluids saleforce-img' />
                                            </div>
                                            <p className='salesforce'>Spotify</p>
                                        </div>

                                        <div className='recent-job-content-body-1'>
                                            <p className='job-location'><img width="20" height="20" src="https://img.icons8.com/ios/50/marker--v1.png" alt="marker--v1" />California, USA</p>
                                            <p className='job-date'> <img width="20" height="20" src="https://img.icons8.com/windows/32/clock--v1.png" alt="clock--v1" /> 8 days ago</p>
                                        </div>

                                        <div className='recent-job-content-body-2'>
                                            <p className='job-price'> <img width="20" height="20" src="https://img.icons8.com/windows/32/money-bill.png" alt="money-bill" /> $20k</p>
                                            <a href="" className='apply-custom-btn btn'>Apply now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='job-section-container-1 job-section-content-1'>
                                <div className='job-thumbs job-thumb-box'>
                                    <div className='job-image-box-wrap'>
                                        <a href=""><img src="https://www.tooplate.com/templates/2134_gotto_job/images/jobs/coding-man.jpg" alt="" className='job-images img-fluid' /></a>
                                        <div className='job-image-box-wrap-info'>
                                            <p><a href="" className='badge badge-level'>Junior</a></p>
                                            <p><a href="" className='badge '>Contract</a></p>
                                        </div>
                                    </div>
                                    <div className='job-bodys'>
                                        <h4 className='job-title'>
                                            <a href="" className='job-title-link'>Programmer</a>
                                        </h4>

                                        <div className='job-recent-body-content'>
                                            <div className='job-image-wrap shadow-lg'>
                                                <img src="https://www.tooplate.com/templates/2134_gotto_job/images/logos/twitter.png" alt="" className='jobs-images image-fluids saleforce-img' />
                                            </div>
                                            <p className='salesforce'>Twiter</p>
                                        </div>

                                        <div className='recent-job-content-body-1'>
                                            <p className='job-location'><img width="20" height="20" src="https://img.icons8.com/ios/50/marker--v1.png" alt="marker--v1" />California, USA</p>
                                            <p className='job-date'> <img width="20" height="20" src="https://img.icons8.com/windows/32/clock--v1.png" alt="clock--v1" />23 hours ago</p>
                                        </div>

                                        <div className='recent-job-content-body-2'>
                                            <p className='job-price'> <img width="20" height="20" src="https://img.icons8.com/windows/32/money-bill.png" alt="money-bill" /> $68k</p>
                                            <a href="" className='apply-custom-btn btn'>Apply now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='job-section-container-1 job-section-content-1'>
                                <div className='job-thumbs job-thumb-box'>
                                    <div className='job-image-box-wrap'>
                                        <a href=""><img src="https://www.tooplate.com/templates/2134_gotto_job/images/jobs/pretty-blogger-posing-cozy-apartment.jpg" alt="" className='job-images img-fluid' /></a>
                                        <div className='job-image-box-wrap-info'>
                                            <p><a href="" className='badge badge-level'>Junior</a></p>
                                            <p><a href="" className='badge '>Contract</a></p>
                                        </div>
                                    </div>
                                    <div className='job-bodys'>
                                        <h4 className='job-title'>
                                            <a href="" className='job-title-link'>HR Manager</a>
                                        </h4>

                                        <div className='job-recent-body-content'>
                                            <div className='job-image-wrap shadow-lg'>
                                                <img src="https://www.tooplate.com/templates/2134_gotto_job/images/logos/yelp.png" alt="" className='jobs-images image-fluids saleforce-img' />
                                            </div>
                                            <p className='salesforce'>Yelp</p>
                                        </div>

                                        <div className='recent-job-content-body-1'>
                                            <p className='job-location'><img width="20" height="20" src="https://img.icons8.com/ios/50/marker--v1.png" alt="marker--v1" />California, USA</p>
                                            <p className='job-date'> <img width="20" height="20" src="https://img.icons8.com/windows/32/clock--v1.png" alt="clock--v1" />15 hours ago</p>
                                        </div>

                                        <div className='recent-job-content-body-2'>
                                            <p className='job-price'> <img width="20" height="20" src="https://img.icons8.com/windows/32/money-bill.png" alt="money-bill" />$35k - 45k</p>
                                            <a href="" className='apply-custom-btn btn'>Apply now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='job-section-container-1 job-section-content-1'>
                                <div className='job-thumbs job-thumb-box'>
                                    <div className='job-image-box-wrap'>
                                        <a href=""><img src="https://www.tooplate.com/templates/2134_gotto_job/images/jobs/paper-analysis.jpg" alt="" className='job-images img-fluid' /></a>
                                        <div className='job-image-box-wrap-info'>
                                            <p><a href="" className='badge badge-level'>Junior</a></p>
                                            <p><a href="" className='badge '>Contract</a></p>
                                        </div>
                                    </div>
                                    <div className='job-bodys'>
                                        <h4 className='job-title'>
                                            <a href="" className='job-title-link'>Sales Representative</a>
                                        </h4>

                                        <div className='job-recent-body-content'>
                                            <div className='job-image-wrap shadow-lg'>
                                                <img src="https://www.tooplate.com/templates/2134_gotto_job/images/logos/paypal.png" alt="" className='jobs-images image-fluids saleforce-img' />
                                            </div>
                                            <p className='salesforce'>Paypal</p>
                                        </div>

                                        <div className='recent-job-content-body-1'>
                                            <p className='job-location'><img width="20" height="20" src="https://img.icons8.com/ios/50/marker--v1.png" alt="marker--v1" /> Bangkok, Thailand</p>
                                            <p className='job-date'> <img width="20" height="20" src="https://img.icons8.com/windows/32/clock--v1.png" alt="clock--v1" /> 30 mins ago</p>
                                        </div>

                                        <div className='recent-job-content-body-2'>
                                            <p className='job-price'> <img width="20" height="20" src="https://img.icons8.com/windows/32/money-bill.png" alt="money-bill" />$20k - 35k</p>
                                            <a href="" className='apply-custom-btn btn'>Apply now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='job-section-container-1 job-section-content-1'>
                                <div className='job-thumbs job-thumb-box'>
                                    <div className='job-image-box-wrap'>
                                        <a href=""><img src="https://www.tooplate.com/templates/2134_gotto_job/images/jobs/logo-designer-working-computer-desktop.jpg" alt="" className='job-images img-fluid' /></a>
                                        <div className='job-image-box-wrap-info'>
                                            <p><a href="" className='badge badge-level'>Mid Level</a></p>
                                            <p><a href="" className='badge '>Full Time</a></p>
                                        </div>
                                    </div>
                                    <div className='job-bodys'>
                                        <h4 className='job-title'>
                                            <a href="" className='job-title-link'>Graphic Designer</a>
                                        </h4>

                                        <div className='job-recent-body-content'>
                                            <div className='job-image-wrap shadow-lg'>
                                                <img src="https://www.tooplate.com/templates/2134_gotto_job/images/logos/envato.png" alt="" className='jobs-images image-fluids saleforce-img' />
                                            </div>
                                            <p className='salesforce'>Envato</p>
                                        </div>

                                        <div className='recent-job-content-body-1'>
                                            <p className='job-location'><img width="20" height="20" src="https://img.icons8.com/ios/50/marker--v1.png" alt="marker--v1" /> Australia</p>
                                            <p className='job-date'> <img width="20" height="20" src="https://img.icons8.com/windows/32/clock--v1.png" alt="clock--v1" />  2 days ago</p>
                                        </div>

                                        <div className='recent-job-content-body-2'>
                                            <p className='job-price'> <img width="20" height="20" src="https://img.icons8.com/windows/32/money-bill.png" alt="money-bill" />$20k</p>
                                            <a href="" className='apply-custom-btn btn'>Apply now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* </div> */}
                            
                        </div>
                    </div>
                </section>

                <section className='review-section section-padding'>
                    <div className='container'>
                        <div className='review-row'>
                            <div className='happy'>
                                <h2 className='happy-customer'>Happy Customer</h2>
                                <div className='review-div'>

                                    <div className='review-1'>

                                        <div className='review-header-content'>
                                            <img src="https://www.tooplate.com/templates/2134_gotto_job/images/avatar/portrait-beautiful-young-woman.jpg" alt="" />

                                            <div className='inside-review-content'>

                                                <div className='inside-review-content-1'>
                                                    <strong>Haley</strong>
                                                    <p style={{ marginTop: "5px" }}>Sales And Marketing</p>
                                                </div>

                                                <div className='inside-review-content-2'>
                                                    {/* <p>djdjkhfks</p> */}
                                                </div>

                                            </div>
                                        </div>

                                        <div className='review-body'>
                                            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h4>
                                        </div>

                                    </div>

                                    <div className='review-2'>

                                        <div className='review-header-content'>
                                            <img src="https://www.tooplate.com/templates/2134_gotto_job/images/avatar/university-study-abroad-lifestyle-concept.jpg" alt="" />

                                            <div className='inside-review-content'>

                                                <div className='inside-review-content-1'>
                                                    <strong>Kevin</strong>
                                                    <p style={{ marginTop: "5px" }}>Internship</p>
                                                </div>

                                                <div className='inside-review-content-2'>
                                                    {/* <p>djdjkhfks</p> */}
                                                </div>

                                            </div>
                                        </div>

                                        <div className='review-body'>
                                            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h4>
                                        </div>


                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='cta-section'>
                    <div className='cta-section-overlay'></div>
                    <div className='container'>

                        <div className='cta-section-flex'>

                            <div className='cta-section-content-1'>
                                <h2 className='opening-job'>Over 10K Opening Job</h2>
                                <p className='pehra-cta-section'>If you are looking for free HTML templates, you may visit Tooplate website. If you need a collection of free templates, you can visit Too CSS website.</p>
                            </div>

                            <div className='cta-section-content-2'>
                                <a href="" className='custom-btn custom-border-btn btn'>Create an account</a>
                                <a href="" className='custom-link'>Post a job</a>
                            </div>

                        </div>
                    </div>
                </section>

                <footer className="footer">
                    <div className='container'>

                        <div className="box">
                            <a href="" className='navbar-brand'>
                                <img src="https://www.tooplate.com/templates/2134_gotto_job/images/logo.png" alt="" className='logo-img' />
                                <div className='header-name'>
                                    <strong className='logo-text'>Gotto</strong>
                                    <small className='logo-slogan'>ONLINE JOB PORTAL</small>
                                </div>
                            </a>

                            <div className='footer-content-box-1'>
                                <ul>
                                    <li><img width="25" height="25" src="https://img.icons8.com/ios-glyphs/30/internet--v1.png" alt="internet--v1" style={{ marginRight: "10px" }} /> <span>www.jobbportal.com</span></li>
                                    <li><img width="25" height="25" src="https://img.icons8.com/windows/32/phone.png" alt="phone" style={{ marginRight: "10px" }} /> <span>305-240-9671</span></li>
                                    <li><img width="25" height="25" src="https://img.icons8.com/windows/32/chat-message.png" alt="chat-message" style={{ marginRight: "10px" }} /><span>info@jobportal.co1</span></li>
                                </ul>
                            </div>

                        </div>

                        <div className="box">
                            <a href="" className='navbar-brand'>
                                <div className='header-name'>
                                    <h2 style={{ color: "black" }}>Company</h2>
                                </div>
                            </a>

                            <div className='footer-content-box-1'>
                                <ul>
                                    <li><span>About</span></li>
                                    <li><span>Blogs</span></li>
                                    <li><span>Jobs</span></li>
                                    <li><span>Contact</span></li>
                                </ul>
                            </div>

                        </div>

                        <div className="box">
                            <a href="" className='navbar-brand'>
                                <div className='header-name'>
                                    <h2 style={{ color: "black", marginBottom: "20px" }}>Resources</h2>
                                </div>
                            </a>

                            <div className='footer-content-box-1'>
                                <ul>
                                    <li><span>Guide</span></li>
                                    <li><span>How it works</span></li>
                                    <li><span>Salary tool</span></li>
                                </ul>
                            </div>

                        </div>

                        <div className="box">
                            <a href="" className='navbar-brand'>
                                <div className='header-name'>
                                    <h2 style={{ color: "black" }}>Newsletter</h2>
                                </div>
                            </a>

                            <div className='newsletter-footer'>
                                <h3 style={{ fontSize: "22px" }}>Get notified jobs news</h3>
                                <input type='text' className='newsletter-input' placeholder='Yourname@gmail.com'></input>
                            </div>

                        </div>

                    </div>
                </footer>


            </main>
        </>
    );
}

export default Header;





