import {Link} from "react-router-dom";


const  AdminNav = () => {
    return (
        <header className=''>
            <nav className='flex justify-between items-center max-container'>
                <div><Link to="/admin/add">Добавить товар</Link></div>
                <div><Link to="/">Главная страница </Link></div>
            </nav>
        </header>
    )
}

export default AdminNav