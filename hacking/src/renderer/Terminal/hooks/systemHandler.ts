import { useState, } from 'react';
import { addTimeline, } from '../utils/timelines';
import { disconnected, } from '../responseLines/subnetwork';

type SystemHandlerProps = {
  addLines: ([string]) => void,
}

export function systemHandler({ addLines, setPrefixType, }: SystemHandlerProps) {
  const [connectedSubnetwork, setConnectedSubnetwork] = useState(null);
  const [isDecrypted, setIsDecrypted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);

  const isConnected = !!connectedSubnetwork;
  const disconnectFromSubnetwork = () => {
    // todo: add name to disconnect message
    addLines(disconnected);
    setPrefixType('admin');
    setConnectedSubnetwork(null);
  }
  const connectToSubnetwork = (subnetwork, timeInSubnetwork) => {
    setConnectedSubnetwork(subnetwork);
    setPrefixType(subnetwork.name)
    setTimeLeft(timeInSubnetwork);
    addTimeline(timeInSubnetwork, step, disconnectFromSubnetwork);
  }
  const step = (timeLeft) => setTimeLeft(timeLeft);
  const decryptSubnetwork = () => {
    setIsDecrypted(true);
  }

  return { isConnected, connectedSubnetwork, timeLeft, connectToSubnetwork, disconnectFromSubnetwork, isDecrypted, decryptSubnetwork, };
}
