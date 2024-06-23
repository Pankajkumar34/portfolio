import React from 'react';
const techPoint = [
    {
        tech: "HTML",
        percentage: 90
    },
    {
        tech: "css",
        percentage: 60
    },
    {
        tech: "Tailwind css",
        percentage: 90
    },
    {
        tech: "Bootstrap",
        percentage: 50
    },
    {
        tech: "Javascript",
        percentage: 80
    },
    {
        tech: "Node Js",
        percentage: 90
    },
    {
        tech: "Express Js",
        percentage: 90
    },
    {
        tech: "Rect Js",
        percentage: 90
    },
    {
        tech: "Next Js",
        percentage: 70
    },
    {
        tech: "Mongo Db",
        percentage: 90
    }, {
        tech: "Mysql",
        percentage: 50
    },
]
const Progressbar = ({ data }) => {
    return (
        <div className="space-y-5">
            {/* Progress 1 */}
            {
                techPoint.map((item,index) => {
                    return (
                        <div key={index}>
                            <p  className='text-white pl-5 py-2'>{item.tech}</p>
                            <div className="flex w-full h-4 bg-gray-200 rounded-full overflow-hidden" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">

                                <div className="flex flex-col justify-center rounded-full overflow-hidden bg-[#fec544] text-xs text-black font-serif font-bold text-[15px] p-2 text-center whitespace-nowrap transition duration-500" style={{ width: item.percentage+"%" }}>{item.percentage+"%"}</div>
                            </div>

                        </div>
                    )
                })
            }
           
        </div>
    );
};

export default Progressbar;
