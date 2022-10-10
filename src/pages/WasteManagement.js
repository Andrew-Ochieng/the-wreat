import WasteManagementCard from "../components/WasteManagementCard"
const WasteManagement = ({wasteManagementData}) => {


    return ( 
        <div className="md:m-8 m-4">
             <section>
               <h1 className="md:my-4 my-2 lg:text-3xl md:text-2xl text-xl font-semibold text-green-800">WasteManagement</h1>
               <div className="grid md:grid-cols-3 sm:grid-cols-2 md:gap-8 gap-4 ">
                    {
                         wasteManagementData.map((wasteManagement) => (
                              <WasteManagementCard wasteManagement={wasteManagement} />
                         ))
                    }
               </div>
          </section>
        
        </div>
     );
}
 
export default WasteManagement;