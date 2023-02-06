import React from "react";
import PostInput from "./UI/PostInput/PostInput";
import PostSelect from "./UI/PostSelect/PostSelect";
import { FilterParams } from "../types/type";

type PostFilterProps = {
    filter: FilterParams,
    setFilter: React.Dispatch<React.SetStateAction<FilterParams>>,
}

const PostFilter = ({filter, setFilter}:PostFilterProps) => {
    return (
        <div>   
            <PostInput
                placeholder="Поиск..."
                type="text"
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
            />
            <PostSelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue="Сортировка по"
                options={[
                { value: "title", label: "По названию" },
                { value: "body", label: "По описанию" },
                ]}
            />

        </div>
    )
}

export default PostFilter;