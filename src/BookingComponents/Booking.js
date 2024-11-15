import Navbar from '../Navbar';
import Footer from '../Footer';
import BookingHome from './BookingHome';
import {MapPin} from "iconoir-react";
import { Clock, Mail, Phone } from 'iconoir-react/solid'; 
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";




const Booking = () => {
  const [startDate, setStartDate] = useState(null);

  const handleDateChange = (date) => {
    setStartDate(date);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };
  const [selectedValue, setSelectedValue] = useState("");
  const [options, setOptions] = useState(["2", "4", "6", "8", "10", "12", "14", "16", "18", "20"]);
 

  const handleSelectChange = (e) => {
    let value = e.target.value;

    if (value === "other") {
      // Prompt the user to enter a custom number
      const customValue = prompt("Enter the number of persons (1 - 50):");

      // Check if the input is within the allowed range and is a number
      if (customValue && !isNaN(customValue) && customValue >= 1 && customValue <= 50) {
        value = customValue;

        // Add the custom value to options if it doesn't already exist
        if (!options.includes(customValue)) {
          setOptions([...options, customValue]);
        }
      } else {
        alert("Please enter a valid number between 1 and 50.");
        return; // Stop further actions if the input is invalid
      }
    }

    setSelectedValue(value);
  };
  
    const view = {
        backgroundImage:"url('/home.png')",
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        
      }
  
    return ( 
        <section>
            <div className=" h-screen bg-center " style={view}>
             <div className='m-0 p-0 h-screen bg-black bg-opacity-10'>
               <Navbar /> 
              <div >
                <div className="home m-0 p-0 ">
                 <BookingHome/>
               </div>
              </div>
             </div>
             </div>
        <div className=" m-0 w-full p-0 h-fit bg-center  bg-[#fee2b3] lg:px-40 md:px-10 sm:px-6 px-4 food lg:py-40 py-6">
        <div className="flex flex-col md:flex-row justify-between gap-4">
    
    {/* Contact Info on the Left */}
    <div className="w-full md:w-1/3 space-y-8 md:pb-10 sm:pb-10 lg:pb-0 pb-10 ">
      <div className='flex items-center gap-5'>
         <MapPin className="text-white bg-rose-600 rounded-3xl p-2 text-xl sm:text-2xl " />
          <div>
            <h4>Location:</h4>
           <p className='text-sm '>9, Emmanuel Road. Ibeju Lekki, Lagos</p>
          </div>
      </div> 
      <div className='flex items-center gap-3'>
         <Clock className="text-white bg-rose-600 rounded-3xl p-2 text-xl sm:text-2xl " />
          <div>
            <h4>Open Hours:</h4>
           <p className='text-sm '>Sunday - Satur days</p>
           <p className='text-sm'>10:00AM - 10:00PM</p>
          </div>
      </div>

      <div className='flex items-center gap-3'>
         <Phone className="text-white bg-rose-600 rounded-3xl p-2 text-xl sm:text-2xl " />
          <div>
            <h4>Phone:</h4>
            <p className='text-sm'>0906-5748-920</p>
          </div>
      </div >
      <div className='flex items-center gap-3'>
          <Mail className="text-white bg-rose-600 rounded-3xl p-2 text-xl sm:text-2xl " />
          <div >
            <h4>Email:</h4>
            <p>info@thefrances.com</p>
          </div>
      </div>
    </div>
    <div className="w-full md:w-2/3">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <input 
          required
            type="text" 
            placeholder="Your Name" 
            className="w-full p-3 border border-black bg-inherit rounded-lg placeholder-black opacity-80" 
          />
          <input 
          required
            type="email" 
            placeholder="Your Email" 
            className="w-full p-3 border border-black bg-inherit rounded-lg placeholder-black opacity-80" 
          />
        </div>

        <input 
        required
          type="text" 
          placeholder="Subject" 
          className="w-full p-3 border border-black bg-inherit rounded-lg placeholder-black opacity-80" 
        />

        <div className="flex flex-col sm:flex-row gap-4 w-full">
        
          
            <div className='w-1/2'>
              <DatePicker
                selected={startDate}
                onChange={handleDateChange}
                placeholderText="Pick a Date"
                required
                className="w-full p-3 border border-black rounded-lg bg-inherit focus:outline-none  placeholder-black opacity-80 block"
                
                  wrapperClassName="w-full"
              />
            </div>
               <select
       className="w-full sm:w-1/2 p-3 border border-black bg-inherit rounded-lg opacity-80"
      value={selectedValue}
      onChange={handleSelectChange}
      required
    >
       <option value="" disabled>
        Number of Persons
      </option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option} persons
        </option>
      ))}
      <option value="other">Other</option>
    </select>
         
      
      </div>

        <textarea 
        required
          placeholder="Your Message" 
          className="w-full h-40 p-3 border border-black bg-inherit rounded-lg placeholder-black opacity-60"
        ></textarea>

        <button 
          type="submit" 
          className="lg:w-1/4 w-1/2 bg-rose-600 text-white py-3 rounded-full hover:bg-rose-700 transition duration-300 text-sm"
        >
          Book A Table Now
        </button>
      </form>
    </div>
  </div>
       </div>
       <div className="m-0 p-0 ">
          <Footer/> 
        </div>
        </section>
     );
}
 
export default Booking;