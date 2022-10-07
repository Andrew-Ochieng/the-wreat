import TransportCard from "../components/TransportCard"
const Transport = ({transportData}) => {

    // console.log(blogs.transport)

    return ( 
        <div className="md:m-8 m-4">
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
        
        </div>
     );
}
 
export default Transport;