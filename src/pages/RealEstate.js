
import RealEstateCard from "../components/RealEstateCard";

const RealEstate = ({realEstateData}) => {
    return ( 
        <div className="md:my-24 my-12 md:mx-16 mx-6">
            <section>
               <h1 className="md:my-4 my-2 lg:text-3xl md:text-2xl text-xl font-semibold text-gray-800">Real Estate </h1>
               <div className="grid md:grid-cols-3 sm:grid-cols-2 md:gap-8 gap-4 ">
                    {
                         realEstateData.map((realEstate) => (
                              <RealEstateCard realEstate={realEstate} />
                         ))
                    }
               </div>
          </section>
        </div>
     );
}
 
export default RealEstate;