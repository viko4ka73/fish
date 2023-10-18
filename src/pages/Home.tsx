import { MainScreen, Production } from '../sections'

const Home = () => {
    return (
        <div>
            <section className="pt-24">
                <MainScreen />
            </section>
            <section>
                <Production />
            </section>
        </div>
    )
}

export default Home