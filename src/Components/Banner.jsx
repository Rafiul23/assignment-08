

const Banner = () => {
    return (
        <div className=" relative pt-4">
            <div className=" bg-[url('https://i.ibb.co/tL4YRtn/help-people.jpg')] bg-cover opacity-25 h-[70vh]">
                
            </div>
            <h1 className="text-5xl font-bold absolute top-44 left-80 ">I Grow By Helping People In Need</h1>

            <div className="absolute top-64 left-[550px] flex">
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            <button className="btn ml-2 bg-[#FF444A] text-white">Search</button>
            </div>
        </div>
    );
};

export default Banner;