import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3000/services') 
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setServices(data)
        })
    },[])

    return (
        <div className="my-10">
            <div>
            <h1 className="text-2xl font-bold text-center">services</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}/>)
                }
            </div>
        </div>
    );
};

export default Services;