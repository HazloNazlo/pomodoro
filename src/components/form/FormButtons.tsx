import React from 'react';
import clsx from 'clsx';

interface FormButtonsProps {
  onSaveDraft: () => void;
  isSubmitDisabled: boolean;
  isSubmitting: boolean;
  hasDateTime: boolean;
}

const FormButtons: React.FC<FormButtonsProps> = ({ 
  onSaveDraft, 
  isSubmitDisabled,
  isSubmitting,
  hasDateTime
}) => {
  return (
    <div className="mt-8 flex justify-end space-x-3">
      <button
        type="button"
        onClick={onSaveDraft}
        disabled={isSubmitting}
        className={clsx(
          "rounded-lg px-4 py-2 text-sm font-medium",
          "text-gray-700 bg-white border border-gray-300",
          "hover:bg-gray-50 transition-colors",
          isSubmitting && "opacity-50 cursor-not-allowed"
        )}
      >
        {isSubmitting ? 'Saving...' : 'Save as draft'}
      </button>
      <button
        type="submit"
        disabled={isSubmitDisabled || !hasDateTime}
        className={clsx(
          "rounded-lg px-4 py-2 text-sm font-medium text-white",
          "bg-custom hover:bg-custom/90 transition-colors",
          (isSubmitDisabled || !hasDateTime) && "opacity-50 cursor-not-allowed"
        )}
      >
        {isSubmitting ? 'Scheduling...' : 'Schedule post'}
      </button>
    </div>
  );
};

export default FormButtons;