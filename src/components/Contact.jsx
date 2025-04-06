import { useState } from 'react';
import axios from 'axios';

function ContactForm() {
  const [formData, setFormData] = useState({
    category: '',
    subcategory: '',
    location: '',
    budget: '',
    name: '',
    email: '',
    mobile: '',
    requirement: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Check if any field is empty
    for (let [key, value] of Object.entries(formData)) {
      if (!value) {
        alert(`Please fill in the ${key} field.`);
        return;
      }
    }
  
    try {
      const response = await axios.post(
        import.meta.env.VITE_API_URL+`contactform/addForm`,
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
  
      console.log('Success:', response.data);
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Error submitting form.');
    }
  };  

  return (
    <div className="flex select-none justify-center font-mono py-6 sm:py-12 items-center h-auto p-2 sm:p-6">
      <div className="bg-white shadow-lg rounded-lg p-4 sm:p-8 w-full max-w-6xl border">
        <h2 className="text-darkprimary text-center font-bold text-base sm:text-2xl">
          India's #1 Business Portal for B2B
        </h2>
        <p className="text-center text-xs sm:text-lg text-darkprimary mb-3 sm:mb-6">
          Submit here & Get Verified Vendors
        </p>

        <form
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="block text-xs font-semibold mb-1">Category</label>
            <select name="category" onChange={handleChange} className="w-full p-1.5 sm:p-2 border rounded-md text-xs sm:text-sm">
              <option>Select category</option>
              <option value="Books">Books</option>
              <option value="Ice Cream">Ice Cream</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1">Sub Category</label>
            <select name="subcategory" onChange={handleChange} className="w-full p-1.5 sm:p-2 border rounded-md text-xs sm:text-sm">
              <option>Select Sub Category</option>
              <option value="Book1">Book1</option>
              <option value="Ice1">Ice1</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1">Location</label>
            <input type="text" name="location" onChange={handleChange} className="w-full p-1.5 sm:p-2 border rounded-md text-xs sm:text-sm" placeholder="Enter Location" />
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1">Expected Budget</label>
            <input type="number" name="budget" onChange={handleChange} className="w-full p-1.5 sm:p-2 border rounded-md text-xs sm:text-sm" placeholder="Enter budget" />
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1">Name</label>
            <input type="text" name="name" onChange={handleChange} className="w-full p-1.5 sm:p-2 border rounded-md text-xs sm:text-sm" />
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1">Email ID</label>
            <input type="email" name="email" onChange={handleChange} className="w-full p-1.5 sm:p-2 border rounded-md text-xs sm:text-sm" />
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1">Mobile No.*</label>
            <input type="number" name="mobile" onChange={handleChange} className="w-full p-1.5 sm:p-2 border rounded-md text-xs sm:text-sm" />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold mb-1">Your Requirement</label>
            <textarea name="requirement" onChange={handleChange} className="w-full p-1.5 sm:p-2 border rounded-md text-xs sm:text-sm" rows="2"></textarea>
          </div>

          <div className="flex items-start sm:col-span-2">
            <input type="checkbox" className="mr-2 mt-0.5 accent-darkprimary" />
            <span className="text-xs text-darkprimary">
              I hereby agree to all the terms and conditions
            </span>
          </div>

          <div className="sm:col-span-2 flex justify-center mt-2">
            <button type="submit" className="w-auto px-20 bg-gradient-to-r from-primary to-darkprimary text-white py-1.5 sm:py-2 rounded-md font-bold text-xs sm:text-sm hover:bg-darkprimary transition-all duration-300 transform hover:scale-105">
              SUBMIT YOUR REQUIREMENT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
