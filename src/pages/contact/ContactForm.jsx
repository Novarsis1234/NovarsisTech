import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("mvzppygr"); // ✅ same ID

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name || formData.name.length < 3)
      newErrors.name = "Name must be at least 3 characters.";
    if (!/^\d{10}$/.test(formData.mobile))
      newErrors.mobile = "Enter a valid 10-digit mobile number.";
    if (!formData.subject) newErrors.subject = "Subject is required.";
    if (!formData.message) newErrors.message = "Message is required.";
    return newErrors;
  };

  // ✅ IMPORTANT: NO preventDefault here
  const onSubmit = async (e) => {
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      e.preventDefault(); // ❌ submit stop only if validation fails
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    await handleSubmit(e); // ✅ Formspree ko event milta hai
  };

  // ✅ Success UI
  if (state.succeeded) {
    return (
      <section className="w-full bg-gray-50 py-20 px-6">
        <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl p-10 text-center">
          <h2 className="text-3xl font-bold text-green-600 mb-3">
            Message Sent Successfully 🎉
          </h2>
          <p className="text-gray-600">
            Thank you for contacting us. Our team will get back to you shortly.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-gray-50 py-16 px-6">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#fc3c04] mb-2">
          Contact <span className="text-[#345bf3]">Us</span>
        </h1>
        <p className="text-center text-gray-600 mb-10">
          We'd love to hear from you! Fill out the form below.
        </p>

        <form onSubmit={onSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full p-3 border rounded"
          />
          {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-3 border rounded"
          />
          {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border rounded"
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

          {/* Hidden fields */}
          <input type="hidden" name="_subject" value="New Contact Form Submission" />
          <input type="text" name="_gotcha" className="hidden" />

          <button
            type="submit"
            disabled={state.submitting}
            className="w-full bg-gradient-to-r from-[#fc3c04] to-[#345bf3] text-white py-3 rounded"
          >
            {state.submitting ? "Sending..." : "Submit"}
          </button>

          <ValidationError errors={state.errors} />
        </form>
      </div>
    </section>
  );
};

export default Contact;
