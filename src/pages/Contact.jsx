import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult("");

    try {
      const res = await fetch("https://protfolio-server-code.onrender.com/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setResult(data.message);
    } catch (err) {
      setResult("Something went wrong!");
    }

    setLoading(false);
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto" }}>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
          style={{ width: "100%", padding: "10px", margin: "8px 0" }}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={formData.email}
          onChange={handleChange}
          style={{ width: "100%", padding: "10px", margin: "8px 0" }}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows="5"
          value={formData.message}
          onChange={handleChange}
          style={{ width: "100%", padding: "10px", margin: "8px 0" }}
        ></textarea>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            background: "black",
            color: "white",
            cursor: "pointer",
          }}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      {result && <p style={{ marginTop: "10px", color: "green" }}>{result}</p>}
    </div>
  );
};

export default Contact;
