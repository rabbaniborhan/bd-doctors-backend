import doctorModel from "../models/doctorModel.js";

const changeAvailability = async (req, res) => {
  try {
    const { docId } = req.body;
    const docData = await doctorModel.findById(docId);
    await doctorModel.findByIdAndUpdate(docId, {
      available: !docData?.available,
    });

    res.json({ success: true, message: "Availability change" });
  } catch (error) {
    console.error("Error is change availability:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

const doctorLists = async (req, res) => {
  try {
    const doctors = await doctorModel.find({}).select("-password -email");
    res.json({ success: true, doctors });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export { changeAvailability, doctorLists };
