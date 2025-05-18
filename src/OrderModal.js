import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const OrderModal = ({ productName, isOpen, onClose }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_twsnyto', 'template_h568sk4', form.current, {
      publicKey: 'Va_7NtMaXv8rkOZLo',
    })
    .then(() => {
      alert('Commande envoyée avec succès!');
      onClose();
    }, (error) => {
      alert('Échec de l\'envoi de la commande. Veuillez réessayer.');
      console.error(error);
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-11/12 max-w-lg">
        <h2 className="text-xl font-bold mb-4 text-customColor2">Commander : {productName}</h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <input type="hidden" name="product_name" value={productName} />
          
          <div>
            <label className="block text-sm font-medium">Nom complet :</label>
            <input type="text" name="user_name" required className="w-full rounded px-3 py-1 my-2 outline-none focus:outline-customColor outline-gray-200 transition-all duration-300" />
          </div>

          <div>
            <label className="block text-sm font-medium">Numéro de téléphone :</label>
            <input type="text" name="user_phone" required className="w-full rounded px-3 py-1 my-2 outline-none focus:outline-customColor outline-gray-200 transition-all duration-300" />
          </div>

          <div>
            <label className="block text-sm font-medium">Adresse :</label>
            <input type="text" name="user_address" required className="w-full rounded px-3 py-1 my-2 outline-none focus:outline-customColor outline-gray-200 transition-all duration-300" />
          </div>

          <div>
            <label className="block text-sm font-medium">Commune :</label>
            <input type="text" name="user_commune" required className="w-full rounded px-3 py-1 my-2 outline-none focus:outline-customColor outline-gray-200 transition-all duration-300" />
          </div>

          <div>
            <label className="block text-sm font-medium">Quantité :</label>
            <input type="number" name="product_quantity" min="1" defaultValue="1" required className="w-full rounded px-3 py-1 my-2 outline-none focus:outline-customColor outline-gray-200 transition-all duration-300" />
          </div>

          <div className="flex justify-end gap-4 pt-2">
            <button type="button" onClick={onClose} className="bg-gray-300 hover:bg-gray-400 text-black font-semibold py-2 px-4 rounded">
              Annuler
            </button>
            <button type="submit" className="bg-customColor hover:bg-customColor3 text-white font-semibold py-2 px-4 rounded">
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderModal;
