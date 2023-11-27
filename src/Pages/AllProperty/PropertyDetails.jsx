
import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../Components/SectionTitle";


import Cover from "../../Shared/Cover/Cover";
import coverBg from '../../assets/coverbg.jpg'

const PropertyDetails = () => {
    const [{title}] = useLoaderData()
    console.log(title)
    return (
        <div className="max-w-7xl mx-auto">
           <Cover img={coverBg} title={'Unlock Your Dream Home'} description={'Where Dreams Find a Home, and Homes Become Dreams. Explore Possibilities Beyond Walls.'}></Cover>
           <SectionTitle heading={'Property Details'}></SectionTitle>
           <div>
            <div>
                
            </div>
           </div>
        </div>
    );
};

export default PropertyDetails;