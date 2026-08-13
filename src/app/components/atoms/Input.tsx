import { useState } from 'react';
import { motion } from 'motion/react';

interface InputProps {
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  multiline?: boolean;
  rows?: number;
}

export function Input({ 
  label, 
  type = 'text', 
  value, 
  onChange, 
  placeholder = '',
  required = false,
  multiline = false,
  rows = 4
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value.length > 0;

  const inputClasses = "w-full px-4 py-3 bg-card text-foreground border-2 border-border rounded-2xl outline-none transition-all duration-300 focus:border-transparent";
  const labelClasses = "absolute left-4 transition-all duration-300 pointer-events-none text-muted-foreground";

  const labelPosition = isFocused || hasValue
    ? "top-[-10px] text-xs bg-card px-2 text-primary"
    : "top-3 text-base";

  return (
    <motion.div 
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="relative">
        {multiline ? (
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={isFocused ? placeholder : ''}
            required={required}
            rows={rows}
            className={`${inputClasses} resize-none`}
            style={{
              boxShadow: isFocused
                ? '0 0 0 3px var(--spider-glow), 0 0 20px var(--spider-glow)'
                : 'none'
            }}
          />
        ) : (
          <input
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={isFocused ? placeholder : ''}
            required={required}
            className={inputClasses}
            style={{
              boxShadow: isFocused
                ? '0 0 0 3px var(--spider-glow), 0 0 20px var(--spider-glow)'
                : 'none'
            }}
          />
        )}
        <label className={`${labelClasses} ${labelPosition}`}>
          {label}
          {required && <span className="text-primary ml-1">*</span>}
        </label>
      </div>
    </motion.div>
  );
}
