'use client'
import React from 'react';

const services = [
  { 
    title: 'Plan Básico', 
    description: 'Diseño de sitio web de una sola página, hosting gratuito por un año.', 
    price: 'CLP $120.000' 
  },
  { 
    title: 'Plan Intermedio', 
    description: 'Diseño de sitio web administrable, hosting gratuito por un año.', 
    price: 'CLP $190.000' 
  },
  { 
    title: 'Plan Avanzado', 
    description: 'Diseño de sitio web administrable con funcionalidades avanzadas, hosting gratuito por un año.', 
    price: 'CLP $390.000' 
  },
];

function Services() {
  return (
    <div className="bg-blue-700 text-white py-10" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl mb-10 text-center">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-5 text-center text-black">
              <h3 className="text-2xl mb-5">{service.title}</h3>
              <p className="mb-5">{service.description}</p>
              <div className="text-blue-700 text-xl font-bold">{service.price}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
