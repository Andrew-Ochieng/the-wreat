import AgricultureCard from "../components/AgricultureCard";

const Agriculture = ({agricultureData}) => {
    return ( 
        <div className="md:my-24 my-12 md:mx-16 mx-6">
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
 
export default Agriculture;