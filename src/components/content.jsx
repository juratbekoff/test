/* eslint-disable react/no-unescaped-entities */
const Content = ({ ...data }) => {

    return (
        <div className="flex flex-col gap-2 mt-6 w-[70%]">
            <div className="flex flex-row justify-between pt-10 pb-5 pl-16">
                <h1 className="text-[27px] font-semibold">{data.year}</h1>
                <div className="flex flex-row justify-between gap-5 ite">
                    <h1 className="text-[16px] font-normal">Ulashing: </h1>
                    <div className="flex flex-row justify-between gap-4">
                        <a href="#">
                            <img src="/images/logos_telegram.svg" className="h-8" alt="telegram" />
                        </a>
                        <a href="#">
                            <img src="/images/instagram.svg" className="h-8" alt="instagram" />
                        </a>
                        <a href="#">
                            <img src="/images/ep_copy-document.svg" className="h-8" alt="copy link" />
                        </a>
                    </div>
                </div>
            </div>
            <img src="/images/Line 1.svg" alt="line" className="w-[95%] ml-16" />
            <div className="flex flex-col justify-between py-1 pl-16 gap-10 mt-12 w-[100%] ml-2">
                <li className="text-[16px] text-[#273140] font-medium w-full">1920 -yil Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Dolorem necessitatibus delectus officiis dignissimos corporis in a
                    sit ratione asperiores dolores placeat soluta libero, magnam laudantium o'zbekiston
                    Respublikasiga asos solingan yil lorem40</li>
                <li className="text-[16px] text-[#273140] font-medium w-full">1920 -yil Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Dolorem necessitatibus delectus officiis dignissimos corporis in a
                    sit ratione asperiores dolores placeat soluta libero, magnam laudantium o'zbekiston
                    Respublikasiga asos solingan yil lorem40</li>
                <li className="text-[16px] text-[#273140] font-medium w-full">1920 -yil Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Dolorem necessitatibus delectus officiis dignissimos corporis in a
                    sit ratione asperiores dolores placeat soluta libero, magnam laudantium o'zbekiston
                    Respublikasiga asos solingan yil lorem40</li>
                <li className="text-[16px] text-[#273140] font-medium w-full">1920 -yil Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Dolorem necessitatibus delectus officiis dignissimos corporis in a
                    sit ratione asperiores dolores placeat soluta libero, magnam laudantium o'zbekiston
                    Respublikasiga asos solingan yil lorem lorem10</li>
            </div>
        </div>
    )
}

export default Content