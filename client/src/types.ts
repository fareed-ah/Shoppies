import { Color } from "@material-ui/lab"

export type Movie = {
    Title: string,
    Year: string,
    Poster: string,
    imdbID: string,
}

export type SnackbarMessage = {
    message: string,
    severity: Color,

}

export const MaxNominationsReached: SnackbarMessage = {
    message: "You have nominated 5 movies!",
    severity: "success",
}

export const MaxNominationsExceeded: SnackbarMessage= {
    message: "You can only nominate 5 movies! Remove a nomination and try again!",
    severity: "warning",
}
