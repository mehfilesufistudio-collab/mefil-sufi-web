
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const FormInput = ({ 
  label, 
  name, 
  type = 'text', 
  placeholder, 
  error, 
  register, 
  required = false,
  multiline = false,
  rows = 4,
  ...props 
}) => {
  const InputComponent = multiline ? Textarea : Input;
  
  return (
    <div className="space-y-2">
      <Label htmlFor={name} className="text-sm font-medium text-foreground">
        {label} {required && <span className="text-destructive">*</span>}
      </Label>
      <InputComponent
        id={name}
        type={type}
        placeholder={placeholder}
        className="w-full bg-background text-foreground border-border focus:border-primary focus:ring-primary transition-colors duration-200"
        {...(register ? register(name) : {})}
        {...(multiline ? { rows } : {})}
        {...props}
      />
      {error && (
        <p className="text-sm text-destructive">{error.message}</p>
      )}
    </div>
  );
};

export default FormInput;
