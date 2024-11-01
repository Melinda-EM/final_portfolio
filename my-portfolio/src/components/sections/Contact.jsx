import WindowsContainer from "../layout/WindowsContainer";

export const Contact = () => {
  return (
    <WindowsContainer id="contact" title="Contact" item="contact">
      <div className="border-t-2 border-l-2 border-b-2 border-r-2 border-purple">
        <div className="bg-light-blue p-4 text-center">
          <p className="text-2xl font-fsGravity mb-2 text-dark-blue">
            Envoyez-moi un message pour toute proposition de contrat, mission ou simplement des renseignements !
          </p>
          <p className="font-consolas text-lg text-dark-blue">
            Je suis impatiente de discuter de vos idées et de collaborer ensemble.
          </p>
        </div>

        <div className="bg-light-blue p-4">
          <form className="space-y-4">
            {[
              { id: 'name', label: 'Nom', type: 'text', placeholder: 'Jonh Doe' },
              { id: 'email', label: 'Email', type: 'email', placeholder: 'john.doe@mail.fr' },
              { id: 'phone', label: 'Téléphone', type: 'tel', placeholder: '0600000000'},
              { id: 'message', label: 'Message', type: 'textarea', placeholder: 'Bonjour, je vous contacte au sujet de ...'}
            ].map((field) => (
              <div key={field.id} className="bg-light-blue border-b-2 border-purple p-4">
                <label htmlFor={field.id} className="block mb-2 font-consolas text-xl text-dark-blue">
                  {field.label}:
                </label>
                {field.type === 'textarea' ? (
                  <textarea
                    id={field.id}
                    rows="4"
                    placeholder={field.placeholder}
                    className="
                      w-full p-2 
                      bg-white 
                      border-t-2 border-l-2 border-gray-800 
                      border-b-2 border-r-2 border-purple 
                      font-consolas
                      focus:outline-none
                      focus:border-dark-blue
                    "
                  />
                ) : (
                  <input
                    type={field.type}
                    id={field.id}
                    placeholder={field.placeholder}
                    className="
                      w-full p-2 
                      bg-white 
                      border-t-2 border-l-2 border-gray-800 
                      border-b-2 border-r-2 border-purple 
                      font-consolas
                      focus:outline-none
                      focus:border-dark-blue
                    "
                  />
                )}
              </div>
            ))}

            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="
                  bg-light-blue 
                  border-t-2 border-l-2
                  border-b-2 border-r-2 border-purple
                  px-8 py-2
                  font-consolas
                  text-dark-blue
                  active:border-t-2 
                  active:border-l-2 
                  active:border-b-2 
                  active:border-r-2 
                  active:border-white
                  focus:outline-none
                  cursor-hand
                  transition-colors
                "
              >
                <span className="mr-2">📨</span>
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
    </WindowsContainer>
  );
};