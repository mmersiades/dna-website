'use client';
import indigenousRegions from '@/constants/indigenousRegions';
import regions from '@/constants/regions';
import { FC } from 'react';
import { Controller, SubmitHandler, useForm, useWatch } from 'react-hook-form';

type InputsBase = {
  name: string;
  email: string;
};

type InputsWithState = InputsBase & {
  state: string;
  subregion: string;
  country?: string;
};

type InputsWithCountry = InputsBase & {
  country: string;
  state?: string;
  subregion?: string;
};

type Inputs = InputsWithState | InputsWithCountry;

const GroupIntentForm: FC = () => {
  const defaultValues: Inputs = {
    name: '',
    email: '',
    state: '',
    subregion: '',
    country: '',
  };
  const { control, handleSubmit } = useForm<Inputs>({ defaultValues });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const stateValue = useWatch({ name: 'state', control });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="name"
        render={({ field, formState: { errors } }) => (
          <div className={'flex max-w-1/4 flex-col'}>
            <label htmlFor={'name'}>Name</label>
            <input
              {...field}
              type={'text'}
            />
            {errors.email && <span>This field is required</span>}
          </div>
        )}
      />

      <Controller
        control={control}
        name="email"
        render={({ field, formState: { errors } }) => (
          <div className={'flex max-w-1/4 flex-col'}>
            <label htmlFor={'email'}>Email</label>
            <input {...field} />
            {errors.email && <span>This field is required</span>}
          </div>
        )}
      />

      <Controller
        control={control}
        name="state"
        render={({ field }) => (
          <div className={'flex max-w-1/4 flex-col'}>
            <label htmlFor={'state'}>State</label>
            <select {...field}>
              <option value={''}>Select State...</option>
              {Object.keys(regions).map((state) => {
                return (
                  <option
                    key={state}
                    value={state}
                  >
                    {state}
                  </option>
                );
              })}
            </select>
          </div>
        )}
      />

      {stateValue && (
        <Controller
          control={control}
          name="subregion"
          render={({ field }) => (
            <div className={'flex max-w-1/4 flex-col'}>
              <label htmlFor={'subregion'}>ABS region</label>
              <select {...field}>
                <option value={''}>Select ABS region...</option>
                {regions[stateValue].map((region) => {
                  return (
                    <option
                      key={region}
                      value={region}
                    >
                      {region}
                    </option>
                  );
                })}
              </select>
            </div>
          )}
        />
      )}

      <Controller
        control={control}
        name="country"
        render={({ field }) => (
          <div className={'flex max-w-1/4 flex-col'}>
            <label htmlFor={'state'}>Country</label>
            <select {...field}>
              <option value={''}>Select Indigenous region...</option>
              {indigenousRegions.map((c) => {
                return (
                  <option
                    key={c}
                    value={c}
                  >
                    {c}
                  </option>
                );
              })}
            </select>
          </div>
        )}
      />

      <button type="submit">SUBMIT</button>
    </form>
  );
};

export default GroupIntentForm;
