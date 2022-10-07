import AgricultureCard from "../components/AgricultureCard";

const Agriculture = ({agricultureData}) => {
    return ( 
        <div className="md:my-24 my-12 md:mx-16 mx-6">
            <div className="grid md:grid-cols-3 sm:grid-cols-2 md:gap-8 gap-4">
               {
                    agricultureData.map((agriculture) => (
                         <AgricultureCard agriculture={agriculture} />
                    ))
               }
            </div>
        </div>
     );
}
 
export default Agriculture;