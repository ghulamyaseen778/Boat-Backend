import { errHandler, responseHandler } from "../helper/response.js";
import { CreateJob } from "../Models/CreateJobSchema.js";

const CreateNewJob = (req, res) => {
  const body = req.body;
  CreateJob.create(body)
    .then((data) => {
      responseHandler(res, data);
    })
    .catch((err) => {
      errHandler(res, err, 400);
    });
};
const UpdateNewJob = (req, res) => {
  const body = req.body;
  const { id } = req.query;
  CreateJob.findByIdAndUpdate(id, body, { new: true })
    .then((data) => {
      responseHandler(res, data);
    })
    .catch((err) => {
      errHandler(res, err, 400);
    });
};

const GetNewJob = (req, res) => {
  let filter = {};
  let { id } = req.query;
  if (id) {
    filter._id = id;
  }
  CreateJob.find(filter)
    .then((data) => {
      responseHandler(res, data);
    })
    .catch((err) => {
      errHandler(res, err, 400);
    });
};

export { CreateNewJob, GetNewJob, UpdateNewJob };
