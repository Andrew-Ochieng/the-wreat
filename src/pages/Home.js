import EnergyCard from "../components/EnergyCard";
import TransportCard from "../components/TransportCard"
import AgricultureCard from "../components/AgricultureCard";

const Home = ({ energyData, transportData, agricultureData }) => {
//     console.log(energyData, transport)


    return (
     <div className="md:m-8 m-4 md:space-y-32 space-y-8">
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

          <section>
               <h1 className="md:my-4 my-2 lg:text-3xl md:text-2xl text-xl font-semibold text-green-800">Transport</h1>
               <div className="grid md:grid-cols-3 sm:grid-cols-2 md:gap-8 gap-4 ">
                    {
                         transportData.map((transport) => (
                              <TransportCard transport={transport} />
                         ))
                    }
               </div>
          </section>

          <section>
               <h1 className="md:my-4 my-2 lg:text-3xl md:text-2xl text-xl font-semibold text-gray-800">Agriculture </h1>
               <div className="grid md:grid-cols-3 sm:grid-cols-2 md:gap-8 gap-4 ">
                    {
                         agricultureData.map((agriculture) => (
                              <AgricultureCard agriculture={agriculture} />
                         ))
                    }
               </div>
          </section>
        
     </div>
     );
}
 
export default Home;