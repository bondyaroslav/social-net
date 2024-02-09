import React, { useState } from "react"
import { Pagination, PaginationItem } from "@mui/material"

const Music = () => {
    const pageSize = 5
    const [currentPage, setCurrentPage] = useState(1)

    const music = [
        { name: "name1", album: "album1", id: 1 },
        { name: "name2", album: "album2", id: 2 },
        { name: "name3", album: "album3", id: 3 },
        { name: "name4", album: "album4", id: 4 },
        { name: "name5", album: "album5", id: 5 },
        { name: "name6", album: "album6", id: 6 },
        { name: "name7", album: "album7", id: 7 },
        { name: "name8", album: "album8", id: 8 },
        { name: "name9", album: "album9", id: 9 }
    ]

    const paginate = (array, pageSize, currentPage) => {
        return array.slice((currentPage - 1) * pageSize, currentPage * pageSize)
    }

    const paginatedMusic = paginate(music, pageSize, currentPage)

    const onChangePage = (event, page) => {
        setCurrentPage(page)
    }

    return (
        <div>
            {paginatedMusic.map((song) => (
                <div key={song.id}>{song.name}</div>
            ))}

            <Pagination
                count={Math.ceil(music.length / pageSize)}
                page={currentPage}
                onChange={onChangePage}
                renderItem={(item) => (
                    <PaginationItem
                        component="div"
                        {...item}
                    />
                )}
            />
        </div>
    )
}

export default Music
