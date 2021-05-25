import Film from "./Film";

const FilmList = ({films}) => {

    const filmNodes = films.map(film => {
        return(
            <Film film={film.name} filmLink={film.url} key={film.id}/>
        )
    }) 
    return(
        <>
            {filmNodes}
        </>
    )
}

export default FilmList;