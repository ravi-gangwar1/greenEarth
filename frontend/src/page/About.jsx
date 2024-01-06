import '../style/aboutPage.css';

function About() {
  return (
    <div className='about-page'>
      <div className='about-div-website'>
        <div className='what-greenearth'>
          <h1>What is greenEarth?</h1>
        </div>
        <div className='about-greenearth'>
        <p className='about-website-paragraph'>Green Earth, aims to address the lack of time for city dwellers 
                    to plant trees. We offer a convenient solution by connecting
                     farmers and customers across India, allowing them to plant trees
                      based on their location. We will provide regular updates on the
                       progress and charge a nominal fee for this service.</p>
          <img src="https://github.com/ravi-gangwar/greenEarth/blob/main/frontend/src/assets/green-earth.png?raw=true" alt="" />
      </div>
      </div>
         <div className='objectives'>
          <h1>Our Objectives</h1>
            <div className='objective-cards'>
              <div className='objective-card'>
                <div className="icon">
                </div>
                  <h2>Vision</h2>
                  <p> To build a model eco-farming community on our land donation, skillfully master 
                      planned to allow for future-allocated areas for forests, schools, parks, marketplaces
                      , sports and recreational facilities, and community training center.
                  </p>
              </div>
              <div className='objective-card'>
                <div className="icon">
                </div>
                  <h2>Mission</h2>
                  <p> We are committed to making this planet a better place for all of us. We understand
                         the importance of keeping our environment balanced and sustainable. We believe that everyone
                           can do their part to ensure the health of the planet and we will work hard to make
                            sure our goals become realities.
                  </p>
              </div>
              <div className='objective-card'>
                <div className="icon">
                </div>
                  <h2>Objective</h2>
                  <p> 
                  Planting trees is a great way to help the environment and 
                  the world we live in. Here are some benefits of planting 
                  trees:-<br/>1. Economic benefits<br/>2. Environmental benefits<br/>3. Wildlife benefits
                  </p>
              </div>
            </div>
            <div className="about-slider-container">
      <div className="about-card">
        <span className="about-span-card-member"><h1>Vision</h1></span>
        <span className="about-about-span-card-member">
          <p> 
            To build a model eco-farming community on our land donation, skillfully master 
            planned to allow for future-allocated areas for forests, schools, parks, marketplaces
            ,sports and recreational facilities, and community training center.
          </p>
        </span>
      </div>
      <div className="about-card">
        <span className="about-span-card-member"><h1>Mission</h1></span>
        <span className="about-span-card-member">
          <p> We are committed to making this planet a better place for all of us. We understand
              the importance of keeping our environment balanced and sustainable. We believe that everyone
              can do their part to ensure the health of the planet and we will work hard to make
              sure our goals become realities.
          </p>
        </span>

      </div>
      <div className="about-card">
        <span className="about-span-card-member"><h1>Objective</h1></span>
        <span className="about-span-card-member">
          <p> 
            Planting trees is a great way to help the environment and 
            the world we live in. Here are some benefits of planting 
            trees:-<br/>1. Economic benefits<br/>2. Environmental benefits<br/>3. Wildlife benefits
          </p>
        </span>
      </div>

      
    </div>
         </div>
         <div className='aboutus-team'>
          <h1>Our Team</h1>
          <div className='members-team'>

            <div className='teamCard-1'>
              <div className='team-member-img'>
                <img src="https://github.com/ravi-gangwar/greenEarth/blob/main/frontend/src/assets/r.png?raw=true" alt="" />
              </div>
              <div className='team-member-details'>
                  <span>Name: <p>Ravi Gangwar</p></span>
                  <span>Role: <p>Backend, Frontend Developer</p></span>
                  <span><i>Team Leader</i></span>
              </div>
            </div>
            <div className='teamCard-1'>
              <div className='team-member-img'>
                <img src="https://github.com/ravi-gangwar/greenEarth/blob/main/frontend/src/assets/v.png?raw=true" alt="" />
              </div>
              <div className='team-member-details'>
                  <span>Name: <p>Vaishnavi Katiyar</p></span>
                  <span>Role: <p>Frontend and UX,UI Developer </p></span>
              </div>
            </div>
            <div className='teamCard-1'>
              <div className='team-member-img'>
                <img src="https://github.com/ravi-gangwar/greenEarth/blob/main/frontend/src/assets/k.png?raw=true" alt="" />
              </div>
              <div className='team-member-details'>
                  <span>Name: <p>Kaushiki Tripathi</p></span>
                  <span>Role: <p>Frontend and UX,UI Developer </p></span>
              </div>
            </div>
            <div className='teamCard-1'>
              <div className='team-member-img'>
                <img src="https://github.com/ravi-gangwar/greenEarth/blob/main/frontend/src/assets/a.png?raw=true" alt="" />
              </div>
              <div className='team-member-details'>
                  <span>Name: <p>Anand Kumar</p></span>
                  <span>Role: <p>Frontend and UX,UI Developer</p></span>
              </div>
            </div>
          </div>
         </div>
    </div>
  );
}

export default About;
