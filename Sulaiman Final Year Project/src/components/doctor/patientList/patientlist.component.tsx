import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import "./patientlist.styles.scss";
interface Column {
  id: "name" | "code" | "disease";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "code", label: "Code", minWidth: 100 },
  {
    id: "disease",
    label: "Disease",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
];

interface Data {
  name: string;
  code: string;
  disease: string;
}

function createData(name: string, code: string, disease: string): Data {
  return { name, code, disease };
}

const rows = [
  createData("Suleman", "IN8934", "Fever"),
  createData("Ali", "CN43545", "Acute Pneumonia"),
  createData("Talha", "IT3434", "Colds and Flu"),
  createData("Zubair", "US32432", "Mononucleosis"),
  createData("Umar", "CA4243", "Stomach Ache"),
  createData("Amna", "AU6564", "Diarrhea"),
  createData("Fatima", "DE233", "Mononucleosis"),
  createData("Sadia", "IE4345", "Fever"),
  createData("Asghar", "MX3243", "Cold and Flu"),
  createData("Subhan", "JP4345", "Diarrhea"),
  createData("Alizeh", "FR3243", "Fever"),
  createData("Ahmad", "GB54664", "Diarrhea"),
  createData("Shahid", "RU3231", "Cold"),
  createData("Farhat", "NG54665", "Diarrhea"),
  createData("Zahid", "BR32454", "Mononucleosis"),
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper
      sx={{
        width: "100%",
        opacity: 0.8,
      }}
    >
      <TableContainer
        sx={{
          maxHeight: 440,
        }}
      >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    fontWeight: "bold",
                    fontFamily: "Sans-Serif",
                    fontSize: "1em",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.code}
                    sx={{
                      color: "white",
                    }}
                  >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
