import express from "express";
import { body } from "express-validator";

import { getAllEmployees, createEmployee, getEmployeeById, updateEmployeeById, deleteEmployeeById } from "../controllers/employeeController.js";


const employeeRouter = express.Router();

employeeRouter.get("/employees", getAllEmployees);

employeeRouter.post("/employees", 
    [
        body("first_name")
            .notEmpty().withMessage("First name is required"),
        body("last_name")
            .notEmpty().withMessage("Last name is required"),
        body("email")
            .notEmpty().withMessage("Email is required")
            .isEmail().withMessage("Invalid email")
            .normalizeEmail(),
        body("position")
            .notEmpty().withMessage("Position is required")
            .trim(),
        body("salary")
            .notEmpty().withMessage("Salary is required")
            .isFloat({ min: 0 }).withMessage("Salary must be a positive number"),
        body("date_of_joining")
            .notEmpty().withMessage("Date of joining is required")
            .isISO8601().toDate().withMessage("Date must be valid"),
        body("department")
            .notEmpty().withMessage("Department is required")
            .trim()
    ],
    createEmployee);

employeeRouter.get("/employees/:eid", getEmployeeById);

employeeRouter.put("/employees/:eid",
    [
        body("first_name")
            .optional()
            .notEmpty().withMessage("First name cannot be empty"),
        body("last_name")
            .optional()
            .notEmpty().withMessage("Last name cannot be empty"),
        body("email")
            .optional()
            .notEmpty().withMessage("Email cannot be empty")
            .isEmail().withMessage("Invalid email")
            .normalizeEmail(),
        body("position")
            .optional()
            .notEmpty().withMessage("Position cannot be empty")
            .trim(),
        body("salary")
            .optional()
            .notEmpty().withMessage("Salary cannot be empty")
            .isFloat({ min: 0 }).withMessage("Salary must be a positive number"),
        body("date_of_joining")
            .optional()
            .notEmpty().withMessage("Date of joining cannot be empty")
            .isISO8601().toDate().withMessage("Date must be valid"),
        body("department")
            .optional()
            .notEmpty().withMessage("Department cannot be empty")
            .trim()
    ]
    ,updateEmployeeById);

employeeRouter.delete("/employees/:eid", deleteEmployeeById);

export default employeeRouter;