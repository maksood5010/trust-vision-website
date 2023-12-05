import Info from "../Info/Info"
import Slider from "../Slider/Slider"
import Brands from "../Brands/Brands"
import Stats from "../Stats/Stats"
import SpecialityList from "../SpecialityList/SpecialityList"
import Growth from "../Growth/Growth"
import Articles from "../Articles/Articles"
import Navbar from "../Navbar/Navbar"
function Home() {
    return (
        <div>
            
            <Slider />
            <Info />
            <Brands />
            <Stats />
            <SpecialityList />
            {/* <Growth /> */}
            <Articles />
        </div>


    )

}
export default Home