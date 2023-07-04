import BannerMe from 'assets/images/banner_me.jpg';

const Banner = () => {
  return (
    <section className="banner fit-height fit-width o-hidden section">
      <div className="banner-container sp-relative">
        <div className="banner-img">
          <div className="banner-my-name">
            <h1 className="text-head font-noto">Amey Khoje</h1>
          </div>
          <img src={BannerMe} alt="ameykhoje, amey khoje, Amey Khoje" />
          <div className="banner-portfolio">
            <h1 className="text-head font-montserrat text-uppercase">
              Portfolio
            </h1>
          </div>
          <div className="banner-designation font-montserrat">
            <p>UI Engineer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
