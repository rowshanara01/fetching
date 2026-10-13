import { renderHook, waitFor } from "@testing-library/react";
import useFetchPosts from "./useFetchPosts";
import React from 'react'

describe("useFetchPosts()", () => {

    it("should fetch the 5 post data", async() => {
        const { result } = renderHook(() => useFetchPosts());
        await waitFor(() => {
            expect(result.current.postList.length).toBe(5)
        })
    });
    it("should run useEffect hook only 1 time", async() => {
        renderHook(() => useFetchPosts());
        jest.spyOn(React, 'useEffect').getMockImplementation();
        await waitFor(() => {
            expect(React.useEffect).toHaveBeenCalled();
            expect(React.useEffect).toHaveBeenCalledTimes(1);
        })
    })

})
