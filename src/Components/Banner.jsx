

const Banner = () => {
    return (
        <div className="mx-auto relative container p-10">
            <div className=" bg-[url('https://i.ibb.co/tL4YRtn/help-people.jpg')] bg-cover opacity-25 h-[70vh]">
                
            </div>
            <div className="absolute top-60 left-[500px] flex">
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            <button className="btn ml-2 bg-[#FF444A] text-white">Search</button>
            </div>
        </div>
    );
};

export default Banner;