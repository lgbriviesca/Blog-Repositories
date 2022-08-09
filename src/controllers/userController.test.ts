import UserController from "./userController";
import * as UserRepository from "../repositories/userRepository";

describe("UserController", () => {
  describe("getUsers", () => {
    test("should return empty array", async () => {
      const spy = jest.spyOn(UserRepository, "getUsers").mockResolvedValueOnce([
        {
          id: 1,
          firstName: "",
          lastName: "",
          email: "",
          posts: [],
          comments: [],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);
      const controller = new UserController();
      const users = await controller.getUsers();
      expect(users).toEqual([
        {
          id: 1,
          firstName: "",
          lastName: "",
          email: "",
          posts: [],
          comments: [],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);
      expect(spy).toHaveBeenCalledWith();
      expect(spy).toHaveBeenCalledTimes(1);
      spy.mockRestore();
    });
  });
});
