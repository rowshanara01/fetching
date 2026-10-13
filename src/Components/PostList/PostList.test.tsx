import { posts } from "../../MockData/Posts";
import { screen, render } from "@testing-library/react";
import PostList from './PostList'

describe("<PostList />", () => {
    it("should render the postList", () => {
        render(<PostList postList={posts} />);
        expect(screen.getAllByRole('article').length).toBe(5)
    })
})