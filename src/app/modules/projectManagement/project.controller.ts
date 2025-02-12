import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { projectServices } from './project.service';

const addProjectData = catchAsync(async (req, res) => {
    // console.log(req.body);
  const result = await projectServices.addProjectDataIndoDB(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Project Data Added Successfully',
    data: result,
  });
});
const getAllProjectData = catchAsync(async (req, res) => {
  const result = await projectServices.getAllProjectDataFromDB();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Project Data retrived successfully',
    data: result,
  });
});
const deleteProjectData = catchAsync(async (req, res) => {
  // console.log(req.body);
  const result = await projectServices.deletedProjectIntoDB(req.body.id);
  // console.log(result);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Project Data deleted successfully',
    data: result,
  });
});
const updateProjectData = catchAsync(async (req, res) => {
  // console.log(req.body.BookId);
  // console.log(req.body.bookInfo);
  // console.log(req.body.id);
  const result = await projectServices.updateProjectIntoDB(req.body.projectId, req.body.projectInfo);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Project Data updated successfully',
    data: result,
  });
});

export const projectController = {
    addProjectData,
    getAllProjectData,
    deleteProjectData,
    updateProjectData
};
