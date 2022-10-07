import EnergyCard from "../components/EnergyCard";

const Energy = ({energyData}) => {
    return ( 
        <div className="md:my-12 my-6 md:mx-16 mx-6">
            <section>
               <h1 className="md:my-4 my-2 lg:text-3xl md:text-2xl text-xl font-semibold text-gray-800">Energy</h1>
               <div className="grid md:grid-cols-3 sm:grid-cols-2 md:gap-8 gap-4">
                    {
                         energyData.map((energy) => (
                              <EnergyCard energy={energy} />
                         ))
                    }
               </div>
          </section>
        
        </div>
     );
}
 
export default Energy;