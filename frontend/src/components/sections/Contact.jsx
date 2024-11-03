import { useRef, useState } from "react";
import WindowsContainer from "../layout/WindowsContainer";
import emailjs from '@emailjs/browser';
import { WindowsButton } from "../ui/Button";

emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

export const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('idle'); 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
        const mainMessageParams = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message
        };

        await emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
            mainMessageParams,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );

        const confirmationParams = {
            to_email: formData.email,
            name: formData.name
        };
        
        await emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CONFIRMATION,
            confirmationParams,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );

        setStatus('success');
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
        });
    } catch (error) {
        console.error('Erreur détaillée:', error.text || error.message);
        setStatus('error');
    }
};

  return (
    <WindowsContainer id="contact" title="Contact" item="contact">
      <div className="border-2 border-purple p-4 md:p-6">
        <div className="bg-light-blue p-4 md:p-6 text-center">
          <p className="text-lg md:text-2xl font-fsGravity mb-2 text-dark-blue">
            Envoyez-moi un message pour toute proposition de contrat, mission ou simplement des renseignements !
          </p>
          <p className="font-consolas text-base md:text-lg text-dark-blue">
            Je suis impatiente de discuter de vos idées et de collaborer ensemble.
          </p>
        </div>

        <div className="bg-light-blue p-4">
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            {[
              { id: 'name', label: 'Nom', type: 'text', placeholder: 'John Doe' },
              { id: 'email', label: 'Email', type: 'email', placeholder: 'john.doe@mail.fr' },
              { id: 'phone', label: 'Téléphone', type: 'tel', placeholder: '0600000000'},
              { id: 'message', label: 'Message', type: 'textarea', placeholder: 'Bonjour, je vous contacte au sujet de ...'}
            ].map((field) => (
              <div key={field.id} className="bg-light-blue border-b-2 border-purple p-4">
                <label htmlFor={field.id} className="block mb-2 font-consolas text-lg md:text-xl text-dark-blue">
                  {field.label}:
                </label>
                {field.type === 'textarea' ? (
                  <textarea
                    id={field.id}
                    name={field.id}
                    rows="4"
                    value={formData[field.id]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className="w-full p-2 bg-white border-2 border-gray-800 border-purple font-consolas focus:outline-none focus:border-dark-blue"
                  />
                ) : (
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    value={formData[field.id]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className="w-full p-2 text-sm md:text-base bg-white border-2 border-gray-800 border-purple font-consolas focus:outline-none focus:border-dark-blue"
                  />
                )}
              </div>
            ))}

            {status === 'success' && (
              <div className="text-center">
                <p className="text-green-600 font-consolas">Message envoyé avec succès !</p>
              </div>
            )}
            
            {status === 'error' && (
              <div className="text-center">
                <p className="text-red-600 font-consolas">Une erreur est survenue. Veuillez réessayer.</p>
              </div>
            )}

            <div className="flex justify-center mt-6">
              <WindowsButton
                type="submit"
                disabled={status === 'sending'}
                className={status === 'sending' ? 'opacity-50 cursor-not-allowed' : ''}
              >
                <span className="mr-2">📨</span>
                {status === 'sending' ? 'Envoi...' : 'Envoyer'}
              </WindowsButton>
            </div>
          </form>
        </div>
      </div>
    </WindowsContainer>
  );
};
