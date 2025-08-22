export default function Contact() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <p className="text-lg text-gray-300 mb-6">
        Have a question or want to get in touch? Fill out the form below or reach us directly at 
        <a href="mailto:info@desertaromas.com" className="text-gold ml-1">info@desertaromas.com</a>.
      </p>
      <form className="grid gap-4">
        <input type="text" placeholder="Your Name" className="p-3 rounded-lg bg-neutral-900 border border-neutral-700 text-white" />
        <input type="email" placeholder="Your Email" className="p-3 rounded-lg bg-neutral-900 border border-neutral-700 text-white" />
        <textarea placeholder="Your Message" rows="5" className="p-3 rounded-lg bg-neutral-900 border border-neutral-700 text-white"></textarea>
        <button type="submit" className="bg-gold text-black font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition">
          Send Message
        </button>
      </form>
    </main>
  );
}
