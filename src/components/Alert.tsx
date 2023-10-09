import exp from "constants";

function Alert() {
    return (
        <div role="alert" className={"padding-b"}>
            <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                Ошибка
            </div>
            <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                <p>Некоретные данные.</p>
            </div>
        </div>
    )
}

export default Alert