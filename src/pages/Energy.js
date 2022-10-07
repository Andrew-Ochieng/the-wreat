import EnergyCard from "../components/EnergyCard";

const Energy = ({energyData}) => {
    return ( 
        <div className="md:my-24 my-12 md:mx-16 mx-6">
            <div className="grid md:grid-cols-3 sm:grid-cols-2 md:gap-8 gap-4">
               {
                    energyData.map((energy) => (
                         <EnergyCard energy={energy} />
                    ))
               }
          </div>
        
        </div>
     );
}
 
export default Energy;