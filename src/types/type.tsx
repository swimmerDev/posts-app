import React from "react";

export type PostParams = {
    userId?: number,
    id?: number,
    title: string,
    body: string,
}

export type PostItemComponent = {
    post:PostParams,
    index: number;
    remove: (removePost: PostParams) => void;
    }

export type PostListComponent = {
    posts: Array<PostParams>,
    title: string,
    remove: (removePost: PostParams) => void;
};

export type PostBtn = {
    children: string,
    disabled?: boolean,
    onClick?: (e: React.SyntheticEvent) => void,
}

export type PostInputComponent = {
    type: string,
    placeholder: string,
    value?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    // onBlur?: (event: SyntheticInputEvent<HTMLInputElement>) => void,
    // onFocus?: (event: SyntheticInputEvent<HTMLInputElement>) => void,
}

export interface PostFormComponent {
    create: (newPost: PostParams) => void;
}

export type OptionParams = {
    value: string,
    label: string,
}

export type PostSelectComponent = {
    defaultValue: string,
    value: string,
    onChange: (e: string) => void,
    options: OptionParams[],
}

export type FilterParams = {
    sort: string,
    query: string,
}

export type PostFilterComponent = {
   filter: FilterParams,
   setFilter: React.Dispatch<React.SetStateAction<FilterParams>>,
}

export type CreateModalComponent = {
    visible: boolean,
    children: React.ReactNode,
    setVisible: React.Dispatch<React.SetStateAction<boolean>>,
}


export type fetshingParams = {
[
    fetching: Promise<void>,
    isLoading: boolean,
    error: string,
]
}