'use client';
import GroupIntentForm from '@/components/forms/GroupIntentForm';
import indigenousRegions from '@/constants/indigenousRegions';
import regions from '@/constants/regions';
import cn from '@/utils/cn';
import { FC } from 'react';
import { Controller, useForm, useWatch } from 'react-hook-form';

type InputsWithState = {
  state: string;
  subregion: string;
  country?: string;
};

type InputsWithCountry = {
  country: string;
  state?: string;
  subregion?: string;
};

type Inputs = InputsWithState | InputsWithCountry;

const GroupInterestTable: FC = () => {
  const defaultValues: Inputs = {
    state: '',
    subregion: '',
    country: '',
  };
  const { control } = useForm<Inputs>({ defaultValues });

  const stateValue = useWatch({ name: 'state', control });
  const regionValue = useWatch({ name: 'subregion', control });
  const countryValue = useWatch({ name: 'country', control });

  const { formContainer, label, input } = {
    formContainer: cn(
      'flex flex-row gap-2 justify-start flex-wrap py-2 md:py-4',
    ),
    label: 'indent-2 text-sm font-medium',
    input: cn(
      'border-1 border-tertiary-500 rounded-lg',
      'focus:outline-primary focus:outline-1 focus:border-primary',
      'px-2',
      'text-lg font-bold',
      'h-full',
    ),
  };

  return (
    <div className={'p-2'}>
      <p className={'text-md'}>
        Even if there is no local Degrowth group in your area, there may be
        other people nearby you who are interested in connecting with you and/or
        starting a group.
      </p>
      <form className={formContainer}>
        <Controller
          control={control}
          name="state"
          render={({ field }) => (
            <div className={'flex w-1/4 flex-col md:w-max'}>
              <label
                htmlFor={'state'}
                className={label}
              >
                State
              </label>
              <select
                {...field}
                className={cn(input, 'h-10 w-full')}
              >
                <option value={''}>Select...</option>
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

        <Controller
          control={control}
          name="subregion"
          render={({ field }) => (
            <div className={'flex w-1/3 flex-col md:w-max'}>
              <label
                htmlFor={'subregion'}
                className={label}
              >
                Region
              </label>
              <select
                className={cn(input, 'h-10 w-full')}
                {...field}
                disabled={!stateValue || stateValue === ''}
              >
                {!stateValue ? (
                  <option value={''}>Select state first...</option>
                ) : (
                  <>
                    <option value={''}>Select...</option>
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
                  </>
                )}
              </select>
            </div>
          )}
        />

        <Controller
          control={control}
          name="country"
          render={({ field }) => (
            <div className={'flex w-1/3 flex-col md:w-max'}>
              <label
                htmlFor={'state'}
                className={label}
              >
                Country
              </label>
              <select
                className={cn(input, 'h-10 w-full')}
                {...field}
              >
                <option value={''}>Select...</option>
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
      </form>

      {stateValue && regionValue && (
        <GroupIntentForm
          state={stateValue ?? ''}
          country={countryValue ?? ''}
          subregion={regionValue ?? ''}
        />
      )}
    </div>
  );
};

export default GroupInterestTable;
