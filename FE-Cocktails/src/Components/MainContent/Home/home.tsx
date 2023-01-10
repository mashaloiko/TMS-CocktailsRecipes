import home from '../../../Assets/home-page.png';
import "./style/home.css";

export const Home = () => {
  return (
    <div className="home">
      <div className="home__wrap-img">
        <img className="home__img" src={home} alt="home" />
      </div>
      <div className="home__wrap-text">
        <h1 className="home__title">Alcohol for the modern drinker</h1>
        <p className="home__text">Light and refreshing flavors made with real, clean ingredients you can feel good about. Just pour, sip, and enjoy.</p>
      </div>
    </div>
  )
}