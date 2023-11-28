import React from 'react';
import { ClipLoader } from 'react-spinners';

import '@/app/styles/shared/QuizIconLoading.scss';

interface QuizIconLoadingProps {
    loading: boolean;
  }
  
export  const QuizIconLoading: React.FC<QuizIconLoadingProps> = ({loading}) => 
    (
    <div className={`QuizIconLoading ${loading ? 'visible' : ''}`}>
      <ClipLoader color={'#D0D0D8'} loading={loading} size={50} />
    </div>
  );