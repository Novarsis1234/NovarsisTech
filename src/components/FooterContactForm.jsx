import React, { useState } from "react";
import Reveal from "./Reveal";
import { useForm, ValidationError } from "@formspree/react";

const FooterContactForm = () => {
  const [state, handleSubmit] = useForm("mvzppygr"); // 🔥 SAME FORM ID

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Handle change
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Validation
  const validate = () => {
    const newErrors = {};
    if (!formData.name || formData.name.length < 3)
      newErrors.name = "Name must be at least 3 characters.";
    if (!/^[0-9]{10}$/.test(formData.mobile))
      newErrors.mobile = "Enter valid 10-digit mobile number.";
    if (!formData.subject) newErrors.subject = "Subject is required.";
    if (!formData.message) newErrors.message = "Message is required.";
    return newErrors;
  };

  // Submit
  const onSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      await handleSubmit(e); // 🔥 Formspree submit
      setFormData({ name: "", mobile: "", subject: "", message: "" });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  // Success UI
  if (state.succeeded) {
    return (
      <div className="bg-[#1f3c88] rounded-xl p-6 text-center text-white">
        <h3 className="text-xl font-semibold mb-2">Thank You 🙌</h3>
        <p>Your message has been sent successfully.</p>
      </div>
    );
  }

  return (
    <div className="bg-[#1f3c88] rounded-xl p-6">
      <Reveal>
        <h3 className="text-xl font-semibold mb-4 text-center text-white">
          Contact Us
        </h3>
      </Reveal>

      <form onSubmit={onSubmit} className="space-y-4">
        {/* Name */}
        <Reveal>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-md text-white bg-[#111b2e] placeholder-gray-400 focus:outline-none"
          />
          {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}
        </Reveal>

        {/* Mobile */}
        <Reveal>
          <input
            type="tel"
            name="mobile"
            placeholder="Phone Number"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full p-3 rounded-md text-white bg-[#111b2e] placeholder-gray-400 focus:outline-none"
          />
          {errors.mobile && (
            <p className="text-red-400 text-sm">{errors.mobile}</p>
          )}
        </Reveal>

        {/* Subject */}
        <Reveal>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-3 rounded-md text-white bg-[#111b2e] placeholder-gray-400 focus:outline-none"
          />
          {errors.subject && (
            <p className="text-red-400 text-sm">{errors.subject}</p>
          )}
        </Reveal>

        {/* Message */}
        <Reveal>
          <textarea
            name="message"
            placeholder="Message"
            rows="3"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded-md text-white bg-[#111b2e] placeholder-gray-400 focus:outline-none"
          />
          {errors.message && (
            <p className="text-red-400 text-sm">{errors.message}</p>
          )}
        </Reveal>

        {/* Hidden Formspree fields */}
        <input type="hidden" name="_subject" value="Footer Contact Form" />
        <input type="text" name="_gotcha" className="hidden" />

        {/* Submit */}
        <Reveal>
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full bg-[#00A3FF] hover:bg-[#008AD6] text-white font-semibold py-3 rounded-md transition"
          >
            {state.submitting ? "Sending..." : "Send Message"}
          </button>
        </Reveal>

        <ValidationError errors={state.errors} />
      </form>
    </div>
  );
};

export default FooterContactForm;
