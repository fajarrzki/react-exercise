import { dummyCandidates } from '../data/dummyCandidates';

// Simulate API calls
export const psychotestService = {
  // Get all candidates
  getAllCandidates: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(dummyCandidates);
      }, 500);
    });
  },

  // Schedule psychotest for a candidate
  schedulePsychotest: async (candidateId, date, time, testType = 'cfit-3a') => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const candidate = dummyCandidates.find(c => c.id === candidateId);
        if (candidate) {
          candidate.status = 'scheduled';
          candidate.scheduledDate = date;
          candidate.scheduledTime = time;
          candidate.testType = testType;
          resolve({
            success: true,
            message: `Psychotest scheduled for ${candidate.name}`,
            data: candidate
          });
        } else {
          reject({
            success: false,
            message: 'Candidate not found'
          });
        }
      }, 500);
    });
  },

  // Get candidate by ID
  getCandidateById: async (candidateId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const candidate = dummyCandidates.find(c => c.id === candidateId);
        resolve(candidate || null);
      }, 300);
    });
  },

  // Update candidate status
  updateCandidateStatus: async (candidateId, status) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const candidate = dummyCandidates.find(c => c.id === candidateId);
        if (candidate) {
          candidate.status = status;
        }
        resolve(candidate);
      }, 300);
    });
  }
};
