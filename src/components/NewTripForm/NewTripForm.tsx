import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './NewTripForm.module.scss';

export interface FormValues {
  city: string;
  startDate: string;
  endDate: string;
}

interface NewTripFormProps {
  onClose: () => void;
}

const NewTripForm: React.FC<NewTripFormProps> = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormValues>();

  const startDate = watch('startDate');
  const endDate = watch('endDate');

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    onClose();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          {...register('city', { required: true })}
        />
        {errors.city && <span>This field is required</span>}
      </div>
      <div>
        <label htmlFor="startDate">Start Date:</label>
        <input
          type="date"
          id="startDate"
          {...register('startDate', { required: true })}
        />
        {errors.startDate && <span>This field is required</span>}
      </div>
      <div>
        <label htmlFor="endDate">End Date:</label>
        <input
          type="date"
          id="endDate"
          {...register('endDate', {
            required: true,
            validate: {
              notBeforeStartDate: (value) =>
                value >= startDate ||
                'End date should not be before start date',
              withinNext15Days: (value) => {
                const currentDate = new Date();
                const next15Days = new Date();
                next15Days.setDate(currentDate.getDate() + 15);
                return (
                  (value >= currentDate.toISOString().split('T')[0] &&
                    value <= next15Days.toISOString().split('T')[0]) ||
                  'Start date and end date should be within the next 15 days'
                );
              },
            },
          })}
        />
        {errors.endDate && <span>{errors.endDate.message}</span>}
      </div>
      <div>
        <button className={styles.btn_cancel} onClick={onClose}>
          Cancel
        </button>
        <button type="submit" className={styles.btn_save}>
          Save
        </button>
      </div>
    </form>
  );
};

export default NewTripForm;
