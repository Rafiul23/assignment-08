

const Banner = ({handleSearch}) => {
    return (
        <div className=" relative pt-4">
            <div className=" bg-[url('https://i.ibb.co/tL4YRtn/help-people.jpg')] bg-cover opacity-25 h-[70vh]">
                
            </div>
            <h1 className="text-xl md:text-3xl lg:text-5xl md:left-40 md:top-28 font-bold absolute lg:top-44 top-20 left-16  lg:left-80 ">I Grow By Helping People In Need</h1>

            <div className="absolute top-32 left-16 md:top-40 md:left-56 lg:top-64 lg:left-[550px] flex">
           <form className="flex" onSubmit={handleSearch}>

           <input name='text' type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

            <input type="submit" className="btn ml-2 bg-[#FF444A] text-white" value="search"/>
           </form>
            </div>
        </div>
    );
};

export default Banner;