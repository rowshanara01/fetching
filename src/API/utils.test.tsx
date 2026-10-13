import Utils from "./utils";

jest.spyOn(Utils, 'fetchData').mockImplementation(() => Promise.resolve([1,2,3]))

describe("Utils", () => {
    it("should call the fetchData function once", async() => {
        await Utils.fetchData();
        expect(Utils.fetchData).toHaveBeenCalled();
        expect(Utils.fetchData).toHaveBeenCalledTimes(1);
    });
})