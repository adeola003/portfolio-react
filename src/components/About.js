import '../styles/about.css';
import '@fortawesome/fontawesome-free/css/all.css'

const About = () => {
    return (
        <>
        <section className='about-me'>
            <h2>Hey there!</h2>
            <h3>Adeola here</h3>
            <p>As a passionate full-stack developer, I bring a unique combination of technical expertise and industry experience. I studied full-stack development at Microverse, where I honed my skills in various front-end and back-end technologies. Prior to that, I worked as a water engineer for six years. During my career, I developed my abilities to manage teams, work under pressure, and meet tight deadlines. My engineering background also honed my mathematical and problem-solving skills, which are crucial in software development.</p>
            <p>In addition, I must mention that problem-solving is the main element that brought me into software development. Directing huge projects comes with a lot of unexpected issues and unforeseen problems. In this kind of situation, the engineer is supposed to show stunning skills in problem-solving and accuracy. This has to be accompanied by short timing and reactivity. All those skills I acquired and polished with my previous experience are making me comfortable in software development and I'm sure to become one of the best.</p>
            <p>Impatient to demonstrate my skills, or to discuss with professionals to gain more, I'm available anytime if you need somtheing coded or even for a Coffee &amp; Code session</p>
            <a href='#contact'>Lets Connect!</a>          
        </section>
        <section className='skills'>
            <h2>Languages and skills</h2>
            <div className='skills-container'>
                <div class="skill-category">
                    <h3>Front-end Development</h3>
                    <ul>
                        <li>
                            <i class="fab fa-html5"></i> HTML5
                        </li>
                        <li>
                            <i class="fab fa-css3-alt"></i> CSS3
                        </li>
                        <li>
                            <i class="fab fa-js"></i> JavaScript
                        </li>
                        <li>
                            <i class="fab fa-bootstrap"></i> Bootstrap
                        </li>
                        <li>
                            <i class="fab fa-sass"></i> SCSS
                        </li>
                        <li>
                            <i class="fab fa-react"></i> React-redux
                        </li>
                    </ul>
                </div>

                <div class="skill-category">
                    <h3>Back-end Development</h3>
                    <ul>
                        <li>
                            <i class="fab fa-node"></i> Node.js
                        </li>
                        <li>
                            <i class="fas fa-laptop-code"></i> Ruby
                        </li>
                        <li>
                            <i class="fas fa-laptop-code"></i> Ruby on Rails
                        </li>
                        <li>
                            <i class="fas fa-database"></i> SQL
                        </li>
                        <li>
                            <i class="fas fa-database"></i> MySQL
                        </li>
                        <li>
                            <i class="fas fa-database"></i> MongoDB
                        </li>
                        <li>
                            <i class="fab fa-python"></i> Python
                        </li>
                    </ul>
                </div>
                <div class="skill-category">
                    <h3>Professional skills</h3>
                    <ul>
                        <li>
                            <i class="fas fa-users"></i> Pair Programming
                        </li>
                        <li>
                            <i class="fas fa-user-tie"></i> Leadership
                        </li>
                        <li>
                            <i class="fas fa-check-circle"></i> Testing
                        </li>
                        <li>
                            <i class="fas fa-laptop"></i> Remote Work
                        </li>
                        <li>
                            <i class="fas fa-hands-helping"></i> Teamwork
                        </li>
                        <li>
                            <i class="fas fa-chalkboard-teacher"></i> Mentoring
                        </li>
                        <li>
                            <i class="fas fa-search-plus"></i> Code Reviews
                        </li>
                    </ul>
                </div>
                <div class="skill-category">
                    <h3>Other skills</h3>
                    <ul>
                        <li>
                            <i class="fab fa-python"></i> Python
                        </li>
                        <li>
                            <i class="fas fa-code"></i>MATLAB
                        </li>
                        <li>
                            <i class="fas fa-code"></i>R
                        </li>
                        <li>
                            <i class="fas fa-code"></i> DSA
                        </li>
                        <li>
                            <i class="fab fa-gitlab"></i> GitLab
                        </li>
                        <li>
                            <i class="fab fa-github"></i> GitHub
                        </li>
                        <li>
                            <i class="fab fa-windows"></i> PowerShell
                        </li>
                    </ul>
                </div>
            </div>
            <a href='' target='_blank'>
                <button name='resume' className='resume-btn'>
                    Get my resume
                </button>
            </a>
        </section>
        </>

    )
};
export default About;