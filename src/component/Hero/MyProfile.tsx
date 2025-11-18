export default function MyProfile() {
    return (
        <section className="bg-blue-100 w-screen h-[530px] px-[60px] grid grid-cols-7 grid-rows-7 font-mono">
            <div className="col-span-4 row-span-full p-[90px] flex flex-col justify-center">
                <h3 className="text-1">Assalamualaikum, i am</h3>
                <h2 className="font-bold text-3xl">Muhammad Yafi Akmal</h2>
                <br />
                <p>a bad guy who is trying to fight himself</p>
            </div>
            <div className="col-span-3 row-span-full px-[30px] flex flex-col justify-center items-center ">
                <div className="relative h-full w-full flex justify-center items-center">
                    <div className="absolute bottom-0 h-[80%] w-[55%] left-1/2 -translate-x-1/2 rounded-t-lg bg-linear-to-br from-[#1D546C] to-[#38A3D2]"></div>
                    <img src="./src/assets/foto-non-formal- 1.png" alt="My Cool Photo" className="z-10 absolute bottom-0 left-1/2 -translate-x-1/2 h-full w-auto" />
                </div>
            </div>
        </section>
    )
}