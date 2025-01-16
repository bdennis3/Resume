"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button"; // Assuming you have these components
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Information to display beside the form
const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(816)-730-5153",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "braxtondennis3@hotmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Area",
    description: "Kansas City, MO",
  },
];

const Contact = () => {
  const [formStatus, setFormStatus] = useState(null); // Track submission status
  const [isFormSubmitted, setIsFormSubmitted] = useState(false); // Track if form is successfully submitted

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form behavior

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setIsFormSubmitted(true); // Set form as submitted
        setFormStatus("Thank you for your message!"); // Display success message
      } else {
        setFormStatus("There was an error, please try again."); // Show error message if submission fails
      }
    } catch (error) {
      setFormStatus("There was an error, please try again.");
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form Section */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            {isFormSubmitted ? (
              // If the form was submitted, show the thank you message only
              <div className="flex flex-col items-center justify-center p-10 bg-[#27272c] rounded-xl">
                <h3 className="text-4xl text-accent">{formStatus}</h3>
              </div>
            ) : (
              // Form content
              <form
                onSubmit={handleSubmit} // Use custom submit handler
                action="https://formspree.io/f/xvgonepv" // Formspree action URL
                method="POST"
                className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              >
                <h3 className="text-4xl text-accent">let&apos;s work together</h3>
                <p className="text-white/60">
                  If you would like to work together or want me to submit my resume to a job you recommend send me a message!
                </p>

                {/* Input Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input type="text" name="firstname" placeholder="Firstname" required />
                  <Input type="text" name="lastname" placeholder="Lastname" required />
                  <Input type="email" name="email" placeholder="Email Address" required />
                  {/* Removed Phone number input */}
                </div>

                {/* Service Select Dropdown */}
                <Select name="service" required>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select Service</SelectLabel>
                      <SelectItem value="web">Web Development</SelectItem>
                      <SelectItem value="design">UI/UX Design</SelectItem>
                      <SelectItem value="logo">Logo Design</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>

                {/* Message Textarea */}
                <Textarea
                  name="message"
                  className="h-[200px] resize-none"
                  placeholder="Type Your Message Here"
                  required
                />

                {/* Submit Button */}
                <Button size="md" className="max-w-40">
                  Send Message
                </Button>
              </form>
            )}
          </div>

          {/* Info Section */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
