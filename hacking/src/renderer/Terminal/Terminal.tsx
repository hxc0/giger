import { FocusEventHandler, useEffect, useMemo, useState } from 'react';
import usePrefix from './hooks/usePrefix';
import useCommandHandler from './hooks/useCommandHandler';
import useKeyHandler from './hooks/useKeyHandler';
import useLineStateHandler from './hooks/useLineStateHandler';
import useSystemHandler from './hooks/useSystemHandler';
import useAccessPointHandler from './hooks/useAccessPointHandler';
import useLogin from './hooks/useLogin';
import useDebugMode from './hooks/useDebugMode';
import Loader from '../components/Loader';
import {
  ApiService,
  CommandsService,
  ConfigService,
  ServerConnectionService,
  LineStateService,
} from '../services';

export default function Terminal() {
  const [input, setInput] = useState('');
  const [accessPoint, setAccessPoint] = useState(null);
  const [prefixType, setPrefixType] = useState('admin');
  const [inputDisabled, setInputDisabled] = useState(false);
  const [forceRefresh, setForceRefresh] = useState(false);
  const [inputTimer, setInputTimer] = useState<number | null>(null);
  const [enableDirectInput, setEnableDirectInput] = useState(false);
  const [directInput, setDirectInput] = useState('');
  const refreshPrefix = () => setForceRefresh(true);
  useEffect(() => {
    if (forceRefresh) setForceRefresh(false);
  }, [forceRefresh]);
  const changeInput = (e: Event) => setInput(e.target.value);

  const changeDirrectInput = (e: Event) => setDirectInput(e.target.value);
  const stayFocused = (e: FocusEventHandler<HTMLInputElement>) =>
    e.target.focus();
  const { toggleDebugMode } = useDebugMode();
  const {
    lines,
    setLines,
    userLines,
    addLines,
    addUserLine,
    removeLastLine,
    addErrors,
  } = useLineStateHandler({ prefixType });
  const { enterPassword, isLoggedIn, logout, username, setUsername, userData } =
    useLogin({ setInputDisabled, addLines, setPrefixType, removeLastLine });
  const {
    isConnected,
    isDecrypted,
    decryptSubnetwork,
    disconnectFromSubnetwork,
  } = useSystemHandler({ addLines, setPrefixType, setLines });
  const { executeCommand } = useCommandHandler({
    setLines,
    addLines,
    addErrors,
    removeLastLine,
    disconnectFromSubnetwork,
    isConnected,
    isDecrypted,
    decryptSubnetwork,
    setInputDisabled,
    logout,
    toggleDebugMode,
    refreshPrefix,
    isLoggedIn,
  });
  const { handleKey } = useKeyHandler({
    username,
    isLoggedIn,
    setUsername,
    enterPassword,
    addUserLine,
    setInput,
    executeCommand,
    userLines,
    input,
    enableDirectInput,
    addLines,
  });
  const { prefix } = usePrefix({
    isConnected,
    inputTimer,
    accessPoint,
    username,
    isLoggedIn,
    userData,
    forceRefresh,
  });
  // eslint-disable-next-line react-hooks/rules-of-hooks
  if (window.electron) useAccessPointHandler({ setAccessPoint });

  const renderedLines = useMemo(() => {
    return lines.map((line) => {
      if (!line.length) return <br />;
      return <p className="line" dangerouslySetInnerHTML={{ __html: line }} />;
    });
  }, [lines]);

  useEffect(() => {
    ServerConnectionService.init(
      addLines,
      removeLastLine,
      setPrefixType,
      setInputTimer,
      setLines,
      setInputDisabled,
    );
    CommandsService.init({
      addLines,
      setLines,
      addErrors,
      setInputDisabled,
      logout,
      refreshPrefix,
      removeLastLine,
    });
    LineStateService.init({
      addLines,
      directInput,
      setDirectInput,
      enableDirectInput,
      setEnableDirectInput,
      handleKey,
    });
    window.config.services = {
      ApiService,
      ConfigService,
      ServerConnectionService,
    };
  }, [addLines, removeLastLine]);

  const inputElement = enableDirectInput ? (
    <input
      autoFocus
      type="text"
      value={directInput}
      onBlur={stayFocused}
      onChange={changeDirrectInput}
      onKeyDown={LineStateService.handleDirectKey}
    />
  ) : (
    <input
      autoFocus
      type={!isLoggedIn && username ? 'password' : 'text'}
      value={input}
      onBlur={stayFocused}
      onChange={changeInput}
      onKeyDown={handleKey}
    />
  );

  return (
    <>
      {renderedLines}
      <div className="line input-line">
        {enableDirectInput ? '' : prefix}
        {inputDisabled ? <Loader /> : inputElement}
      </div>
    </>
  );
}
