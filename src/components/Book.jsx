import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

function BookList() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchBooks = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}book/show`);
      setBooks(res.data.data);
    } catch (err) {
      console.error(err);
      alert("Error fetching books");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this book?")) return;
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}book/delete/${id}`);
      fetchBooks(); // refresh
      alert("Book deleted!");
    } catch (err) {
      console.error(err);
      alert("Error deleting book");
    }
  };

  const handleDownload = async (pdfUrl, bookName) => {
    try {
      // console.log("pdfUrl: ", pdfUrl);
      // console.log("bookName: ", bookName);
  
      const response = await fetch(pdfUrl);
      // console.log("object: ",response)
      const blob = await response.blob();
      // console.log("blob: ",blob)

      const blobUrl = URL.createObjectURL(blob);
  
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = `${bookName}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  
      // Clean up the blob URL
      URL.revokeObjectURL(blobUrl);
    } catch (err) {
      console.error("Download failed:", err);
      alert("Error downloading the PDF");
    }
  };
  

  useEffect(() => {
    fetchBooks();
  }, []);

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
    <div className="container mx-auto px-8 py-8">

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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
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
                <h2 className="text-xl font-semibold mb-2 text-gray-800">{book.name}</h2>
                <p className="text-gray-600 mb-4">{book.description}</p>
                
                <div className="flex justify-between mt-4">
                  
                  <motion.button
                    className="px-4 py-2 bg-darkprimary text-white rounded hover:bg-primary transition-colors flex items-center gap-2"
                    onClick={() => handleDownload(book.pdf, book.name)}
                    whileTap={{ scale: 0.95 }}
                    disabled={!book.pdf}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    PDF
                  </motion.button>
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