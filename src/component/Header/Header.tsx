export default function Header() {
    return (
        <>
            <div className="header px-2 h-[70px] w-full bg-blue-200 flex justify-between">
                <div className="logo h-full w-[20%] bg-green-100 flex justify-center items-center">
                    <div className="img  bg-green-300">
                        <h1>MYA</h1>
                    </div>
                </div>
                <div className="links px-2 h-full w-full bg-green-200 flex justify-end items-center gap-3">
                    <li className="nav px-2 w-full md:w-[50%] bg-green-300 flex justify-between">
                        <ul><a href="#">link1</a></ul>
                        <ul><a href="#">link2</a></ul>
                        <ul><a href="#">link3</a></ul>
                        <ul><a href="#">link4</a></ul>
                    </li>
                </div>
            </div>
        </>
    )
}