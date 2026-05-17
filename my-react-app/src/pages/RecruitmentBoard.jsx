import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CandidateCard from '../components/CandidateCard';
import SchedulePsychotestModal from '../components/SchedulePsychotestModal';
import { psychotestService } from '../services/psychotestService';
import { Filter, ArrowLeft } from 'lucide-react';

const RecruitmentBoard = () => {
  const navigate = useNavigate();
  const [candidates, setCandidates] = useState([]);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [filter, setFilter] = useState('all'); // all, pending, scheduled, completed
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCandidates();
  }, []);

  const fetchCandidates = async () => {
    try {
      setLoading(true);
      const data = await psychotestService.getAllCandidates();
      setCandidates(data);
    } catch (error) {
      console.error('Error fetching candidates:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleScheduleClick = (candidate) => {
    setSelectedCandidate(candidate);
  };

  const handleScheduleSuccess = (updatedCandidate) => {
    setCandidates(
      candidates.map((c) => (c.id === updatedCandidate.id ? updatedCandidate : c))
    );
  };

  const handleCloseModal = () => {
    setSelectedCandidate(null);
  };

  const filteredCandidates = candidates.filter((candidate) => {
    if (filter === 'all') return true;
    return candidate.status === filter;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 mb-4 px-4 py-2 text-blue-500 hover:text-blue-700 font-medium transition duration-300"
            >
              <ArrowLeft size={20} />
              Kembali ke Halaman Awal
            </button>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Recruitment Board
          </h1>
          <p className="text-gray-600">
            Kelola jadwal psychotest kandidat
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="mb-8 flex flex-wrap gap-3">
          <button
            onClick={() => setFilter('all')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition duration-300 ${
              filter === 'all'
                ? 'bg-blue-500 text-white'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            <Filter size={18} />
            Semua ({candidates.length})
          </button>

          <button
            onClick={() => setFilter('pending')}
            className={`px-4 py-2 rounded-lg font-medium transition duration-300 ${
              filter === 'pending'
                ? 'bg-yellow-500 text-white'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            Menunggu (
            {candidates.filter((c) => c.status === 'pending').length})
          </button>

          <button
            onClick={() => setFilter('scheduled')}
            className={`px-4 py-2 rounded-lg font-medium transition duration-300 ${
              filter === 'scheduled'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            Terjadwal (
            {candidates.filter((c) => c.status === 'scheduled').length})
          </button>

          <button
            onClick={() => setFilter('completed')}
            className={`px-4 py-2 rounded-lg font-medium transition duration-300 ${
              filter === 'completed'
                ? 'bg-green-500 text-white'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            Selesai (
            {candidates.filter((c) => c.status === 'completed').length})
          </button>
        </div>

        {/* Candidates Grid */}
        {loading ? (
          <div className="flex items-center justify-center h-96">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          </div>
        ) : filteredCandidates.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">Tidak ada kandidat</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCandidates.map((candidate) => (
              <CandidateCard
                key={candidate.id}
                candidate={candidate}
                onScheduleClick={handleScheduleClick}
              />
            ))}
          </div>
        )}
      </div>

      {/* Schedule Modal */}
      {selectedCandidate && (
        <SchedulePsychotestModal
          candidate={selectedCandidate}
          onClose={handleCloseModal}
          onScheduleSuccess={handleScheduleSuccess}
        />
      )}
    </div>
  );
};

export default RecruitmentBoard;
