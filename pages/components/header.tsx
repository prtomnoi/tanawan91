import React from "react";

const Header = () => {
  function changeBackgroundColor() {
    const scrollY = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const percentage = (scrollY / maxScroll) * 100;
    var navigation = document.getElementById("menu-header");
    // Adjust the colors and thresholds as needed
    if (percentage > 18) {
      navigation?.classList.add("header-color");
    } else {
      navigation?.classList.remove("header-color");
    }
  }
  React.useEffect(() => {
    window.addEventListener('scroll', changeBackgroundColor);
  }, []);
  
  return (
    <div className="relative">
    <div className="fixed top-0 left-0 w-full text-white p-4 z-10" id="menu-header">
      <header>
        <div className="w-full">
          <div className="w-3/5 grid grid-cols-7 gap-4 mx-auto place-items-center">
            <div>Services</div>
            <div>Projects</div>
            <div><a href="/articles">Publications</a></div>
            <div className="flex justify-center items-center">
              <a href="/"><img src="../../images/new-logo-tanawan91.png" alt="" /></a>
            </div>
            <div>Contact</div>
            <div>About</div>
            <div>TH</div>
          </div>
        </div>
      </header>
    </div>
    
    {/* Other content on your page */}
  </div>
  
  );
};

export default Header;