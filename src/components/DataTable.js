import { DataTableWrapper, DataTableLabel, DataTableHeading, DataTableHeader, DataTableValues, DataTableValue } from './styles';

const data = {
  finance: [
      {
          "index": 0,
          "name": "Income",
          "type": "Salary",
          "value": 5000,
      },
      {
          "index": 1,
          "name": "Bills",
          "type": "Electric Bill",
          "value": 1000,
      },
      {
          "index": 2,
          "name": "Bills",
          "type": "Mobile Bill",
          "value": 2000
      },
  ],
};

function DataTable() {
    return (
      <DataTableWrapper>
        <DataTableLabel>Finance Data</DataTableLabel>
        <DataTableHeading>
          {data.finance.map(val => (
            <DataTableHeader key={val.index}>{val.type}({val.name})</DataTableHeader>
          ))}
        </DataTableHeading>
        <DataTableValues>
          {data.finance.map(val => (
            <DataTableValue key={val.index}>{val.value}</DataTableValue>
          ))}
        </DataTableValues>
      </DataTableWrapper>
    );
  }
  
  export default DataTable;
  