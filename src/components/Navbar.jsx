
function Navbar(){
    
    return (
        <div className="h-[80px] flex justify-between items-center z-50">
            <div className="z-50">
                <img src="/images/campfly_logo.png" alt="campfly" />
            </div>
            <div className="flex w-[40%] justify-between items-center px-20">
                <p className="z-50">Honeymoon</p>
                <p className="z-50">Family/Friends</p>
                <p className="z-50">Solo</p>
                <button className="z-50">Sign in</button>
            </div>

        </div>
        
    )
}

export default Navbar;