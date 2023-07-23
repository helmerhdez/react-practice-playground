import { useState } from "react";

export function TwitterFollowCard ({ children, userName = 'unknown'}) {
    const [ isFollowing, setIsFollowing ] = useState(false);
    
    const text = isFollowing ? 'Following' : 'Follow';
    const buttonClassName = isFollowing 
    ? 'tw-followCard__button is-following' 
    : 'tw-followCard__button';

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard__header'>
                <img 
                className='tw-followCard__avatar'
                src={`https://unavatar.io/${userName}`} 
                alt={'avatar de ' + userName} />
                <div className='tw-followCard__info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard__username'>@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}