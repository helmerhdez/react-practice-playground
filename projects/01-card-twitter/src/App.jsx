import './App.css'
import { TwitterFollowCard } from './assets/TwitterFollowCard'
export function App() {
    return (
        <section className='App'>
            <TwitterFollowCard isFollowing userName="Marvel">
                Marvel
            </TwitterFollowCard>
            <TwitterFollowCard isFollowing={false} userName="nasa">
                NASA
            </TwitterFollowCard>
            <TwitterFollowCard isFollowing userName="Google">
                Google
            </TwitterFollowCard>
            <TwitterFollowCard isFollowing userName="Microsoft">
                Microsoft
            </TwitterFollowCard>
        </section>
    )
}