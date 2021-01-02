import * as React from 'react';
import styled, { css } from 'styled-components';
import { Marker as MarkerIcon } from './Icons';

interface PinnedItemProps {
  id: string,
  title: string,
  lat: number,
  lng: number,
  $hover?: boolean,
}

const PinnedItemContainer = styled.div`
  width: 24px;
  height: 24px;
  background-color: transparent;
  color: #ff4948;
  position: relative;
`;

const Tooltip = styled.div<Partial<PinnedItemProps>>`
  background-color: white;
  border-radius: 5px;
  padding: 4px 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  position: absolute;
  transform: translate(-50%, -100%);
  top: -8px;
  left: 50%;
  color: black;
  font-size: 14px;
  z-index: 2;
  visibility: hidden;
  opacity: 0;
  transition: opacity 150ms, visibility 150ms;
  white-space: nowrap;
  
  ${({ $hover }) => $hover && css`
    visibility: visible;
    opacity: 1;
  `};

  &:before {
    content: '';
    position: absolute;
    bottom: -4px;
    width: 8px;
    height: 8px;
    background-color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    left: calc(50% - 4px);
    transform: rotateZ(45deg);
    z-index: 1;
  }
`;

const PinnedItem: React.FC<PinnedItemProps> = ({ title, $hover }) => (
  <PinnedItemContainer>
    <Tooltip $hover={$hover}>
      {title}
    </Tooltip>
    <MarkerIcon />
  </PinnedItemContainer>
);

export default PinnedItem;
