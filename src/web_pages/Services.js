import React, { useState, useEffect } from "react";

function Services() {
    // set page title w/Effect Hook
    useEffect(() => {
        document.title = 'Our Services';
    }, []);

    // State to manage the list of services
    const [services, setServices] = useState([
        {
            id: 1,
            title: "Graphic Design",
            description: "Eye-catching graphic designs tailored to your brand.",
            image: "icons/graphic-designer.png", 
        },
        {
            id: 2,
            title: "Website Design",
            description: "Create responsive and user-friendly websites for your business.",
            image: "icons/website.png",
        },
        {
            id: 3,
            title: "Branding",
            description: "Build a strong brand identity that resonates with your audience.",
            image: "icons/brand.png",
        },
        {
            id: 4,
            title: "Application Design",
            description: "Design intuitive and engaging applications for various platforms.",
            image: "icons/app-development.png",
        },
        {
            id: 5,
            title: "Software Design",
            description: "Craft robust and scalable software solutions for your needs.",
            image: "icons/application.png",
        },
    ]);

    // Function to add a new service
    const addService = () => {
        const newService = {
            id: services.length + 1,
            title: "New Service",
            description: "Description of the new service.",
            image: "icons/default.png", // Provide a default image path or use a placeholder
        };
        setServices([...services, newService]);
    };

    // Function to delete a service
    const deleteService = (id) => {
        const updatedServices = services.filter(service => service.id !== id);
        setServices(updatedServices);
    };

    return (
        <section className="container my-3">
            <h1>Our Services</h1>
            <p>Explore our range of professional services:</p>
            <div className="row my-5 border py-3 bg-light">
                {services.map((service) => (
                    <div key={service.id} className="col-md-4 col-lg-3 col-sm-6 mb-4">
                        <div className="card services h-100">
                            <img
                                src={`/${service.image}`}
                                className="card-img-top img-fluid w-25 p-2"
                                alt={service.title}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{service.title}</h5>
                                <p className="card-text">{service.description}</p>
                            </div>
                            <div className="card-footer d-flex flex-row justify-content-around bg-primary">
                            <button className="btn btn-danger  btn-sm" onClick={() => deleteService(service.id)}>
                                    Delete Service
                                </button>
                                <a className="btn btn-success btn-sm" href="/contact">
                                    Get in Touch <i className="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* Button to add a new service */}
            <button className="btn btn-primary" onClick={addService}>
                Add New Service
            </button>
        </section>
    );
}

export default Services;
