import '../css/style.css'
import playlist01 from '../img/playlist01.png';
import playlist02 from '../img/playlist02.png'
import playlist03 from '../img/playlist03.png'

const Personal = (
    <div className="sidebar__personal">
        <p className="sidebar__personal-name">Sergey.Ivanov</p>
        <div className="sidebar__avatar"/>
    </div>
);

const PlayLists = (
    <div className="sidebar__block">
        <div className="sidebar__list">
            <div className="sidebar__item">
                <a className="sidebar__link" href="http://">
                    <img className="sidebar__img" src={playlist01} alt="day's playlist"/>
                </a>
            </div>
            <div className="sidebar__item">
                <a className="sidebar__link" href="http://">
                    <img className="sidebar__img" src={playlist02} alt="day's playlist"/>
                </a>
            </div>
            <div className="sidebar__item">
                <a className="sidebar__link" href="http://">
                    <img className="sidebar__img" src={playlist03} alt="day's playlist"/>
                </a>
            </div>
        </div>
    </div>
);

function RenderRightBar() {
    return (
        <nav className="main__sidebar sidebar">
            {Personal}
            {PlayLists}
        </nav>
    )
};

export default RenderRightBar;