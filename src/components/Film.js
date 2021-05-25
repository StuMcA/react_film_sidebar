const Film = ({film, filmLink}) => {
    return (
        <a href={filmLink}>
            <p>{film}</p>
        </a>
    )
}

export default Film;