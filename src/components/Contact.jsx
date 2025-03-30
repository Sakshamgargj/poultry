function ContactForm() {
    return (
        <div className="flex justify-center font-mono pt-12 sm:pt-16 items-center min-h-screen p-4 sm:p-6">
            <div className="bg-white shadow-lg rounded-lg p-5 sm:p-8 w-full max-w-6xl border">
                
                {/* Heading */}
                <h2 className="text-yellow-600 text-center font-bold text-lg sm:text-2xl">
                    India’s #1 Business Portal for B2B
                </h2>
                <p className="text-center text-sm sm:text-lg text-yellow-600 mb-4 sm:mb-6">
                    Submit here & Get Verified Vendors
                </p>

                {/* Form */}
                <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    
                    {/* Category */}
                    <div>
                        <label className="block text-xs sm:text-sm font-semibold">Category</label>
                        <select className="w-full p-2 border rounded-md focus:ring-2 focus:ring-yellow-500">
                            <option>Select category</option>
                        </select>
                    </div>

                    {/* Sub Category */}
                    <div>
                        <label className="block text-xs sm:text-sm font-semibold">Sub Category</label>
                        <select className="w-full p-2 border rounded-md focus:ring-2 focus:ring-yellow-500">
                            <option>Select Sub Category</option>
                        </select>
                    </div>

                    {/* Location */}
                    <div>
                        <label className="block text-xs sm:text-sm font-semibold">Location</label>
                        <input 
                            type="text" 
                            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-yellow-500" 
                            placeholder="Enter Location"
                        />
                    </div>

                    {/* Budget */}
                    <div>
                        <label className="block text-xs sm:text-sm font-semibold">Expected Budget</label>
                        <div className="flex flex-col sm:flex-row gap-2">
                            <select className="p-2 border rounded-md w-full sm:w-auto focus:ring-2 focus:ring-yellow-500">
                                <option>Budget per unit</option>
                            </select>
                            <input 
                                type="text" 
                                className="flex-1 p-2 border rounded-md focus:ring-2 focus:ring-yellow-500" 
                                placeholder="Enter budget"
                            />
                        </div>
                    </div>

                    {/* Name */}
                    <div>
                        <label className="block text-xs sm:text-sm font-semibold">Name</label>
                        <input 
                            type="text" 
                            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-yellow-500"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-xs sm:text-sm font-semibold">Email ID</label>
                        <input 
                            type="email" 
                            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-yellow-500"
                        />
                    </div>

                    {/* Mobile Number */}
                    <div>
                        <label className="block text-xs sm:text-sm font-semibold">Mobile No.*</label>
                        <input 
                            type="tel" 
                            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-yellow-500"
                        />
                    </div>

                    {/* Requirement */}
                    <div className="sm:col-span-2">
                        <label className="block text-xs sm:text-sm font-semibold">Your Requirement</label>
                        <textarea 
                            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-yellow-500" 
                            rows="2"
                        ></textarea>
                    </div>

                    {/* Terms & Conditions */}
                    <div className="flex items-start sm:col-span-2">
                        <input type="checkbox" className="mr-2 mt-1 focus:ring-yellow-500" />
                        <span className="text-xs sm:text-sm text-blue-600">
                            I hereby agree to all the terms and conditions
                        </span>
                    </div>

                    {/* Submit Button */}
                    <div className="sm:col-span-2">
                        <button 
                            className="w-full bg-yellow-500 text-white py-2 rounded-md font-bold 
                                       hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105"
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
