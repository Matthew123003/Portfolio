"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import {FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';


const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(302) 476-0430",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "Matthew123003@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    description: "Wilmington, DE 19806",
  },
];

const Contact = () => {
  // Step 1: Set up state for form inputs
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  // Step 2: Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      // Send email using EmailJS
      await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
        firstname: formData.firstname,
        lastname: formData.lastname,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
      }, 'YOUR_USER_ID');

      // Clear the form after successful submission
      setFormData({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });

      alert("Message sent successfully!"); // Optional: success message
    } catch (error) {
      console.error('Failed to send email:', error);
      alert("Failed to send message. Please try again."); // Optional: error message
    }
  };

  // Step 3: Update input values and handle selection change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  
  return (
    <motion.section 
        initial={{opacity: 0}} 
        animate={{
          opacity: 1, 
          transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}
        }}
        className="py-6"
      >
        <div className="container mx-auto">
         <div className="flex flex-col xl:flex-row gap-[30px]">
            {/* form */}
            <div className="xl:w-[54%] order-2 xl:order-none">
              <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                <h3 className="text-4xl text-accent">
                  Let&apos;s work together
                </h3>
                <p className="text-white/60">
                  Please leave some contact information and I will respond quickly to discuss more.
                </p>
                {/* input */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input type="firstname" placeholder="First name" />
                  <Input type="lastname" placeholder="Last name" />
                  <Input type="email" placeholder="Email address" />
                  <Input type="phone" placeholder="Phone number" />
                </div>
                {/* select */}
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a service</SelectLabel>
                      <SelectItem value="bed">Backend Development</SelectItem>
                      <SelectItem value="fed">Frontend Development</SelectItem>
                      <SelectItem value="wed">Web Development</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {/* text area */}
                <Textarea className="h-[200px]" placeholder="Please type your message here" />
                {/* button */}
                <Button size="md" className="max-w-40">Send message</Button>
              </form>
            </div>
            {/* info */}
            <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
              <ul className="flex flex-col gap-10">
                {info.map((item, index) => {
                  return (
                    <li key={index} className="flex items-center gap-6">
                      <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                        <div className="text-[28px]">{item.icon}</div>
                      </div>
                      <div className="flex-1">
                        <p className="text-white/60">{item.title}</p>
                        <h3 className="text-xl">{item.description}</h3>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
         </div>
        </div>
      </motion.section>
  )
}

export default Contact