import { MainScreen, Production } from '../../sections'

const Home = () => {
    return (
        <div className='bg-extralight-blue'>
            <section className="pt-24">
                <MainScreen />
            </section>
            <section className="max-container">
                <Production />
            </section>
        </div>
    )
}

export default Home