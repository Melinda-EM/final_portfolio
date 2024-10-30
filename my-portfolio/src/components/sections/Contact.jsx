import { WindowsContainer } from "../layout/WindowsContainer";

export const Contact = () => {
  return (
    <WindowsContainer id="contact" title="Contact">
      <h2 className="text-4xl text-dark-blue font-fsGravity font-bold mb-4">Contact</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">Nom</label>
          <input 
            id="name" 
            placeholder="Votre nom" 
            className="border rounded-md p-2 w-full" 
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">Email</label>
          <input 
            id="email" 
            type="email" 
            placeholder="Votre email" 
            className="border rounded-md p-2 w-full" 
          />
        </div>
        <div>
          <label htmlFor="phone" className="block mb-1">Téléphone</label>
          <input 
            id="phone" 
            type="tel" 
            placeholder="Votre numéro de téléphone" 
            className="border rounded-md p-2 w-full" 
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1">Message</label>
          <textarea 
            id="message" 
            placeholder="Votre message" 
            rows="4" 
            className="border rounded-md p-2 w-full" 
          />
        </div>
        <div className='flex justify-center items-center'>
          <button type="submit" className="w-64 bg-purple text-white rounded-md p-2 cursor-hand">
            Envoyer
          </button>
        </div>
      </form>
    </WindowsContainer>
  );
};