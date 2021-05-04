import { Color } from "@material-ui/lab"

export type Movie = {
    Title: string,
    Year: string,
    Poster: string,
    imdbID: string,
}

export type DetailedMovie = {
    Title: string,
    Year: string,
    Poster: string,
    imdbID: string,
    Runtime: string,
    Genre: string,
    Released:string,
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

export const EmptyMovie:DetailedMovie = {
    Title: "N/A",
    Year: "N/A",
    Poster: "N/A",
    imdbID: "N/A",
    Runtime: "N/A",
    Genre: "N/A",
    Released:"N/A",
}
