import image from '../assets/images/banner4.jpg';
import img from '../assets/images/logo.jpeg';

function AboutPage() {
    return (
        <div className="min-h-screen bg-gray-100 pt-20">
            <div className="w-screen bg-white shadow-lg p-8">
                <img src={image} alt="About Banner" className="w-full h-56 object-cover rounded-lg mb-6" />
                <p className="text-gray-600 text-center mb-6">
                    Welcome to our platform! We are dedicated to providing top-notch services and solutions to our clients.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
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
                    <p className="text-gray-600 mb-4">We are a team of passionate professionals committed to excellence.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-center">
                        <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                            <img src={img} alt="Team Member 1" className="w-full h-40 object-cover rounded-lg mb-2" />
                            <h3 className="text-lg font-semibold">John Doe</h3>
                            <p className="text-gray-600">CEO & Founder</p>
                        </div>
                        <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                            <img src={img} alt="Team Member 2" className="w-full h-40 object-cover rounded-lg mb-2" />
                            <h3 className="text-lg font-semibold">Jane Smith</h3>
                            <p className="text-gray-600">Chief Technology Officer</p>
                        </div>
                        <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                            <img src={img} alt="Team Member 3" className="w-full h-40 object-cover rounded-lg mb-2" />
                            <h3 className="text-lg font-semibold">Michael Brown</h3>
                            <p className="text-gray-600">Head of Marketing</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AboutPage;
