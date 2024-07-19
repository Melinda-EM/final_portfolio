const Contact = () => (
    <section className="py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold text-center">Contact</h2>
        <form className="mt-8 max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Nom</label>
            <input type="text" id="name" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700">Message</label>
            <textarea id="message" className="w-full px-3 py-2 border border-gray-300 rounded-md"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Envoyer</button>
        </form>
      </div>
    </section>
  );
  
export default Contact