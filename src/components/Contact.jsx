function ContactForm() {
    return (
        <div className="flex select-none justify-center font-mono py-6 sm:py-12 items-center h-auto p-2 sm:p-6">
            <div className="bg-white shadow-lg rounded-lg p-4 sm:p-8 w-full max-w-6xl border">
                
                {/* Heading */}
                <h2 className="text-darkprimary text-center font-bold text-base sm:text-2xl">
                    India's #1 Business Portal for B2B
                </h2>
                <p className="text-center text-xs sm:text-lg text-darkprimary mb-3 sm:mb-6">
                    Submit here & Get Verified Vendors
                </p>

                {/* Form */}
                <form className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
                    
                    {/* Category */}
                    <div>
                        <label className="block text-xs font-semibold mb-1">Category</label>
                        <select className="w-full p-1.5 sm:p-2 border rounded-md text-xs sm:text-sm">
                            <option>Select category</option>
                        </select>
                    </div>

                    {/* Sub Category */}
                    <div>
                        <label className="block text-xs font-semibold mb-1">Sub Category</label>
                        <select className="w-full p-1.5 sm:p-2 border rounded-md text-xs sm:text-sm">
                            <option>Select Sub Category</option>
                        </select>
                    </div>

                    {/* Location */}
                    <div>
                        <label className="block text-xs font-semibold mb-1">Location</label>
                        <input 
                            type="text" 
                            className="w-full p-1.5 sm:p-2 border rounded-md text-xs sm:text-sm" 
                            placeholder="Enter Location"
                        />
                    </div>

                    {/* Budget */}
                    <div>
                        <label className="block text-xs font-semibold mb-1">Expected Budget</label>
                        <div className="flex flex-col sm:flex-row gap-2">
                            <select className="p-1.5 sm:p-2 border rounded-md w-full sm:w-auto text-xs sm:text-sm">
                                <option>Budget per unit</option>
                            </select>
                            <input 
                                type="text" 
                                className="flex-1 p-1.5 sm:p-2 border rounded-md text-xs sm:text-sm" 
                                placeholder="Enter budget"
                            />
                        </div>
                    </div>

                    {/* Name */}
                    <div>
                        <label className="block text-xs font-semibold mb-1">Name</label>
                        <input 
                            type="text" 
                            className="w-full p-1.5 sm:p-2 border rounded-md text-xs sm:text-sm"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-xs font-semibold mb-1">Email ID</label>
                        <input 
                            type="email" 
                            className="w-full p-1.5 sm:p-2 border rounded-md text-xs sm:text-sm"
                        />
                    </div>

                    {/* Mobile Number */}
                    <div>
                        <label className="block text-xs font-semibold mb-1">Mobile No.*</label>
                        <input 
                            type="tel" 
                            className="w-full p-1.5 sm:p-2 border rounded-md text-xs sm:text-sm"
                        />
                    </div>

                    {/* Requirement */}
                    <div className="sm:col-span-2">
                        <label className="block text-xs font-semibold mb-1">Your Requirement</label>
                        <textarea 
                            className="w-full p-1.5 sm:p-2 border rounded-md text-xs sm:text-sm" 
                            rows="2"
                        ></textarea>
                    </div>

                    {/* Terms & Conditions */}
                    <div className="flex items-start sm:col-span-2">
                        <input type="checkbox" className="mr-2 mt-0.5 accent-darkprimary" />
                        <span className="text-xs text-blue-600">
                            I hereby agree to all the terms and conditions
                        </span>
                    </div>

                    {/* Submit Button */}
                    <div className="sm:col-span-2 mt-2">
                        <button 
                            className="w-full bg-primary text-white py-1.5 sm:py-2 rounded-md font-bold text-xs sm:text-sm
                                     hover:bg-darkprimary transition-all duration-300 transform hover:scale-105"
                        >
                            SUBMIT YOUR REQUIREMENT
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;
