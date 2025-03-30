function AboutPage() {
    return (
        <div className="min-h-screen bg-gray-100 pt-20">
            <div className="w-screen bg-white shadow-lg p-8">
                <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">About Us</h1>
                <p className="text-gray-600 text-center mb-6">
                    Welcome to our platform! We are dedicated to providing top-notch services and solutions to our clients.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h2 className="text-xl font-semibold text-gray-700 mb-2">Our Mission</h2>
                        <p className="text-gray-600">
                            Our mission is to revolutionize the industry by offering innovative and customer-centric solutions that
                            cater to diverse needs.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold text-gray-700 mb-2">Our Vision</h2>
                        <p className="text-gray-600">
                            We envision a world where technology and creativity come together to enhance everyday experiences and drive
                            success.
                        </p>
                    </div>
                </div>
                <div className="mt-6 text-center">
                    <h2 className="text-xl font-semibold text-gray-700">Meet Our Team</h2>
                    <p className="text-gray-600">We are a team of passionate professionals committed to excellence.</p>
                </div>
            </div>
        </div>
    );
}
export default AboutPage