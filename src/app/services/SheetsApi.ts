import regions from '@/constants/regions';
import { env } from '@/env';
import { google } from 'googleapis';

const perth = [
  regions['WA'][2],
  regions['WA'][3],
  regions['WA'][4],
  regions['WA'][5],
  regions['WA'][6],
];
const adelaide = [
  regions['SA'][0],
  regions['SA'][1],
  regions['SA'][2],
  regions['SA'][3],
];
const melbourne = [
  regions['VIC'][5],
  regions['VIC'][6],
  regions['VIC'][7],
  regions['VIC'][8],
  regions['VIC'][9],
  regions['VIC'][10],
  regions['VIC'][11],
  regions['VIC'][12],
];
const sydney = [
  regions['NSW'][14],
  regions['NSW'][15],
  regions['NSW'][16],
  regions['NSW'][17],
  regions['NSW'][18],
  regions['NSW'][19],
  regions['NSW'][20],
  regions['NSW'][21],
  regions['NSW'][22],
  regions['NSW'][23],
  regions['NSW'][24],
  regions['NSW'][25],
  regions['NSW'][26],
  regions['NSW'][27],
];
const brisbane = [
  regions['QLD'][0],
  regions['QLD'][1],
  regions['QLD'][2],
  regions['QLD'][3],
  regions['QLD'][4],
];

interface GroupIntentRow {
  state?: string;
  region?: string;
  country?: string;
}

export interface TableRow {
  label: string;
  count: number;
  bold: boolean;
}

class SheetsApi {
  private auth = new google.auth.JWT({
    email: env.GOOGLE_SHEETS_CLIENT_EMAIL,
    key: env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, '\n'),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  private sheets = google.sheets({ version: 'v4', auth: this.auth });

  public data: GroupIntentRow[] = [];

  get initialised(): boolean {
    return this.data.length > 0;
  }

  public getSheetData = async (sheetId: string, range: string) => {
    const response = await this.sheets.spreadsheets.values.get({
      spreadsheetId: sheetId,
      range,
    });
    if (response.data.values) {
      this.data = this.mapRawData(response.data.values);
    }
  };

  public getTableRows = (params: {
    state: string | null;
    region: string | null;
    country: string | null;
  }): TableRow[] => {
    const rows: TableRow[] = [];
    if (!params.state && !params.region && !params.country) {
      const national = {
        label: 'Australia',
        count: this.data.length,
        bold: true,
      };
      rows.push(national);
      return rows;
    }

    if (params.region) {
      // If in capital city, add nearby regions
      if (params.state) {
        switch (params.state) {
          case 'NSW':
            this.populateRegionRows({
              selectedRegion: params.region,
              city: sydney,
              rows,
            });
            break;
          case 'VIC':
            this.populateRegionRows({
              selectedRegion: params.region,
              city: melbourne,
              rows,
            });
            break;
          case 'SA':
            this.populateRegionRows({
              selectedRegion: params.region,
              city: adelaide,
              rows,
            });
            break;
          case 'QLD':
            this.populateRegionRows({
              selectedRegion: params.region,
              city: brisbane,
              rows,
            });
            break;
          case 'WA':
            this.populateRegionRows({
              selectedRegion: params.region,
              city: perth,
              rows,
            });
            break;
        }
      }

      // Add selected region
      const regionRows = this.data.filter(
        (row) => row.region === params.region,
      );
      const region = {
        label: params.region,
        count: regionRows.length,
        bold: true,
      };
      rows.push(region);
    }

    if (params.state) {
      const stateRows = this.data.filter((row) => row.state === params.state);
      const state = {
        label: params.state,
        count: stateRows.length,
        bold: true,
      };
      rows.push(state);
    }

    if (params.country) {
      const countryRows = this.data.filter(
        (row) => row.country === params.country,
      );
      const country = {
        label: params.country,
        count: countryRows.length,
        bold: true,
      };
      rows.push(country);
    }

    return rows;
  };

  private populateRegionRows({
    selectedRegion,
    city,
    rows,
  }: {
    selectedRegion: string;
    city: string[];
    rows: TableRow[];
  }) {
    if (city.includes(selectedRegion)) {
      const otherRegions = city.filter((r) => r !== selectedRegion);
      for (const r of otherRegions) {
        const regionRows = this.data.filter((row) => row.region === r);
        const region = {
          label: r,
          count: regionRows.length,
          bold: false,
        };
        rows.push(region);
      }
    }
  }

  private mapRawData = (data: string[][]): GroupIntentRow[] => {
    const rows: GroupIntentRow[] = [];
    const headerRow = data.shift();
    const stateIndex = headerRow?.indexOf('state');
    const regionIndex = headerRow?.indexOf('subregion');
    const countryIndex = headerRow?.indexOf('country');

    if (!stateIndex || !regionIndex || !countryIndex) {
      throw new Error('Unexpected sheet data');
    }

    for (const row of data) {
      const newRow: GroupIntentRow = {
        state: row[stateIndex],
        region: row[regionIndex],
        country: row[countryIndex],
      };
      rows.push(newRow);
    }
    return rows;
  };
}

const sheetsApi = new SheetsApi();

export default sheetsApi;
