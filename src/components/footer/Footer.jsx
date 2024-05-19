import React from 'react';

const Footer = () => {
  return (
    <div>

      <div className="bg-gray-700 text-white py-4">
        <div className="container mx-auto text-center flex flex-col md:flex-row items-center justify-center px-4 md:space-x-10">
          <div className="mb-2 md:mb-0">
            <span className="font-semibold">Müşteri Hizmetleri:</span> +90 123 456 7890
          </div>
          <div className="mb-2 md:mb-0">
            <span className="font-semibold">WhatsApp Destek:</span> +90 123 456 7890
          </div>
        </div>
      </div>

   
      <div className="border-t border-gray-300"></div>
      
 
      <div className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h4 className="font-bold mb-2">Kurumsal Bilgiler</h4>
            <ul>
              <li><span className="hover:underline">Hakkımızda</span></li>
              <li><span className="hover:underline">Kariyer</span></li>
              <li><span className="hover:underline">Mağazalarımız</span></li>
              <li><span className="hover:underline">İletişim</span></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Yardım</h4>
            <ul>
              <li><span className="hover:underline">Sıkça Sorulan Sorular</span></li>
              <li><span className="hover:underline">Kargo ve Teslimat</span></li>
              <li><span className="hover:underline">İade ve Değişim</span></li>
              <li><span className="hover:underline">Gizlilik Politikası</span></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Bizi Takip Edin</h4>
            <ul>
              <li><span className="hover:underline">Facebook</span></li>
              <li><span className="hover:underline">Instagram</span></li>
              <li><span className="hover:underline">Twitter</span></li>
              <li><span className="hover:underline">YouTube</span></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-900 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} SecilGlam. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
