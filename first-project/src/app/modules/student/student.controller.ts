import { Request, Response } from 'express';
import { studentService } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body;
    const result = await studentService.createStudentIntoDB(student);
    res.status(200).json({
      success: true,
      data: result,
      message: 'Student created successfully',
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const studentController = {
  createStudent,
};
