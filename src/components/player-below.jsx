import '../css/style.css'
import iconPrev from '../img/icon/prev.svg'
import iconPlay from '../img/icon/play.svg'
import iconNext from '../img/icon/next.svg'
import iconRepeat from '../img/icon/repeat.svg'
import iconShuffle from '../img/icon/shuffle.svg'
import iconNote from '../img/icon/note.svg'
import iconLike from '../img/icon/like.svg'
import iconDislike from '../img/icon/dislike.svg'
import iconVolume from '../img/icon/volume.svg'

const Player = (
        <div className="bar__player player">
            <div className="player__controls">
                <div className="player__btn-prev">
                    <svg className="player__btn-prev-svg" alt="prev">
                        <use xlinkHref="http://"  src={iconPrev}/>
                    </svg>
                </div>
                <div className="player__btn-play _btn">
                    <svg className="player__btn-play-svg" alt="play">
                        <use xlinkHref="http://"  src={iconPlay}/>
                    </svg>
                </div>
                <div className="player__btn-next">
                    <svg className="player__btn-next-svg" alt="next">
                        <use xlinkHref="http://"  src={iconNext}/>
                    </svg>
                </div>
                <div className="player__btn-repeat _btn-icon">
                    <svg className="player__btn-repeat-svg" alt="repeat">
                        <use xlinkHref="http://"  src={iconRepeat}/>
                    </svg>
                </div>
                <div className="player__btn-shuffle _btn-icon">
                    <svg className="player__btn-shuffle-svg" alt="shuffle">
                        <use xlinkHref="http://"  src={iconShuffle}/>
                    </svg>
                </div>
            </div>
            
            <div className="player__track-play track-play">
                <div className="track-play__contain">
                    <div className="track-play__image">
                        <svg className="track-play__svg" alt="music">
                            <use xlinkHref="http://"  src={iconNote}/>
                        </svg>
                    </div>
                    <div className="track-play__author">
                        <a className="track-play__author-link" href="http://">Ты та...</a>
                    </div>
                    <div className="track-play__album">
                        <a className="track-play__album-link" href="http://">Баста</a>
                    </div>
                </div>

                <div className="track-play__like-dis">
                    <div className="track-play__like _btn-icon">
                        <svg className="track-play__like-svg" alt="like">
                            <use xlinkHref="http://"  src={iconLike}/>
                        </svg>
                    </div>
                    <div className="track-play__dislike _btn-icon">
                        <svg className="track-play__dislike-svg" alt="dislike">
                            <use xlinkHref="http://"  src={iconDislike}/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
);

const Volume = (
        <div className="bar__volume-block volume">
            <div className="volume__content">
                    <div className="volume__image">
                        <svg className="volume__svg" alt="volume">
                            <use xlinkHref="http://"  src={iconVolume}/>
                        </svg>
                    </div>
                    <div className="volume__progress _btn">
                        <input className="volume__progress-line _btn" type="range" name="range"/>
                    </div>
                    
            </div>
        </div>
);

const PlayerBlock = (
        <div className="bar__player-block">
            {Player}
            {Volume}
        </div>
);



function RenderPlayerBelow() {
    return (
        <div className="bar__content">
            <div className="bar__player-progress"/>
            {PlayerBlock}
        </div>
    )
};

export default RenderPlayerBelow;