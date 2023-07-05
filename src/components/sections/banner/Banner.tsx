import { useSpring, animated, easings } from '@react-spring/web';
import BannerMe from 'assets/images/banner_me.jpg';
import BannerAnimationProvider from 'src/components/animations/BannerAnimationProvider';

const Banner = ({
  initAnimation,
  photoAnimation,
  designationAnimation,
}: {
  initAnimation: object;
  photoAnimation: object;
  designationAnimation: object;
}) => {
  return (
    <section className="banner fit-height fit-width o-hidden section">
      <animated.div
        style={initAnimation}
        className="banner-container sp-relative"
      >
        <div className="banner-img">
          <div className="banner-my-name">
            <h1 className="text-head font-noto">Amey Khoje</h1>
          </div>
          <animated.img
            style={photoAnimation}
            src={BannerMe}
            alt="ameykhoje, amey khoje, Amey Khoje"
          />
          <div className="banner-portfolio">
            <h1 className="text-head font-montserrat text-uppercase">
              Portfolio
            </h1>
          </div>
          <animated.div
            style={designationAnimation}
            className="banner-designation font-montserrat"
          >
            <p>UI Engineer</p>
          </animated.div>
        </div>
      </animated.div>
    </section>
  );
};

export default BannerAnimationProvider(Banner);
