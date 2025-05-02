import { useAuthContext } from '../context/AuthContext';
import { motion } from 'framer-motion';

const ProfilePage = () => {
  const { user, loading } = useAuthContext();

  return (
    <div className="h-auto select-none bg-gradient-to-br from-primary to-white pt-20 pb-20 px-4">
      <div className="max-w-md mx-auto">
        {loading ? (
          <motion.div
            className="text-center text-lg font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Loading...
          </motion.div>
        ) : user ? (
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8 space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="flex flex-col items-center">
              <div className="w-28 h-28 bg-primary rounded-full flex items-center justify-center text-5xl font-bold text-white shadow-inner">
                {user.username?.charAt(0).toUpperCase()}
              </div>
              <h2 className="mt-4 text-2xl font-bold text-gray-800">{user.username}</h2>
            </div>

            <div className="space-y-3 text-gray-700">
              <div>
                <span className="font-semibold">Email:</span> {user.email}
              </div>
              <div>
                <span className="font-semibold">Address:</span> {user.address}
              </div>
              <div>
                <span className="font-semibold">Status:</span>{' '}
                <span className={`inline-block px-2 py-1 rounded-full text-sm ${
                  user.status === 'active' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                }`}>
                  {user.status}
                </span>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-primary hover:bg-darkprimary text-white py-2 px-4 rounded-lg transition-all"
            >
              Edit Profile
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            className="text-center text-red-500 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            User not logged in.
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
