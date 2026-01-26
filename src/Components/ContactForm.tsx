import { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSending(true);
    const templateParams = {
      user_name: name,
      user_email: email,
      user_message: message,
    };
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error sending email: ", error);
      setSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
    } finally {
      setIsSending(false);
      setName("");
      setEmail("");
      setMessage(""); 
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div>
        <label htmlFor="name" className="block text-lg font-medium">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          required
          minLength={5} // Minimum length of 5 characters
          maxLength={50} // Maximum length of 50 characters
          pattern="^[A-Za-z\s]+$" // Regex to allow only letters and spaces
          title="Please enter a valid name with only letters and spaces"
          className="w-full p-2 mt-2 border border-gray-300 rounded-md bg-transparent shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:outline-none dark:focus:ring-2 dark:focus:ring-slate-300"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-lg font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value.toLowerCase())}
          placeholder="Enter your email"
          required
          maxLength={100}
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" // Regex for a valid email format
          title="Please enter a valid email address (e.g., example@domain.com)"
          className="w-full p-2 mt-2 border border-gray-300 rounded-md bg-transparent shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:outline-none dark:focus:ring-2 dark:focus:ring-slate-300"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-lg font-medium">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Leave us a message!"
          required
          minLength={10}
          maxLength={500}
          title="Message should be between 10 and 500 characters."
          className="w-full p-2 mt-2 border border-gray-300 rounded-md bg-transparent shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:outline-none dark:focus:ring-2 dark:focus:ring-slate-300 resize-none"
        ></textarea>
      </div>

      <button
        type="submit"
        className={`relative w-full p-3 ${
          isSending
            ? "text-gray-300 cursor-not-allowed bg-gray-700"
            : "bg-black text-white dark:bg-white dark:text-black"
        } font-semibold rounded-md overflow-hidden group border-2 border-transparent`}
        disabled={isSending}
      >
        <span className="absolute inset-0 h-0 bg-white dark:bg-black transition-all duration-300 ease-in-out group-hover:h-full"></span>
        <span className="relative z-10 transition-colors duration-300 ease-in-out group-hover:text-black dark:group-hover:text-white">
          {isSending ? "Sending..." : "Submit"}
        </span>
        <span className="absolute inset-0 rounded-md outline-1 outline-black dark:outline-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
      </button>

      {success && (
        <div className="text-center text-green-500 mt-2">
          Message sent successfully!
        </div>
      )}
    </form>
  );
};

export default ContactForm;