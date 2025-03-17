"use client";

import {Button} from "@/components/button";
import {Input} from  "@/components/ui/input";
import {Textarea} from "@/components/Textarea";


import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import {FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from "react-icons/fa";

const info = [
    {
        icon: <FaPhoneAlt/>,
        title: "Phone",
        description: "(+852) 5634 5890"
    },
    {
        icon: <FaEnvelope/>,
        title: "Email",
        description: "kartikrec28@gmail.com"
    },
    {
        icon: <FaMapMarkerAlt/>,
        title: "Address",
        description: "1001, Hall 14, Student Residence, City University of Hong Kong"
    }
];

import {motion} from "framer-motion";

const Contact = () => {
    return (
        <motion.section 
        intial = {{opacity:0}}
        animate = {{opacity:1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}}
        >
            
        </motion.section>
    )
}

export default Contact;