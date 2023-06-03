import '../styles/home.css'
import pic from '../assets/my-img.jpg';
import github from '../assets/icons/ic_github.svg';
import linkedin from '../assets/icons/ic_linkedin.svg';
import wellfound from '../assets/icons/ic_wellfound.png';
import medium from '../assets/icons/ic_medium.svg';
import twitter from '../assets/icons/ic_twitter.svg';
import stackofw from '../assets/icons/ic_stackoverflow.svg';
import wha from '../assets/icons/whatsapp-svgrepo-com.svg'



const Home =  () => {
    return (
    <section className="home">
      <div className="profile-image-container">
        <img className="profile-image" src={pic} alt="Profile" />
      </div>
      <div className='intro'>
        <h1>Abdel-Khafid Adeola SALAOU</h1>
        <p className='presentation'>
            Hello world! I'm a <span>Full stack Developer.</span>
        </p>
        <p>Welcome to my Portfolio!
            <br />
            Here, you will discover some more informations about me, my projects and achivements, and my skills.
            <br />
            Navigate through the sections of this website to discover more about me our reach out to me throught my social medias links bellow!
        </p>
        <div className='social-links'>
            <a href='mailto:khadaf3@gmail.com' className='social-link mail'>
                khadaf3@gmail.com
            </a>
            <a href='https://github.com/adeola003' target='_blank' rel="noreferrer" className='social-link github'>
                <img src={github} alt='Github logo'/>
            </a>
            <a href='https://github.com/adeola003' target='_blank' rel="noreferrer" className='social-link linkedin'>
                <img src={linkedin} alt='linkedin logo'/>
            </a>
            <a href='https://wellfound.com/u/abdel-khafid-salaou' target='_blank' rel="noreferrer" className='social-link wellfound'>
                <img src={wellfound} alt='Wellfound logo'/>
            </a>
            <a href='https://medium.com/@khadaf3' target='_blank' rel="noreferrer" className='social-link medium'>
                <img src={medium} alt='Medium logo'/>
            </a>
            <a href='https://stackoverflow.com/users/22014380/abdel-khafid-salaou' target='_blank' rel="noreferrer" className='social-link stackouverflow'>
                <img src={stackofw} alt='Stackoverflow logo'/>
            </a>
            <a href='https://github.com/adeola003' target='_blank' rel="noreferrer" className='social-link twitter'>
                <img src={twitter} alt='twitter logo'/>
            </a>
            <a href='https://wa.me/22966416740' target='_blank' rel="noreferrer" className='social-link whatsapp'>
                <img src={wha} alt='whatsapp logo'/>
            </a>
        </div>
        
      </div>
    </section>
    )
};

export default Home;