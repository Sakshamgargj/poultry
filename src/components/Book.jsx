import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useAuthContext } from "../context/AuthContext";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

function BookList() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [purchasedBooks, setPurchasedBooks] = useState({});
  const { user } = useAuthContext(); // Use your existing auth context
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  const toggleReadMore = () => {
    setExpanded(!expanded);
  };

  const fetchBooks = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}book/show`);
      setBooks(res.data.data);

      // If user is logged in, fetch their purchased books
      if (user) {
        await fetchPurchasedBooks();
      }
    } catch (err) {
      console.error(err);
      toast.error("Error fetching books");

    } finally {
      setIsLoading(false);
    }
  };

  const fetchPurchasedBooks = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}order/user/${user._id}`,
        { withCredentials: true } // Use cookie-based auth
      );

      // Create a map of bookId to purchase status
      const purchasedMap = {};
      res.data.data.forEach(order => {
        if (order.status === 'paid' && order.downloadPermission) {
          purchasedMap[order.book._id] = true;
        }
      });

      setPurchasedBooks(purchasedMap);
    } catch (err) {
      console.error("Error fetching purchased books:", err);
      toast.warn("Error fetching purchased books")
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this book?")) return;
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}book/delete/${id}`,
        { withCredentials: true }
      );
      fetchBooks(); // refresh
      toast.success("Book deleted!");
    } catch (err) {
      console.error(err);
      toast.error("Error deleting books");
    }
  };

  const handleDownload = async (pdfUrl, bookName, id) => {
    try {
      console.log("object:", purchasedBooks[id])
      if (!purchasedBooks[id]) {
        toast.warn("Please purchase first to download book!");
        return;
      }

      const response = await fetch(pdfUrl);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = `${bookName}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Clean up the blob URL
      URL.revokeObjectURL(blobUrl);
      toast.success("Downloading Successful");

    } catch (err) {
      console.error("Download failed:", err);
      toast.error("Error downloading the PDF");
    }
  };

  const initiatePayment = async (bookId) => {
    if (!user) {
      toast.warn("Please log in to purchase this book");
      navigate("/login");
      return;
    }

    try {
      // Create order
      const orderRes = await axios.post(
        `${import.meta.env.VITE_API_URL}order/create`,
        { bookId, userId: user._id },
        { withCredentials: true }
      );

      const { key_id, amount, currency, order_id, book_name, description } = orderRes.data.data;

      // Initialize Razorpay
      const options = {
        key: key_id,
        amount: amount,
        currency: currency,
        name: book_name,
        description: description,
        order_id: order_id,
        handler: function (response) {
          verifyPayment(response);
        },
        prefill: {
          name: user.username || "",
          email: user.email || "",
          contact: user.phone || "",
        },
        theme: {
          color: "#789737",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (err) {
      console.error("Payment initiation failed:", err);
      toast.warn("Error initiating payment");
    }
  };

  const verifyPayment = async (response) => {
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}order/verify`,
        {
          razorpay_order_id: response.razorpay_order_id,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_signature: response.razorpay_signature,
        },
        { withCredentials: true }
      );

      toast.success("Payment successful! You can now download the book.");
      fetchPurchasedBooks(); // Refresh purchased books status
    } catch (err) {
      console.error("Payment verification failed:", err);
      toast.error("Payment verification failed");

    }
  };

  useEffect(() => {
    fetchBooks();

    // Add Razorpay script
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [user]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="container select-none mx-auto px-8 py-8">
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-darkprimary"></div>
        </div>
      ) : books.length === 0 ? (
        <motion.div
          className="text-center text-gray-500 p-8 border border-dashed rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          No books available
        </motion.div>
      ) : (
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {books.map((book) => (
            <motion.div
              key={book._id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
            >
              <div className="relative aspect-[3/4] w-full">
                <img
                  src={book.img}
                  alt={book.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/300x400?text=No+Image';
                  }}
                />
              </div>

              <div className="p-4">
                <h2 className="text-xl font-bold mb-2 text-yellow-400">{book.name}</h2>
                {/* <div className="text-gray-600 mb-2 line-clamp-2" dangerouslySetInnerHTML={{ __html: book.description.substring(0, 100) }} /> */}
                <div
                  className={`line-clamp-${expanded ? "none" : "2"} transition-all`}
                  dangerouslySetInnerHTML={{
                    __html: expanded ? book.description : book.description.substring(0, 100) + "...",
                  }}
                />
                <button
                  className="text-darkprimary text-sm mt-1 hover:underline"
                  onClick={toggleReadMore}
                >
                  {expanded ? "Read less" : "Read more"}
                </button>
                <p className="text-lg font-bold text-darkText">Price: ₹{book.price || 0}</p>

                <div className="flex justify-between mt-4">
                  {purchasedBooks[book._id] ? (
                    <motion.button
                      className="px-4 py-2 bg-darkprimary text-white rounded hover:bg-primary transition-colors flex items-center gap-2 w-full justify-center"
                      onClick={() => handleDownload(book.pdf, book.name, book._id)}
                      whileTap={{ scale: 0.95 }}
                      disabled={!book.pdf}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download PDF
                    </motion.button>
                  ) : (
                    <>
                      <motion.button
                        className="px-4 py-2 bg-darkprimary text-white rounded hover:bg-primary transition-colors flex items-center gap-2"
                        onClick={() => handleDownload(book.pdf, book.name, book._id)}
                        whileTap={{ scale: 0.95 }}
                        disabled={!book.pdf}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        PDF
                      </motion.button>
                      <motion.button
                        className="px-4 py-2 bg-darkprimary text-white rounded hover:bg-primary transition-colors flex items-center gap-2"
                        onClick={() => initiatePayment(book._id)}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                        Pay
                      </motion.button>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}

export default BookList;