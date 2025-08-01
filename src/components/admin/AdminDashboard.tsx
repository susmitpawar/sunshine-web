import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db, auth } from '../../firebase/firebaseConfig';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

interface Submission {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: any;
}

const AdminDashboard: React.FC = () => {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSubmissions = async () => {
      const querySnapshot = await getDocs(collection(db, 'submissions'));
      const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Submission));
      setSubmissions(data);
    };
    fetchSubmissions();
  }, []);

  const handleLogout = () => {
    signOut(auth).then(() => navigate('/admin'));
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-6">Admin Dashboard</h2>
      <button
        onClick={handleLogout}
        className="mb-6 px-4 py-2 bg-red-600 text-white rounded"
      >
        Logout
      </button>
      <h3 className="text-2xl font-semibold mb-4">Contact Form Submissions</h3>
      <div className="grid gap-4">
        {submissions.map((submission) => (
          <div key={submission.id} className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
            <p><strong>Name:</strong> {submission.name}</p>
            <p><strong>Email:</strong> {submission.email}</p>
            <p><strong>Message:</strong> {submission.message}</p>
            <p><strong>Time:</strong> {submission.timestamp?.toDate()?.toString() || 'N/A'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;