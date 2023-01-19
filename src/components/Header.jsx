import logo from '../img/download.png';
export default function Header({
    heading,
}){
    return(
        <div className="mb-10">
            <div className="flex justify-center">
                <img 
                    alt=""
                    className="h-[12rem] w-[18rem] -mt-10 mb-12"
                    src={logo}/>
            </div>
            <h2 className="mt-6 text-center text-5xl font-sans text-[#04fd8c]">
                {heading}
            </h2>
        </div>
    )
}