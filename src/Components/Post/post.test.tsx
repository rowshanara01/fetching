import { render, screen } from "@testing-library/react";
import Post from './post'
import { PostProps } from "../../interface";
import userEvent from "@testing-library/user-event";
import React from "react";

const post:PostProps = {
    id: 1,
    title: 'First Post',
    body: 'This is the post description...',
    image: {
        url: 'https://images.unsplash.com/photo-1545264835-3e14e4dae383?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cG9zdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        alt: 'first Post'
    },
    isFavourite: false
}

describe("<Post />", () => {

    it("should render without error", () => {
        render( <Post {...post} /> );
        expect(screen.getByRole('article')).toBeInTheDocument();
    });

    it("should render the post title", () => {
        render( <Post {...post} /> );
        expect(screen.getByRole('heading', { name: 'First Post' })).toBeInTheDocument();
    })

    it("should render the post description", () => {
        render( <Post {...post} /> );
        expect(screen.getByText(/This is the post description.../i)).toBeInTheDocument();
    });

    it("should render the post image", () => {
        render( <Post {...post} /> );
        expect(screen.getByAltText(/first Post/i)).toBeInTheDocument();
    })

    it("should show heart-outline image when favourite is false", () => {
        render( <Post {...post} /> );
        expect(screen.getByAltText("Outline Heart")).toBeInTheDocument();
        expect(screen.queryByAltText("Filled Heart")).not.toBeInTheDocument();

    })

    it("should show heart image when favourite is true", () => {
        render( <Post {...post} isFavourite={true} /> );
        expect(screen.queryByAltText("Outline Heart")).not.toBeInTheDocument();
        expect(screen.getByAltText("Filled Heart")).toBeInTheDocument();
    })

    it("should toggle onClick", () => {
        render( <Post {...post} /> );
        expect(screen.getByAltText("Outline Heart")).toBeInTheDocument();

        userEvent.click(screen.getByRole('button'))
        expect(screen.queryByAltText("Outline Heart")).not.toBeInTheDocument();
        expect(screen.getByAltText("Filled Heart")).toBeInTheDocument();
    })

    it("should run useState hook once when the button is clicked.", async() => {

        const setFavourite = jest.fn();
        const favourite = false;
        jest.spyOn(React, 'useState').mockImplementation(() => [favourite, setFavourite]);

        render( <Post {...post} /> );

        const button: HTMLButtonElement = screen.getByRole('button');
        userEvent.click(button);
        expect(setFavourite).toHaveBeenCalled();
        expect(setFavourite).toHaveBeenCalledTimes(1);
        expect(setFavourite).toHaveBeenCalledWith(!favourite);
    })
})