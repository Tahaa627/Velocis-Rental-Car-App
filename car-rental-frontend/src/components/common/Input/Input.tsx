import "./Input.css";
import { useState } from "react";

interface InputProps {
  label: string;
  type?: string;
  placeholder?: string;
  value?: string;
  error?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  label,
  type = "text",
  placeholder,
  value,
  error,
  onChange,
}: InputProps) => {

  const [showPassword, setShowPassword] = useState(false);

  const inputType =
    type === "password"
      ? showPassword
        ? "text"
        : "password"
      : type;

  return (
    <div className="input-field">

      <label>{label}</label>

      <div className="input-wrapper">

        <input
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />

        {type === "password" && (
          <span
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "🙈" : "👁"}
          </span>
        )}

      </div>
      {error && <p className="input-error">{error}</p>}

    </div>
  );
};

export default Input;