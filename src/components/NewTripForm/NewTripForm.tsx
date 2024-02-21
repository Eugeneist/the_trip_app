import { useId } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { useTripContext } from '../../providers/TripProvider';
import { TripCardProps } from '../TripCard/TripCard';
import { Button } from '../Button';
import { getRandomId } from '../../helpers';
import { cities } from '../../data/cities';
import { deft } from '../../assets/cities/cities';
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
    control,
  } = useForm<FormValues>();

  const { addTrip } = useTripContext();

  const startDate = watch('startDate');

  const id = useId() + getRandomId();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const fromDate = new Date(data.startDate).toLocaleDateString();
    const toDate = new Date(data.endDate).toLocaleDateString();
    const selectedCityId = data.city;
    const selectedCity = cities.find((city) => city.id === selectedCityId);

    const newTrip: TripCardProps = {
      id,
      image: selectedCity ? selectedCity.image : deft,
      city: selectedCity ? selectedCity.title : 'city',
      dates: [fromDate, toDate],
    };
    addTrip(newTrip);
    onClose();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.form__inner}>
        <div className={styles.form__field}>
          <label className={styles.form__label} htmlFor="city">
            City:
          </label>
          <Controller
            name="city"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <select
                id="sel"
                className={`${styles.form__input} ${styles.form__bigger}`}
                {...field}
                required
                aria-invalid={errors.city ? 'true' : 'false'}
              >
                <option value="">Please select a city</option>
                {cities.map(({ id, title }) => (
                  <option key={id} value={id}>
                    {title}
                  </option>
                ))}
              </select>
            )}
          />
          {errors.city && <span>This field is required</span>}
        </div>
        <div className={styles.form__field}>
          <label className={styles.form__label} htmlFor="startDate">
            Start Date:
          </label>
          <input
            className={styles.form__input}
            placeholder="Select date"
            type="date"
            id="startDate"
            {...register('startDate', { required: true })}
          />
          {errors.startDate && <span>This field is required</span>}
        </div>
        <div className={styles.form__field}>
          <label className={styles.form__label} htmlFor="endDate">
            End Date:
          </label>
          <input
            className={styles.form__input}
            placeholder="Select date"
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
      </div>
      <div className={styles.form__buttons}>
        <Button
          label="Cancel"
          onClick={onClose}
          variant="regular"
          size="small"
        />
        <Button type="submit" label="Save" variant="secondary" size="small" />
      </div>
    </form>
  );
};

export default NewTripForm;
