import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../../components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"

export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSignupRedirect = () => {
        navigate("/signup");
    };

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Submitted:", { email, password });
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle>Login to your account</CardTitle>
                </CardHeader>

                <form onSubmit={handleLogin}>
                    <CardContent>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="example@domain.com"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                </div>
                                <Input 
                                    id="password" 
                                    type="password" 
                                    required 
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>
                    </CardContent>
                    
                    <CardFooter className="flex-col gap-2 ">
                        <Button type="submit" className="w-full">
                            Login
                        </Button>
                        <Button 
                            variant="outline" 
                            className="w-full" 
                            onClick={handleSignupRedirect}
                        >
                            Proceed to Sign up
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    )
}
