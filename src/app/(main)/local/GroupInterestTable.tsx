'use client';
import GroupIntentForm from '@/app/(main)/local/GroupIntentForm';
import { fetchGroupIntentTableRows } from '@/app/actions';
import { TableRow } from '@/app/services/SheetsApi';
import copy from '@/constants/copy';
import indigenousRegions from '@/constants/indigenousRegions';
import regions from '@/constants/regions';
import cn from '@/utils/cn';
import { FC, useState } from 'react';
import { Controller, useForm, useWatch } from 'react-hook-form';

type Inputs = {
  country: string;
  state: string;
  subregion: string;
};

interface Props {
  initialTableData: TableRow[];
}

const GroupInterestTable: FC<Props> = ({ initialTableData }) => {
  const [tableData, setTableData] = useState<TableRow[]>(initialTableData);
  const defaultValues: Inputs = {
    state: '',
    subregion: '',
    country: '',
  };
  const { control, getValues, setValue } = useForm<Inputs>({ defaultValues });

  const stateValue = useWatch({ name: 'state', control });
  const regionValue = useWatch({ name: 'subregion', control });
  const countryValue = useWatch({ name: 'country', control });

  const updateTableData = async ({
    state,
    country,
    region,
  }: {
    state: string;
    region: string;
    country: string;
  }) => {
    const tableData = await fetchGroupIntentTableRows({
      state: state.length > 0 ? state : null,
      region: region.length > 0 ? region : null,
      country: country.length > 0 ? country : null,
    });
    setTableData(tableData);
  };

  const handleFieldChange = (name: keyof Inputs, value: string) => {
    setValue(name, value);

    if (name === 'state') {
      setValue('subregion', '');
    }

    const currentValues = getValues();

    void updateTableData({
      state: currentValues.state,
      region: currentValues.subregion,
      country: currentValues.country,
    });
  };

  const { formContainer, label, input, table, tableHead } = {
    formContainer: cn(
      'flex flex-row gap-2 justify-start flex-wrap py-2 md:py-4',
    ),
    label: 'indent-2 text-sm font-medium',
    input: cn(
      'border-1 border-tertiary-500 rounded-lg',
      'focus:outline-primary focus:outline-1 focus:border-primary focus:outline-offset-0',
      'px-2',
      'text-lg font-bold',
      'h-full',
    ),
    table: cn(
      'bg-card/50',
      'w-full',
      'table-auto',
      'border-border border-separate rounded-md border',
      'overflow-hidden',
      'p-2 md:p-4',
    ),
    tableHead: 'font-display text-xl md:text-2xl',
  };

  const tdStyle = (row: TableRow) =>
    cn('text-center text-xl !font-sans', row.bold && 'font-bold');

  return (
    <div className={'p-2'}>
      <p className={'text-md'}>{copy.local.interest.title}</p>
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
                {copy.local.interest.state}
              </label>
              <select
                id={'state'}
                {...field}
                onChange={(e) => handleFieldChange('state', e.target.value)}
                className={cn(input, 'h-10 w-full')}
              >
                <option value={''}>{copy.local.interest.select}</option>
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
                {copy.local.interest.region}
              </label>
              <select
                id={'subregion'}
                className={cn(input, 'h-10 w-full')}
                {...field}
                onChange={(e) => handleFieldChange('subregion', e.target.value)}
                disabled={!stateValue || stateValue === ''}
              >
                {!stateValue ? (
                  <option value={''}>
                    {copy.local.interest.selectStateFirst}
                  </option>
                ) : (
                  <>
                    <option value={''}>{copy.local.interest.select}</option>
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
                htmlFor={'country'}
                className={label}
              >
                {copy.local.interest.country}
              </label>
              <select
                id={'country'}
                className={cn(input, 'h-10 w-full')}
                {...field}
                onChange={(e) => handleFieldChange('country', e.target.value)}
              >
                <option value={''}>{copy.local.interest.select}</option>
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
      <table className={table}>
        <thead className={tableHead}>
          <tr>
            <th>{copy.local.interest.table.area}</th>
            <th>{copy.local.interest.table.people}</th>
          </tr>
        </thead>

        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td className={tdStyle(row)}>{row.label}</td>
              <td className={tdStyle(row)}>{row.count}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {stateValue && regionValue && (
        <GroupIntentForm
          state={stateValue ?? ''}
          country={countryValue ?? ''}
          subregion={regionValue ?? ''}
          onSuccess={updateTableData}
        />
      )}
    </div>
  );
};

export default GroupInterestTable;
