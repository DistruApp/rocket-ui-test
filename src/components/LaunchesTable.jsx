import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import moment from "moment";
import { LaunchesContext } from "../hooks/launchesProvider";

const columns = [
    { id: 'flight_number', label: 'Flight Number', maxWidth: 170 },
    { id: 'mission_name', label: 'Mission Name', maxWidth: 170 },
    {
        id: 'launch_date_local',
        label: 'Launch Date',
        minWidth: 170,
        align: 'left',
    },
    { id: 'launch_site', label: 'Launch Site', maxWidth: 200 },
    {
        id: 'rocket_name',
        label: 'Rocket Name',
        minWidth: 170,
        align: 'right',
    },
];

const mapLaunchDataToTable = launches => {
    return launches.map( launch => ({
        flight_number: launch.flight_number,
        mission_name: launch.mission_name,
        launch_date_local: launch.launch_date_local,
        launch_site: launch.launch_site.site_name_long,
        rocket_name: launch.rocket.rocket_name
    }))
}

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 600,
    },
});

export default function LanchesTable({launches}) {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(50);
    const { setShowModal, setLaunchToView } = useContext(LaunchesContext);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleRowClick = row => {
        setShowModal(true);
        setLaunchToView(row);
    }

    return (
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {mapLaunchDataToTable(launches).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                            return (
                                <TableRow
                                    hover
                                    role="checkbox"
                                    tabIndex={-1}
                                    key={row.code}
                                    onClick={() =>  handleRowClick(row)}
                                >
                                    {columns.map((column) => {
                                        let value = row[column.id];
                                        if(column.id === "launch_date_local"){
                                            value = moment(new Date(value)).format("h:mma on LL");
                                        }
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {column.format && typeof value === 'number' ? column.format(value) : value}
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
                rowsPerPageOptions={[10, 50, 100]}
                component="div"
                count={launches.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
