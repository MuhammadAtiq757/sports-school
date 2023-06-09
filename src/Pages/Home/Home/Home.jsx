import AboutSport from "../../AboutSport/AboutSport";
import PopularInstructor from "../../PopularInstructor/PopularInstructor";
import PopularClases from "../../popularClass/PopularClases";
import Banner from "./Banner/Banner";


const Home = () => {
    return (
        <div>
           <Banner></Banner> 
           <PopularClases>
           </PopularClases>
           <PopularInstructor></PopularInstructor>
           <AboutSport></AboutSport>
        </div>
    );
};

export default Home;