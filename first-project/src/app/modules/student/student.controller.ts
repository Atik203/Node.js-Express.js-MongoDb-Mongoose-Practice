import { Request, Response } from 'express';
// import studentValidationSchema from './student.joi.validation';
import { z } from 'zod';
import { studentService } from './student.service';
import studentValidationSchemaZod from './student.zod.validation';

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body.student;

    const zodParseData = studentValidationSchemaZod.parse(student);

    // const { error, value } = studentValidationSchema.validate(student);
    // if (error) {
    //   res.status(500).json({
    //     success: false,
    //     message: error.details[0].message,
    //   });
    // }
    const result = await studentService.createStudentIntoDB(zodParseData);
    res.status(200).json({
      success: true,
      message: 'Student created successfully',
      data: result,
    });
  } catch (error: unknown) {
    if (error instanceof z.ZodError) {
      const messages = error.issues.map((issue) => {
        const message = issue.message;
        return `${message}`;
      });
      res.status(400).json({
        success: false,
        message: messages,
      });
    } else if (error instanceof Error) {
      res.status(500).json({
        success: false,
        message: [error.message],
      });
    } else {
      res.status(500).json({
        success: false,
        message: ['An unknown error occurred'],
      });
    }
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await studentService.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: 'Students fetched successfully',
      data: result,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    } else {
      res.status(500).json({
        success: false,
        message: 'An unknown error occurred',
      });
    }
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const id = req.params.studentId;
    const result = await studentService.getSingleStudentFromDB(id);
    res.status(200).json({
      success: true,
      message: 'Student fetched successfully',
      data: result,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    } else {
      res.status(500).json({
        success: false,
        message: 'An unknown error occurred',
      });
    }
  }
};

export const studentController = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
