export default function MyProfile() {
    return (
        <section className="bg-blue-100 w-full h-[500px] px-[5px] md:px-[60px] grid grid-cols-8 grid-rows-7 font-mono">
            <div className="col-span-4 row-span-full p-2.5 md:p-[90px] flex flex-col justify-center">
                <h3 className="text-1">Assalamualaikum, i am</h3>
                <h2 className="font-bold text-3xl">Muhammad Yafi Akmal</h2>
                <br />
                <p>Just a bad guy who is trying to fight himself</p>
            </div>

            <div className="col-span-4 row-span-full px-2.5 xl:px-[30px] flex flex-col justify-center items-center">
                <div className="relative h-[80%] w-full  md:h-full md:w-[90%] flex justify-center items-center ">
                    <div className="absolute bottom-0 h-[70%] w-[70%] lg:w-[50%] bg-cover rounded-t-lg bg-linear-to-br from-[#1D546C] to-[#38A3D2]"></div>
                    <img src="./foto-non-formal- 1.png" alt="My Cool Photo" className="z-10 absolute bottom-0 h-full" />
                    {/* <div className="h-full w-full bg-amber-200 md:h-[90%]"></div> */}
                </div>
            </div>
        </section>
    )
}