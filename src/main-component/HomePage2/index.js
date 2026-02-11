import React, {Fragment} from 'react';
// import Navbar from '../../components/Navbar' // Old navbar commented out
import TransparentNavbar from '../../components/TransparentNavbar' // New transparent navbar
import Hero2 from '../../components/hero2';
import About2 from '../../components/about2';
import ProjectSectionS2 from '../../components/ProjectsS2';
import VideoTestimonials from '../../components/VideoTestimonials';
import Footer from '../../components/footer';
import Scrollbar from '../../components/scrollbar'
import Logo from '../../images/logo.svg'
import DeliveredProjectsSection from '../../components/DeliveredProjectsSection';



const HomePage2 =() => {
    return(
        <Fragment>
            {/* <Navbar Logo={Logo}/> */} {/* Old navbar commented out */}
            <TransparentNavbar Logo={Logo}/> {/* New transparent navbar */}
            <Hero2/>
            <Hero2 
                showContactForm={false}
                textPosition="top"
                title="Gig City"
                showTitle={false} 
                showSubtitle={false} 
                videoUrl = 'https://www.youtube.com/embed/uI24t0e6sVU?autoplay=1&mute=1&loop=1&playlist=uI24t0e6sVU&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3'
                mobileVideoUrl = 'https://www.youtube.com/embed/uI24t0e6sVU?autoplay=1&mute=1&loop=1&playlist=uI24t0e6sVU&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3'
            />
            {/* uI24t0e6sVU */}
            <Hero2 
                showContactForm={false}
                textPosition="center"
                title="Goldcrest Views"
                subtitle="Giga City, Islamabad"
                videoUrl = 'https://www.youtube.com/embed/5t1dJQAJ4-Y?autoplay=1&mute=1&loop=1&playlist=5t1dJQAJ4-Y&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3'
                mobileVideoUrl = 'https://www.youtube.com/embed/5t1dJQAJ4-Y?autoplay=1&mute=1&loop=1&playlist=5t1dJQAJ4-Y&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3'
            />
            <About2/>
            {/* <ServiceSection sClass={'section-bg'}/> */}
            <ProjectSectionS2/>
            {/* <TeamSection/> */}
            <VideoTestimonials/>
            <DeliveredProjectsSection />
            {/* <BlogSection/> */}
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default HomePage2;