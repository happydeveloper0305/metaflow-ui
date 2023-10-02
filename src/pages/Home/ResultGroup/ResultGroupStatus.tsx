import styled from 'styled-components';
import { TD } from '../../../components/Table';
import { colorByStatus, iconByStatus } from '../../../utils/style';
import Icon, { SupportedIcons } from '../../../components/Icon';
import React from 'react';
import { RunStatus } from '../../../types';
import { SmallText } from '../../../components/Text';

//
// Small status indicator on left side of the rows
//

type StatusColorCellProps = {
  status: keyof RunStatus;
  title: keyof RunStatus;
};

const StatusColorCell: React.FC<StatusColorCellProps> = ({ status, title }) => {
  const name: keyof SupportedIcons | undefined = iconByStatus(status);

  return (
    <>
      <StatusCell status={status}>
        {name && <Icon name={name} size="xs" />}
        <Text>{title} Run</Text>
      </StatusCell>
    </>
  );
};

const StatusCell = styled(TD)<{
  status: string;
}>`
  text-align: center;
  position: relative;
  color: ${(p) => colorByStatus(p.theme, p.status) || 'transparent'} !important;
  i {
    vertical-align: middle;
  }
  :hover small {
    opacity: 1;
  }
`;

const Text = styled(SmallText)`
  white-space: 'nowrap';
  transition: opacity 0.25s;
  opacity: 0;
  position: absolute;
  left: 50%;
  top: 75%;
  color: ${(p) => p.theme.color.text.white};
  background: ${(p) => p.theme.color.bg.tooltip};
  border-radius: 6px;
  padding: 0.5rem 0.75rem;
  white-space: nowrap;
  text-transform: capitalize;
  z-index: 10;
`;

export default StatusColorCell;
