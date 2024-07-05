import "./Alert.css";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import CloseIcon from "@mui/icons-material/Close";

function Alert({ level, message, onClose }) {
  const options = {
    ERROR: "#d83e3e",
    INFO: "#3e8ed8",
    SUCCESS: "#0fe92c",
    WARNING: "#e5e90f",
  };

  return (
    <div className='Alert'>
      {level.toUpperCase() == "ERROR" && (
        <DoNotDisturbIcon style={{ color: options[level.toUpperCase()] }} />
      )}
      {level.toUpperCase() == "INFO" && (
        <ErrorOutlineRoundedIcon
          style={{ color: options[level.toUpperCase()] }}
        />
      )}
      {level.toUpperCase() == "SUCCESS" && (
        <CheckCircleOutlineRoundedIcon
          style={{ color: options[level.toUpperCase()] }}
        />
      )}
      {level.toUpperCase() == "WARNING" && (
        <WarningAmberRoundedIcon
          style={{ color: options[level.toUpperCase()] }}
        />
      )}
      <p>{message}</p>
      <button onClick={onClose}>
        <CloseIcon />
      </button>
    </div>
  );
}

export default Alert;
