import icon from "../assets/images/icon.png"

function Footer() {
    return (
        <div className=" min-h-[500px] flex justify-around items-center ">
            <div className="">
                <img src={icon} alt="" className="w-[300px]" />
            </div>

            <div className="contact-section text-white">
                <h2 className="text-2xl font-bold">Contact Us</h2>
                <p>Phone: </p>
            </div>
        </div>
    )
}

export default Footer