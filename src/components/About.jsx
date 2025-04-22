import image from '../assets/banner/banner3.jpg';
import img from '../assets/images/logo.jpeg';

function AboutPage() {
    return (
        <div className="min-h-screen select-none bg-gray-100 ">
            <div className="w-screen bg-white shadow-lg p-8">
                {/* <h1 className="text-4xl font-bold text-center pb-8 text-gray-700">About Us</h1> */}
                <img src={image} alt="About Banner" className="w-full h-120 object-cover rounded-lg mb-6" />
                <p className="text-gray-600 text-start mb-6">
                    Poultry Digital aims to tracks core segments of poultry industry. It records news updates, technology trends, company profiles, updates address directories, tracks new project investments across sectors, posting updates on the latest development.It provides timely information, analysis and insights.
                </p>
                <p className="text-gray-600 text-start mb-6">
                    Ibis publishes directories on core industrial sectors. It is a compilation of all company profiles operating in the sector. Besides giving brief company overview, it also provide contact details, current projects, existing plant capacities, technology involved, new projects and investment plans of the company. It has contact details of key personnel of company with in key department like purchase, R&D, maintenance and marketing.
                </p>
                <p className="text-gray-600 text-start mb-6">
                    Ibis Research also publishes well researched report on specific sectors from time to time. These reports are prepared after intensive country-wide surveys, data collection ‐ questionnaires, surveys, observation and interviews with experts. Incisive analysis is a mark of our research team which provides concise feedback on developments and a chance for crystal gazing into the future.  These report provides extensive coverage of production, consumption and market dynamics of the product.

                </p>
                <p className="text-gray-600 text-start mb-6">
                    Ibis Research Information Services Pvt Ltd   which maintains this site does custom research work for clients in India and abroad.  Its forte is industry market research where it has collected data on wide subjects like disposable cups production and sales , polyester staple fibre, bi metallic strips, diesel engines, seamless tubes etc. on behalf of various clients.  It spends much of it resource to keep track of new investments and trends and share the same on this website.
                </p>
                <p className="text-gray-600 text-start mb-6">
                    If you are in need of a industry research and need assistance, you can get in touch through here.
                </p>
                {/* <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-xl font-semibold text-gray-700 mb-2">Our Mission</h2>
                        <p className="text-gray-600">
                            Our mission is to revolutionize the industry by offering innovative and customer-centric solutions that
                            cater to diverse needs.
                        </p>
                        <p className="text-gray-600">
                            Our mission is to revolutionize the industry by offering innovative and customer-centric solutions that
                            cater to diverse needs.
                        </p>
                        <p className="text-gray-600">
                            Our mission is to revolutionize the industry solutions that cater to diverse needs.
                        </p>
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
                        <p className="text-gray-600">
                            We envision a world where technology and drive
                            success.
                        </p>
                        <p className="text-gray-600">
                            We envision a world where technology and creativity come together to enhance everyday experiences and drive
                            success.
                        </p>
                        <p className="text-gray-600">
                            We envision a world where technology and creativity come together to enhance everyday experiences and drive
                            success.
                        </p>
                        <p className="text-gray-600">
                            We envision a world where technology and creativity come together to enhance everyday experiences and drive
                            success.
                        </p>

                    </div>
                </div> */}
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
