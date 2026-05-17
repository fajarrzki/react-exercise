import React from 'react';
import { Calendar, Mail, Phone, CheckCircle, Clock, AlertCircle, FileText } from 'lucide-react';

const CandidateCard = ({ candidate, onScheduleClick }) => {
  const getStatusBadge = (status) => {
    switch (status) {
      case 'pending':
        return (
          <span className="flex items-center gap-2 px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
            <AlertCircle size={14} />
            Menunggu
          </span>
        );
      case 'scheduled':
        return (
          <span className="flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            <Clock size={14} />
            Terjadwal
          </span>
        );
      case 'completed':
        return (
          <span className="flex items-center gap-2 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
            <CheckCircle size={14} />
            Selesai
          </span>
        );
      default:
        return null;
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
  };

  const getTestTypeName = (testTypeId) => {
    const testTypes = {
      'cfit-3a': 'CFIT 3A',
      'kraeplin': 'Kraeplin',
      'wartegg': 'Wartegg',
      'disc': 'DISC',
      'pauli': 'Pauli',
      'beta-iii': 'Beta III'
    };
    return testTypes[testTypeId] || testTypeId;
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition duration-300">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-800">{candidate.name}</h3>
          <p className="text-gray-600 text-sm">{candidate.position}</p>
        </div>
        {getStatusBadge(candidate.status)}
      </div>

      {/* Contact Info */}
      <div className="space-y-2 mb-4 text-gray-600 text-sm">
        <div className="flex items-center gap-2">
          <Mail size={16} />
          <a href={`mailto:${candidate.email}`} className="hover:text-blue-500">
            {candidate.email}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Phone size={16} />
          <a href={`tel:${candidate.phone}`} className="hover:text-blue-500">
            {candidate.phone}
          </a>
        </div>
      </div>

      {/* Applied Date */}
      <div className="mb-4 pb-4 border-b border-gray-200">
        <p className="text-gray-600 text-sm">
          Melamar: {formatDate(candidate.appliedDate)}
        </p>
      </div>

      {/* Scheduled Info or Score */}
      {candidate.status === 'scheduled' && (
        <div className="mb-4 space-y-2 p-3 bg-blue-50 rounded-lg">
          <div className="flex items-center gap-2 text-blue-700 text-sm">
            <Calendar size={16} />
            {formatDate(candidate.scheduledDate)} - {candidate.scheduledTime}
          </div>
          {candidate.testType && (
            <div className="flex items-center gap-2 text-blue-700 text-sm">
              <FileText size={16} />
              <span className="font-medium">{getTestTypeName(candidate.testType)}</span>
            </div>
          )}
        </div>
      )}

      {candidate.status === 'completed' && candidate.score && (
        <div className="mb-4 p-3 bg-green-50 rounded-lg">
          <p className="text-green-700 text-sm font-medium">
            Skor: {candidate.score}/100
          </p>
        </div>
      )}

      {/* Action Button */}
      {candidate.status === 'pending' && (
        <button
          onClick={() => onScheduleClick(candidate)}
          className="w-full bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition duration-300"
        >
          Jadwalkan Psychotest
        </button>
      )}

      {candidate.status === 'scheduled' && (
        <button
          onClick={() => onScheduleClick(candidate)}
          className="w-full bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition duration-300"
        >
          Ubah Jadwal
        </button>
      )}

      {candidate.status === 'completed' && (
        <button
          disabled
          className="w-full bg-gray-300 text-gray-600 py-2 rounded-lg font-medium cursor-not-allowed"
        >
          Selesai
        </button>
      )}
    </div>
  );
};

export default CandidateCard;
