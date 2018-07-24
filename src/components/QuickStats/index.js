import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

const QuickStats = ({ quickStats }) => {
  return (
    <ContentWrapper>
      {quickStats.map(obj => (
        <StatWrapper>
          <Typography variant="subheading" align="center">
            {obj.value}
          </Typography>
          <Typography variant="caption" align="center">
            {obj.type}
          </Typography>
        </StatWrapper>
      ))}
    </ContentWrapper>
  );
};

const ContentWrapper = styled.div`
  display: flex;
`;
const StatWrapper = styled.div`
  padding: 10px;
`;

QuickStats.propTypes = {
  quickStats: PropTypes.array.isRequired,
};

export default QuickStats;
