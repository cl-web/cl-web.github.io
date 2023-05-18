import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-700 text-white py-10 mt-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div>
            <h3 className="text-2xl mb-3">Web CL</h3>
            <p className="mb-3">Somos una empresa dedicada a proveer soluciones de software de alta calidad.</p>
          </div>
          <div>
            <h3 className="text-2xl mb-3">Contacto</h3>
            <p className="mb-3">Email: info@webcl.com</p>
            <p className="mb-3">Teléfono: +56 9 1234 5678</p>
          </div>
          <div>
            <h3 className="text-2xl mb-3">Dirección</h3>
            <p className="mb-3">123 Calle Principal, Santiago, Chile</p>
          </div>
        </div>
        <div className="text-center mt-6">
          <p>Copyright © {new Date().getFullYear()} Web CL. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
