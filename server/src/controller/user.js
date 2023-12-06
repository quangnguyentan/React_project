import * as userService from "../services/userService";

export const getCurrent = async (req, res) => {
  const { currentUser } = req;
  try {
    if (!currentUser?.id) {
      res.status(400).json({
        err: 1,
        msg: "missing input",
      });
    }
    const response = await userService.getCurrentService(currentUser?.id);
    return res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      err: -1,
      msg: "Failed at auth controller" + error,
    });
  }
};
