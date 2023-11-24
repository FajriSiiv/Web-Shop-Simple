// "use client";
// import DataTable from "react-data-table-component";

// interface ColumnType {
//   age: number;
//   firstName: string;
//   lastName: string;
//   progress: number;
//   visits: number;
//   id: string;
// }

// export default function MainTable({ users }: { users: ColumnType[] }) {
//   const columns = [
//     {
//       name: "First Name",
//       selector: (row: ColumnType) => row.firstName,
//     },
//     {
//       name: "Last Name",
//       selector: (row: ColumnType) => row.lastName,
//     },
//     {
//       name: "ID",
//       selector: (row: ColumnType) => row.id,
//     },
//     {
//       name: "Age",
//       selector: (row: ColumnType) => row.age,
//     },

//     {
//       name: "Progress",
//       selector: (row: ColumnType) => row.progress,
//     },
//     {
//       name: "Visits",
//       selector: (row: ColumnType) => row.progress,
//     },
//   ];

//   return <DataTable columns={columns} data={users} />;
// }
