import React, { useState } from 'react';
import { X, Calendar, Clock, FileText } from 'lucide-react';
import { psychotestService } from '../services/psychotestService';

const PSYCHOTEST_TYPES = [
  { id: 'cfit-3a', label: 'CFIT 3A (Tes Intelegensi)', description: 'Tes kemampuan kognitif dan IQ' },
  { id: 'kraeplin', label: 'Kraeplin (Tes Kecepatan & Akurasi)', description: 'Tes kecepatan dan ketelitian' },
  { id: 'wartegg', label: 'Wartegg (Tes Kreativitas)', description: 'Tes kreativitas dan imajinasi' },
  { id: 'disc', label: 'DISC (Tes Kepribadian)', description: 'Tes tipe kepribadian' },
  { id: 'pauli', label: 'Pauli (Tes Perhatian)', description: 'Tes konsentrasi dan perhatian' },
  { id: 'beta-iii', label: 'Beta III (Tes Non-Verbal)', description: 'Tes intelegensi non-verbal' }
];

const SchedulePsychotestModal = ({ candidate, onClose, onScheduleSuccess }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [testType, setTestType] = useState('cfit-3a');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!date || !time || !testType) {
      setError('Tanggal, waktu, dan jenis tes harus diisi');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const result = await psychotestService.schedulePsychotest(
        candidate.id,
        date,
        time,
        testType
      );
      
      if (result.success) {
        onScheduleSuccess(result.data);
        onClose();
      }
    } catch (err) {
      setError(err.message || 'Gagal membuat jadwal');
    } finally {
      setLoading(false);
    }
  };

  // Get minimum date (today)
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">
            Jadwalkan Psychotest
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition"
          >
            <X size={24} />
          </button>
        </div>

        {/* Candidate Info */}
        <div className="mb-6 pb-4 border-b border-gray-200">
          <p className="text-gray-600 text-sm">Kandidat:</p>
          <p className="text-lg font-semibold text-gray-800">{candidate.name}</p>
          <p className="text-gray-600 text-sm">{candidate.position}</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Date Field */}
          <div>
            <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
              <Calendar size={18} />
              Tanggal
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              min={today}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Time Field */}
          <div>
            <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
              <Clock size={18} />
              Waktu
            </label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Test Type Field */}
          <div>
            <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
              <FileText size={18} />
              Jenis Psikotes
            </label>
            <select
              value={testType}
              onChange={(e) => setTestType(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              {PSYCHOTEST_TYPES.map((test) => (
                <option key={test.id} value={test.id}>
                  {test.label}
                </option>
              ))}
            </select>
            {testType && (
              <p className="text-sm text-gray-600 mt-2">
                {PSYCHOTEST_TYPES.find(t => t.id === testType)?.description}
              </p>
            )}
          </div>

          {/* Error Message */}
          {error && (
            <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
              {error}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition"
            >
              Batal
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Menyimpan...' : 'Jadwalkan'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SchedulePsychotestModal;
