import { useNavigate } from "react-router-dom";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table"

import { Button } from "../components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";


const employees = [
  {
    id: "e001",
    firstName: "Alice",
    lastName: "Smith",
    department: "Engineering",
    email: "alice.s@corp.com"
  },
  {
    id: "e002",
    firstName: "Bob",
    lastName: "Johnson",
    department: "Marketing",
    email: "bob.j@corp.com"
  },
]

export function Dashboard() {
    const navigate = useNavigate();

    const handleAddEmployee = () => {
        navigate("/add")
    };

    const handleDetails = (employeeId) => {
        console.log(`Viewing details for employee: ${employeeId}`);
    };

    const handleEdit = (employeeId) => {
        console.log(`Editing employee: ${employeeId}`);
    };

    const handleDelete = (employeeId) => {
        console.log(`Deleting employee: ${employeeId}`);
    };
        
    return (
        
        <div className="p-6">
            
            <div className="w-1/2 mx-auto">
                <h1 className="text-2xl font-bold mb-6 text-center">Employee Directory</h1>

                {/* Add button */}
                <div className="flex justify-end items-center mb-4">
                    <Button onClick={handleAddEmployee}>
                        Add Employee
                    </Button>
                </div>
                
                {/* Table */}
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Full Name</TableHead>
                            <TableHead>Department</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead className="text-center w-[50px]">Actions</TableHead> 
                        </TableRow>
                    </TableHeader>
                    
                    <TableBody>
                        {employees.map((employee) => (
                            <TableRow key={employee.id}>
                                <TableCell className="font-medium">{`${employee.firstName} ${employee.lastName}`}</TableCell>
                                <TableCell>{employee.department}</TableCell>
                                <TableCell>{employee.email}</TableCell>
                                
                                <TableCell className="text-center">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" className="h-8 w-8 p-0">
                                                <span className="sr-only">Open menu</span>
                                                <MoreHorizontal className="h-4 w-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                            <DropdownMenuItem onClick={() => handleDetails(employee.id)}>
                                                View Details
                                            </DropdownMenuItem>
                                            <DropdownMenuItem onClick={() => handleEdit(employee.id)}>
                                                Edit
                                            </DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem onClick={() => handleDelete(employee.id)} className="text-red-600">
                                                Delete
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}